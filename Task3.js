document.addEventListener('DOMContentLoaded', function () {
    let display = document.getElementById('display');
    let currentInput = '';

    function updateDisplay() {
        display.value = currentInput;
    }

    function handleOperation(operator) {
        currentInput += ` ${operator} `;
        updateDisplay();
    }

    function calculateResult() {
        try {
            currentInput = currentInput
                .replace(/x/g, '*') // Replace 'x' with '*'
                .replace(/(\d+)\s*\/\s*(\d+)/g, (match, p1, p2) => parseFloat(p1) / parseFloat(p2)) // Handle division
                .replace(/(\d+)\s*\*\s*(\d+)/g, (match, p1, p2) => parseFloat(p1) * parseFloat(p2)); // Handle multiplication
            currentInput = eval(currentInput).toString();
            updateDisplay();
        } catch (error) {
            currentInput = 'Error';
            updateDisplay();
        }
    }
	function clearInput() {
    currentInput = '';
    updateDisplay();
}
        document.querySelectorAll('#calculator button').forEach(function (button) {
        button.addEventListener('click', function () {
            const buttonValue = button.textContent;
            if (!isNaN(buttonValue) || buttonValue === '.') {
                currentInput += buttonValue;
                updateDisplay();
            } else if (buttonValue === '=') {
                calculateResult();
            } else if (buttonValue === 'C') {
                clearInput();
            } else {
                handleOperation(buttonValue);
            }
        });
    });
});