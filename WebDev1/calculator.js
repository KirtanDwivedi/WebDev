let currentInput = "";
let previousInput = "";
let operator = null;
const display = document.getElementById("display"); // can use querySelector("#display") also

function appendNumber(number) {
    if (currentInput == "0") currentInput = "";
    currentInput += number;
    updateDisplay();
}

function setOperator(op) {
    if (currentInput === "" && previousInput === "") return;
    if (currentInput === "" && operator !== null) {
        operator = op; // Allow changing operator
        updateDisplay(); // to display operators
        return;
    }
    if (previousInput !== "") {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
    updateDisplay();
}

function calculate() {
    let result;
    const prev = parseInt(previousInput);
    const current = parseInt(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = null;
    previousInput = "";
    updateDisplay();
}

function clearDisplay() {
    currentInput = "0";
    previousInput = "";
    operator = null;
    updateDisplay();
}

function updateDisplay() {
    let displayText = "";
    if (previousInput !== "") {
        displayText += previousInput + " " + (operator || "") + " ";
    }
    displayText += currentInput || (operator ? "" : "0");
    display.textContent = displayText.trim() || "0"; // trim removes whitespace
}

document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (/[0-9]/.test(key)) {
        appendNumber(key);
    } else if (["+", "-", "*", "/"].includes(key)) {
        setOperator(key);
    } else if (key === "=" || key === "Enter") {
        calculate();
    } else if (key.toLowerCase() === "c" || key === "Escape") {
        clearDisplay();
    } else if (key === "Backspace") {
        if (currentInput.length > 0) {
            currentInput = currentInput.slice(0, -1);
            updateDisplay();
        }
    }
});
// queryselector can be use for class, id, tag name
// queryselectorall can be use for multiple class, id, tag name(body, div, h1, p, button, etc)
// getelementbyid can be use for only id

// class can be used for multiple elements in HTML
// id can be used for only one element in HTML