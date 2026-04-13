// import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

function Header(props) {
    const [age, setAge] = useState({ age: props.age, name: props.name })
    const updateAge = () => {
        setAge({ age: age.age + 1, name: age.name })
    }

    const [food, setFood] = useState(["Apple", "Banana", "Orange"]);

    const handleFoodSubmit = () => {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";   // this will refresh the text input column
        setFood([...food, newFood]); // append the value of array
    }

    // useEffect
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [])

    const mess1 =
        <header>
            <h1>Hello {props.name}</h1>
            <nav>
                <span>
                    <a href="#">Home &nbsp;</a>
                    <a href="#">About &nbsp;</a>
                    <a href="#">Contact &nbsp;</a>
                </span>
            </nav>
        </header>

    const mess2 = <h1>You are not eligible for this website</h1>


    return (props.age >= 18 ? //mess1 
        <div>
            <h1>List of food</h1>
            <ul>
                {food.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter your food" />
            <button onClick={handleFoodSubmit}>Add Food</button>
        </div>
        // useEffect
        // <div>
        //     <p>You clicked {count} times</p>
        //     <button onClick={() => setCount(count + 1)}>Click me</button>
        // </div>
        : mess2 // <button onClick={updateAge}>Update Age</button>
    )
}

Header.defaultProps = {
    name: "Guest"
}
// Header.propTypes = {
//     name: PropTypes.string.isRequired
// }
export default Header