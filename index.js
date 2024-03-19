let display = document.getElementById('display');

function appendCharacter(char) {
    display.value += char;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        let result = eval(display.value);
        if (isNaN(result) || !isFinite(result)) {
            display.value = 'Error';
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = 'Error';
    }
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

// Add event listeners to handle keyboard input
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
    const key = event.key;

    // Handle numeric keys, operators, and decimal point
    if (!isNaN(key) || key === '.' || ['+', '-', '*', '/'].includes(key)) {
        appendCharacter(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLastCharacter();
    } else if (key === 'Escape') {
        clearDisplay();
    }
}
