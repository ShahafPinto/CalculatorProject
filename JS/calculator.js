let buttons = Array.from(document.getElementsByClassName('button'));
let num1 = '';
let num2 = '';
let num3 = '';
let operator = '';
let result;
let opernds = ['-', '+', '/', '*'];
let priorityOperands = ['/', '*'];
let digits = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => { calc(e); });
}
function CheckSpecialButtonsCalc(e) {
    let el = e.target;
    let v = el.id;
    alert('you are in check c');
    if (v == 'c') {
        num1 = '';
        num2 = '';
        num3 = '';
        operator = '';
        myElement("#window").innerHTML = '';
        return true;
    }
    else if (v == 'back') {
        if (num3) {
            num3 = num3.slice(0, -1);
        }
        else if (num2) {
            num2 = num2.slice(0, -1);
        }
        else if (num1) {
            num1 = num1.slice(0, -1);
        }
        myElement("#window").innerHTML = num1 + operator + num2 + num3;
        return true;
    }
    return false;
}
function calc(e) {
    let el = e.target;
    let v = el.id;
    console.log('start');
    if (!scientificstate) /*simple mode*/ {
        // console.log(v);
        console.log('simple mode');
        if (opernds.includes(v)) {
            if (!num2) {
                operator = v;
                // num1 = num1.slice(0,-1);
                // num1 +=v;
                myElement("#window").innerHTML = num1 + operator;
            }
            else {
                result = Number(eval(num1 + operator + num2));
                operator = v;
                myElement("#window").innerHTML = String(result) + operator;
                num1 = String(result);
                num2 = '';
                // operator='';
                // myElement("#window").innerHTML = num1+operator;
            }
        }
        else if (v == 'c') {
            num1 = '';
            num2 = '';
            operator = '';
            myElement("#window").innerHTML = '';
        }
        else if (v == 'back') {
            if (num2) {
                num2 = num2.slice(0, -1);
            }
            else if (operator) {
                operator = operator.slice(0, -1);
            }
            else if (num1) {
                num1 = num1.slice(0, -1);
            }
            myElement("#window").innerHTML = num1 + operator + num2;
        }
        else if (digits.includes(v)) {
            if (operator) {
                num2 += v;
                myElement("#window").innerHTML = num1 + operator + num2;
            }
            else {
                num1 = num1 + v;
                myElement("#window").innerHTML = num1;
            }
        }
        else if (v == '=') /*v is =*/ {
            result = Number(eval(num1 + operator + num2));
            num1 = '';
            num2 = '';
            operator = '';
            // alert(String(result));
            if (result) {
                myElement("#window").innerHTML = String(result);
            }
        }
    }
    else /*scientific mode לא עובד חלק להסתכל*/ {
        if (v == 'c') {
            num1 = '';
            num2 = '';
            num3 = '';
            operator = '';
            myElement("#window").innerHTML = '';
        }
        else if (v == 'back') {
            if (num3) {
                num3 = num3.slice(0, -1);
            }
            else if (num2) {
                num2 = num2.slice(0, -1);
            }
            else if (operator) {
                operator = operator.slice(0, -1);
            }
            else if (num1) {
                num1 = num1.slice(0, -1);
            }
            myElement("#window").innerHTML = num1 + operator + num2 + num3;
        }
        else if (!operator) {
            if (digits.includes(v)) {
                num1 += v;
                myElement("#window").innerHTML = num1;
            }
            else if (opernds.includes(v)) {
                operator = v;
                myElement("#window").innerHTML = num1 + operator;
            }
        }
        else /*the operator element is not empty */ {
            if (!num3) {
                if (digits.includes(v)) {
                    num2 += v;
                    myElement("#window").innerHTML = num1 + operator + num2;
                }
                else if (!priorityOperands.includes(v)) {
                    num1 = String(eval(num1 + operator + num2));
                    operator = v;
                    num2 = '';
                    myElement("#window").innerHTML = num1 + operator;
                }
                else /*priority operator*/ {
                    num3 += v;
                    myElement("#window").innerHTML = num1 + operator + num2 + num3;
                }
            }
            else /*the num3 element is not empty */ {
                if (digits.includes(v)) {
                    num3 += v;
                    myElement("#window").innerHTML = num1 + operator + num2 + num3;
                }
                else {
                    num2 = String(eval(num2 + num3));
                    operator = v;
                    num3 = '';
                    myElement("#window").innerHTML = num1 + operator + num2 + num3;
                }
            }
        }
    }
}
// function displayButtonInfo(value){
//     alert(value)
// }
// document.getElementById("lamp").onclick = function() {displayButtonInfo('lamp')};
// document.getElementById("setting").onclick = function() {displayButtonInfo('setting')};
// document.getElementById("window").onclick = function() {displayButtonInfo('window')};
// document.getElementById("back").onclick = function() {displayButtonInfo('back')};
// document.getElementById("time").onclick = function() {displayButtonInfo('time')};
// document.getElementById("c").onclick = function() {displayButtonInfo('c')};
// document.getElementById("/").onclick = function() {displayButtonInfo('/')};
// document.getElementById("root").onclick = function() {displayButtonInfo('root')};
// document.getElementById("7").onclick = function() {displayButtonInfo('7')};
// document.getElementById("8").onclick = function() {displayButtonInfo('8')};
// document.getElementById("9").onclick = function() {displayButtonInfo('9')};
// document.getElementById("*").onclick = function() {displayButtonInfo('*')};
// document.getElementById("restore").onclick = function() {displayButtonInfo('restore')};
// document.getElementById("4").onclick = function() {displayButtonInfo('4')};
// document.getElementById("5").onclick = function() {displayButtonInfo('5')};
// document.getElementById("6").onclick = function() {displayButtonInfo('6')};
// document.getElementById("-").onclick = function() {displayButtonInfo('-')};
// document.getElementById("1").onclick = function() {displayButtonInfo('1')};
// document.getElementById("2").onclick = function() {displayButtonInfo('2')};
// document.getElementById("3").onclick = function() {displayButtonInfo('3')};
// document.getElementById("+").onclick = function() {displayButtonInfo('+')};
// document.getElementById("+-").onclick = function() {displayButtonInfo('+-')};
// document.getElementById("0").onclick = function() {displayButtonInfo('0')};
// document.getElementById(".").onclick = function() {displayButtonInfo('.')};
// document.getElementById("even").onclick = function() {displayButtonInfo('=')};
