package main
import (
	"fmt"
	// "strings"
	// "math/rand"
	// "time"
	// "sync"
)

// // Goroutines + WaitGroup
// var m= sync.Mutex{} // if two go routines tries to access the same resource then it will lock the resource
// var wg=  sync.WaitGroup{}
// var dbData= []string{"id1", "id2", "id3", "id4", "id5"}


// type student struct {
// 	name string
// 	age  int
// 	party bool
// }
// func (e student) handleParty() uint8 {
// 	if e.party {
// 		return 1
// 	}
// 	return 0
// }

// type class interface {
// 	handleParty() uint8
// }

func sumSlice[T int | float32 | float64](slice []T) T { // use any also
	var sum T
	for _, v:= range slice{
		sum += v
	}
	return sum
}
func main() {
	// a,b := 100, 00
	// var A [3]int= [3]int{1,2,3}
	// A:= [...]int{1,2,3} // compiler will determine the size of the array based on the number of elements provided
	// fmt.Println(A[0:2])

	// var mymap map[string]uint8 = map[string]uint8{"one": 1, "two": 2}
	// fmt.Println(mymap["one"])

	// select -- case

	// result, remainder, err := divide(a, b)
	// if err != nil {
	// 	fmt.Println(err)
	// 	return
	// }
	// fmt.Println(`Result:`, result, `Remainder:`, remainder)

	// for name, age := range mymap {
	// 	fmt.Printf("Name: %s, Age: %d\n", name, age)
	// }
	// for i := 0; i < len(A); i++ {}

	// %v for any value verb
	// %T for any type verb
	// use UTF-8 encoding for string literals
	// str := "Hello"
	// fmt.Printf("String: %s Type: %T\n", str, str)
	// var str1= []rune(str) // convert string to slice of runes to handle Unicode characters properly
	// fmt.Printf("Runes: %v Type: %T\n", str1, str1)

	// var str2 = []string{"h", "e", "l", "l", "o"}
	// var strbuilder strings.Builder
	// for _, s := range str2 {
	// 	strbuilder.WriteString(s)
	// }
	// var result = strbuilder.String()
	// fmt.Printf("Result: %v\n", result)

	// struct
	// var s1 student = student{name: "Alice", age: 20}
	// fmt.Printf("Student Name: %s, Age: %d\n", s1.name, s1.age)
	// // pointer to struct
	// var ptr *student = &s1
	// fmt.Printf("Student Name: %s, Age: %d\n", ptr.name, ptr.age)

	// classes in GO 
	// var s1 student = student{name: "Alice", age: 20, party: true}
	// fmt.Printf("Student Name: %s, Age: %d, Party: %d\n", s1.name, s1.age, s1.haveParty())

	// var c class = student{name: "Alice", age: 20, party: true}
	// fmt.Println(c.handleParty()) // interface is a collection of method signatures that a type must implement to satisfy the interface
	
	// t0:= time.Now() // Goroutines-- Multitasking, multiple cpu core
	// for i:=0; i< len(dbData); i++ {
	// 	wg.Add(1)	
	// 	go dbCall(i) // go toutine creates a new thread and executes the function in that thread
	// }
	// wg.Wait()	
	// fmt.Printf("Time: %v", time.Since(t0))

	// channels- Hold Data, Thread Safe, Listen for Data-- for deadlock state
	var c= make(chan int) 
	go process(c)
	for i:range c{
		fmt.Println(i)
	}
	// c <- "hello" // send data to channel
	// fmt.Println(<-c) // receive data from channel
}

// channels
// func process(c chan int) {
// 	defer close(c) // close the channel after the function is done
// 	for i:=0; i< 10; i++ {
// 		c <- i
// 	}
// }

// Goroutines
// func dbCall(i int) {
// 	var delay float32= rand.Float32() * 2000
// 	time.Sleep(time.Duration(delay) * time.Millisecond)
// 	fmt.Printf("Data: %s\n", dbData[i])
// 	save(dbData[i])
// 	// log()
// 	wg.Done()
// }

//Rlock can be used when multiple goroutines are reading the data at the same time
// func save(result string){
// 	m.Lock()
// 	result= append(result, dbData[i])
// 	m.Unlock()
// }
// func log(){
// 	m.RLock()
// 	fmt.Printf("Data: %s\n", dbData)
// 	m.RUnlock()
// }

// func divide(a int, b int) (int, int, error) {
// 	if b == 0 {
// 		return 0, 0, fmt.Errorf("Error: Division by zero")
// 	}else{
// 		return a / b, a % b, nil
// 	}
// }