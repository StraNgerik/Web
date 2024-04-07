let operand = 0;
let currentValue = 0;
let selectedOperation = null;
let equalbtn = false;

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const digit = button.textContent;
        displayField.value += digit;
        currentValue = parseFloat(displayField.value);
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(selectedOperation != null) {
            if (!equalbtn) {
                currentValue = parseFloat(displayField.value);
                operand = performOperation(operand, currentValue, selectedOperation);
                selectedOperation = button.textContent;
            }
            else {
                currentValue = parseFloat(displayField.value);
                selectedOperation = button.textContent;
                operand = currentValue;
            }
        }
        else {
            selectedOperation = button.textContent;
            operand = currentValue;
        }
        displayField.value = '';
        equalbtn=false;
    });
});

clearButton.addEventListener('click', () => {
    displayField.value = '';
    currentValue = 0;
    operand = 0;
    selectedOperation = null;
});

equalsButton.addEventListener('click', () => {
    operand = performOperation(operand, currentValue, selectedOperation);
    displayField.value = operand;
    equalbtn=true;
});