document.getElementById("info").onclick = function() {infoFunction()};

function infoFunction() {
    alert('Developer\'s name: Shahaf Pinto\nCalculator\'s version (stage): 1\nDescription: This Calculator is a device that performs arithmetic operations on numbers.\nBasic calculators can do only addition, subtraction, multiplication and division mathematical calculations.');
}


function displayButtonInfo(value){
    alert(value)
}

document.getElementById("lamp").onclick = function() {displayButtonInfo('lamp')};
document.getElementById("setting").onclick = function() {displayButtonInfo('setting')};
document.getElementById("window").onclick = function() {displayButtonInfo('window')};
document.getElementById("back").onclick = function() {displayButtonInfo('back')};
document.getElementById("time").onclick = function() {displayButtonInfo('time')};
document.getElementById("c").onclick = function() {displayButtonInfo('c')};
document.getElementById("/").onclick = function() {displayButtonInfo('/')};
document.getElementById("root").onclick = function() {displayButtonInfo('root')};
document.getElementById("7").onclick = function() {displayButtonInfo('7')};
document.getElementById("8").onclick = function() {displayButtonInfo('8')};
document.getElementById("9").onclick = function() {displayButtonInfo('9')};
document.getElementById("*").onclick = function() {displayButtonInfo('*')};
document.getElementById("restore").onclick = function() {displayButtonInfo('restore')};
document.getElementById("4").onclick = function() {displayButtonInfo('4')};
document.getElementById("5").onclick = function() {displayButtonInfo('5')};
document.getElementById("6").onclick = function() {displayButtonInfo('6')};
document.getElementById("-").onclick = function() {displayButtonInfo('-')};
document.getElementById("1").onclick = function() {displayButtonInfo('1')};
document.getElementById("2").onclick = function() {displayButtonInfo('2')};
document.getElementById("3").onclick = function() {displayButtonInfo('3')};
document.getElementById("+").onclick = function() {displayButtonInfo('+')};
document.getElementById("+-").onclick = function() {displayButtonInfo('+-')};
document.getElementById("0").onclick = function() {displayButtonInfo('0')};
document.getElementById(".").onclick = function() {displayButtonInfo('.')};
document.getElementById("=").onclick = function() {displayButtonInfo('=')};





// const buttons1 = document.getElementsByTagName("img")
// for (let button  in buttons1){
//     button.addEventListener("click", ()=> {alert(button.getAttribute("id"))})
// }
//  buttons.onclick = function() {displayButtonInfo()}
// function displayButtonInfo(value){
//         alert(value)
//     }