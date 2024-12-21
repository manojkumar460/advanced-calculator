const display = document.getElementById("display");

// Append value to the display
function append(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Clear the display
function clearDisplay() {
    display.innerText = "0";
}

// Remove the last character
function backspace() {
    if (display.innerText.length === 1) {
        display.innerText = "0";
    } else {
        display.innerText = display.innerText.slice(0, -1);
    }
}

// Evaluate the expression
function calculate() {
    try {
        display.innerText = eval(display.innerText.replace("×", "*").replace("÷", "/"));
    } catch {
        display.innerText = "Error";
    }
}
