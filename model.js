class CalculatorModel {
    constructor() {
        this.operand = 0;
        this.currentValue = 0;
        this.selectedOperation = null;
        this.equalbtn = false;
    }

    performOperation(a, b, operation) {
        switch (operation) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return b;
        }
    }
}