function func1() {
    for (let i = 0; i < 100000000; i++) {
        // some work
    }
    return "Function 1 finished";
}
function measureFunctionTime(fn) {
    const start = performance.now(); // Record the start time
    const result = fn(); // Execute the function
    const end = performance.now(); // Record the end time

    const duration = end - start; // Calculate the duration in milliseconds
    console.log(`Execution time of ${fn.name}: ${duration} milliseconds`);
    return { result, duration };
}

const { result: func1Result, duration: func1Duration } = measureFunctionTime(func1);
console.log(func1Result);

function func2() {
    console.log("YO-YO");
}

if (func1Duration < 100) {
    func2();
    console.log("Function 2 finished");
} else {
    console.log("Function 2 not finished");
}

/*

// if we use setTimeout
setTimeout(() => {
    console.log("Function 2 finished");
}, 34);

// if we use setInterval
setInterval(() => {
    console.log("Function 2 finished");
}, 34);

setTimeout is used for one time and setInterval is used for multiple times,
setTimeout will even run if the function performance time is above the setTimeout time

*/