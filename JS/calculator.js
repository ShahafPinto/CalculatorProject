let buttons = Array.from(document.getElementsByClassName('button'));
class Calc {
    constructor() {
        this.num1 = '';
        this.num2 = '';
        this.num3 = '';
        this.operator = '';
        this.result = 0;
        this.priorityOperands = ['/', '*'];
        this.opernds = ['-', '+', '/', '*'];
        this.digits = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        this.cur = this.num1;
    }
    reset() {
        this.num1 = '';
        this.num2 = '';
        this.num3 = '';
        this.operator = '';
        this.result = 0;
        this.cur = this.num1;
        return myElement("#window").innerHTML = '';
    }
    displayTotal() {
        return myElement("#window").innerHTML = this.getTotal();
    }
    displayResult() {
        this.result = Number(eval(this.getTotal()));
        this.num1 = '';
        this.num2 = '';
        this.operator = '';
        if (this.result) {
            return myElement("#window").innerHTML = String(this.result);
        }
        else {
            return myElement("#window").innerHTML = this.getTotal();
        }
    }
    getResult() {
        return Number(eval(this.getTotal()));
    }
    getTotal() {
        return this.num1 + this.operator + this.num2 + this.num3;
    }
    back() {
        if (this.num3) {
            this.num3 = this.sliceTheLast(this.num3);
        }
        else if (this.num2) {
            this.num2 = this.sliceTheLast(this.num2);
        }
        else if (this.operator) {
            this.operator = this.sliceTheLast(this.operator);
        }
        else if (this.num1) {
            this.num1 = this.sliceTheLast(this.num1);
        }
        return this.displayTotal();
    }
    sliceTheLast(s) {
        return s.slice(0, -1);
    }
}
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => { calc(e); });
}
let cal = new Calc();
// להכניס את הCUR
function calc(e) {
    let el = e.target;
    let v = el.id;
    if (!state.scientific) /*simple mode*/ {
        if (cal.opernds.includes(v)) {
            if (!cal.num2) {
                cal.operator = v;
                cal.displayTotal();
            }
            else {
                cal.result = cal.getResult();
                cal.operator = v;
                myElement("#window").innerHTML = String(cal.result) + cal.operator;
                cal.num1 = String(cal.result);
                cal.num2 = '';
            }
        }
        else if (v == 'c') {
            cal.reset();
        }
        else if (v == 'back') {
            cal.back();
        }
        else if (cal.digits.includes(v)) {
            if (cal.operator) {
                cal.num2 += v;
                cal.displayTotal();
            }
            else {
                cal.num1 = cal.num1 + v;
                cal.displayTotal();
            }
        }
        else if (v == '=') /*v is =*/ {
            cal.displayResult();
        }
    }
    else /*scientific mode*/ {
        if (v == 'c') {
            cal.reset();
        }
        else if (v == '=') {
            cal.displayResult();
        }
        else if (v == 'back') {
            cal.back();
        }
        else if (!cal.operator) {
            if (cal.digits.includes(v)) {
                cal.num1 += v;
                cal.displayTotal();
            }
            else if (cal.opernds.includes(v)) {
                cal.operator = v;
                cal.displayTotal();
            }
        }
        else /*the operator element is not empty */ {
            if (!cal.num3) {
                if (cal.digits.includes(v)) {
                    cal.num2 += v;
                    cal.displayTotal();
                }
                else if (!cal.priorityOperands.includes(v)) {
                    cal.num1 = String(cal.getResult);
                    cal.operator = v;
                    cal.num2 = '';
                    cal.displayTotal();
                }
                else /*priority operator*/ {
                    cal.num3 += v;
                    cal.displayTotal();
                }
            }
            else /*the num3 element is not empty */ {
                if (cal.digits.includes(v)) {
                    cal.num3 += v;
                    cal.displayTotal();
                }
                else {
                    cal.num2 = String(eval(cal.num2 + cal.num3));
                    cal.num3 = '';
                    if (!cal.priorityOperands.includes(v)) {
                        cal.num1 = String(cal.getResult());
                        cal.operator = v;
                        cal.num2 = '';
                        cal.displayTotal();
                    }
                    else /*priority operator*/ {
                        cal.num3 += v;
                        cal.displayTotal();
                    }
                }
            }
        }
    }
}
