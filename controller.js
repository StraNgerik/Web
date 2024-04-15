class CalculatorController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindNumberButtonClick(this.handleNumberButtonClick);
        this.view.bindOperationButtonClick(this.handleOperationButtonClick);
        this.view.bindClearButtonClick(this.handleClearButtonClick);
        this.view.bindEqualsButtonClick(this.handleEqualsButtonClick);
    }

    handleNumberButtonClick = digit => {
        if (this.model.selectedOperation || this.model.currentValue === 0) {
            this.model.currentValue = parseFloat(digit);
        } else {
            this.model.currentValue = this.model.currentValue * 10 + parseFloat(digit);
        }
        this.view.updateDisplay(this.model.currentValue);
    };

    handleOperationButtonClick = operation => {
        if (this.model.selectedOperation != null) {
            if (!this.model.equalbtn) {
                this.model.currentValue = parseFloat(this.view.displayField.value);
                this.model.operand = this.model.performOperation(this.model.operand, this.model.currentValue, this.model.selectedOperation);
                this.model.selectedOperation = operation;
            } else {
                this.model.currentValue = parseFloat(this.view.displayField.value);
                this.model.selectedOperation = operation;
                this.model.operand = this.model.currentValue;
            }
        } else {
            this.model.selectedOperation = operation;
            this.model.operand = this.model.currentValue;
        }
        this.view.updateDisplay('');
        this.model.equalbtn = false;
    };

    handleClearButtonClick = () => {
        this.view.updateDisplay('');
        this.model.currentValue = 0;
        this.model.operand = 0;
        this.model.selectedOperation = null;
    };

    handleEqualsButtonClick = () => {
        this.model.operand = this.model.performOperation(this.model.operand, this.model.currentValue, this.model.selectedOperation);
        this.view.updateDisplay(this.model.operand);
        this.model.equalbtn = true;
    };
}

const model = new CalculatorModel();
const view = new CalculatorView();
const controller = new CalculatorController(model, view);