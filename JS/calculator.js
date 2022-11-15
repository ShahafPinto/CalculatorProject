
let buttons = Array.from(document.getElementsByClassName('button'))

let num1 = '';
// let num2 = '';
let result = null;

for (let i = 0; i<buttons.length; i++){buttons[i].addEventListener('click', (e) => {calc(e)})}

function calc(e){
    let v = e.target.id
    // console.log(v);
    if ((v=='+')||(v=='-')){
        // console.log('you are here');
        if (( (num1.charAt(num1.length-1))=='+')||((num1.charAt(num1.length - 1))=='-')){
            num1 = num1.slice(0,-1);
        }
    }
    if (v=='c'){
        num1 = '';
    }
    else if(v=='back'){
        num1 = num1.slice(0,-1);
        // console.log('num1=',num1);
    }
    else if (v!=='='){
        num1 = num1+v;
        // console.log('num1=',num1);
    }
    else{
        result = eval(num1);
        num1 = '';
        alert(result); 
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