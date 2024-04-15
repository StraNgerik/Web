class CalculatorView {
    constructor() {
        this.numberButtons = document.querySelectorAll('.btn-number button');
        this.clearButton = document.querySelector('.btn-clear button');
        this.equalsButton = document.querySelector('.btn-result button');
        this.operationButtons = document.querySelectorAll('.btn-operation button');
        this.displayField = document.querySelector('.form-group input');
    }

    bindNumberButtonClick(handler) {
        this.numberButtons.forEach(button => {
            button.addEventListener('click', () => {
                const digit = button.textContent;
                handler(digit);
            });
        });
    }

    bindOperationButtonClick(handler) {
        this.operationButtons.forEach(button => {
            button.addEventListener('click', () => {
                handler(button.textContent);
            });
        });
    }

    bindClearButtonClick(handler) {
        this.clearButton.addEventListener('click', handler);
    }

    bindEqualsButtonClick(handler) {
        this.equalsButton.addEventListener('click', handler);
    }

    updateDisplay(value) {
        this.displayField.value = value;
    }
}