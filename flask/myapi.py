# to run fastapi use pip install uvicorn
# to run flask use flask run
# ls in linux; dir in windows

from fastapi import FastAPI, Path, Query, HTTPException
from typing import Optional
from pydantic import BaseModel

class Student(BaseModel):
    name: str
    age: int
    course: str

class UpdateStudent(BaseModel):
    name: Optional[str] = None
    age: Optional[int] = None
    course: Optional[str] = None

app = FastAPI()
PORT= 8000

students={
    0: {"name": "Kirtan", "age": 22, "course": "COE"},
    1: {"name": "Kalash", "age": 23, "course": "ENC"},
}

@app.get("/")
def index():
    return {"name": "Kirtan Dwivedi"}

@app.get("/about")
def about():
    return {"about": "This is about page"}

# @app.get("/students/id/{id}")
# def get_student(id: int = Path(..., title="The ID of the student to retrieve", ge=0)):
#     if id not in students:
#         return {"error": "Student not found"}
#     return students[id]

# @app.get("/students/name/{name}")
# def get_student_by_name(name: str = Path(..., title="The name of the student to retrieve")):
#     for student in students:
#         if students[student]["name"].lower() == name.lower():
#             return students[student]
#     return {"error": "Student not found"}

@app.get("/students")
def get_students(*,
    student_id: Optional[int] = Query(None, description="Search by ID", ge=0),
    name: Optional[str] = Query(None, description="Search by Name")
):
    # Case 1: Search by ID
    if student_id is not None:
        if student_id in students:
            return students[student_id]
        raise HTTPException(status_code=404, detail="Student ID not found")

    # Case 2: Search by Name
    if name:
        for s_id, s_data in students.items():
            if s_data["name"].lower() == name.lower():
                return s_data
        raise HTTPException(status_code=404, detail="Student name not found")

    # Case 3: No parameters provided (optional: return all)
    return students

@app.post("/create-student/{student_id}")
def create_student(student_id: int, student: Student):
    if student_id in students:
        raise HTTPException(status_code=400, detail="Student ID already exists")
        # return {"error": "Student ID already exists"}
    students[student_id] = student
    return student

@app.put("/update-student/{student_id}")
def update_student(student_id: int, student: UpdateStudent):
    if student_id not in students:
        raise HTTPException(status_code=404, detail="Student ID not found")

    if student.name is not None:
        students[student_id].name = student.name
    if student.age is not None:
        students[student_id].age = student.age
    if student.course is not None:
        students[student_id].course = student.course
    return students[student_id]

@app.delete("/delete-student/{student_id}")
def delete_student(student_id: int):
    if student_id not in students:
        raise HTTPException(status_code=404, detail="Student ID not found")
    del students[student_id]
    return {"message": "Student deleted successfully"}

# @app.get("/contact")
# def read_contact():
#     return {"contact": "This is contact page"} 