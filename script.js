const display = document.querySelector(".display");
let operations = {
    number: "",
    operator: "",
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch(operator) {
        case "+":
            return add(a,b);
            break;
        case "-":
            return subtract(a,b);
            break;
        case "*":
            return multiply(a,b);
            break;
        case "/":
            return divide(a,b);
            break;
    } 
}

function displayNumber(num) {
    if (display.textContent === "Improper Entry, Retry") {
        display.textContent = "";
    } else if (display.textContent.includes("=")) {
        display.textContent = num;
    } else {
        display.textContent += num;
    }
}

function calculate() {
    if (!operations.operator || !operations.number || !display.textContent) {
        display.textContent = "Improper Entry, Retry";
        operations.number = "";
        operations.operator = "";
    } else {
        display.textContent = `= ${operate(operations.operator, operations.number, Number(display.textContent))}`;
    }
}

function enterOperator(op) {
    if (!operations.operator && !operations.number) {
        operations.operator = op;
        operations.number = Number(display.textContent);
        console.log(operations);
        display.textContent = "";
    } else if (operations.operator && !display.textContent) {
        display.textContent = "Improper Entry, Retry";
        operations.number = "";
        operations.operator = "";
    } else if (operations.operator && operations.number) {
        operations.number = operate(operations.operator, operations.number, Number(display.textContent));
        operations.operator = op;
        console.log(operations);
        display.textContent = `= ${operations.number}`;
    }
}

function clear() {
    display.textContent = "";
    operations.number = "";
    operations.operator = "";
}