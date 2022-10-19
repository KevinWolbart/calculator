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
    if (b === 0) {
        deleteAll();
        return NaN;
    } else {
        return a / b;
    }
}

function operate(operator, a, b) {
    if ((a == NaN) || (b == NaN)) {
        deleteAll();
    }
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
    if (display.textContent === "Error") {
        display.textContent = "";
        display.textContent += num;
    } else if (display.textContent.includes("=")) {
        display.textContent = num;
    } else {
        display.textContent += num;
    }
}

function calculate() {
    if (!operations.operator || (operations.number === "") || (display.textContent === "")) {
        display.textContent = "Error";
        operations.number = "";
        operations.operator = "";
    } else {
        if (!(operate(operations.operator, operations.number, Number(display.textContent)))) {
            deleteAll();
            display.textContent = "Error";
        } else {
            operations.number = operate(operations.operator, operations.number, Number(display.textContent));
            display.textContent = `= ${operations.number}`;
            operations.operator = "";
        }
        
    }
}

function enterOperator(op) {
    if (!operations.operator && (operations.number === "")) {
        operations.operator = op;
        operations.number = Number(display.textContent);
        console.log(operations);
        display.textContent = "";
    } else if (operations.operator && (display.textContent === "")) {
        display.textContent = "Error";
        operations.number = "";
        operations.operator = "";
    } else if (operations.operator && !(operations.number === "")) {
        if (!(operate(operations.operator, operations.number, Number(display.textContent)))) {
            display.textContent = "Error";
            operations.number = "";
            operations.operator = "";
        } else {
            operations.number = operate(operations.operator, operations.number, Number(display.textContent));
            operations.operator = op;
            console.log(operations);
            display.textContent = `= ${operations.number}`;
        }
    } else if (!operations.operator && !(operations.number === "")) {
        operations.operator = op;
        console.log(operations);
    }
}

function deleteAll() {
    display.textContent = "";
    operations.number = "";
    operations.operator = "";
}