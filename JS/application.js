document.getElementById("info").onclick = function() {infoFunction()};


function infoFunction() {
    alert('Developer\'s name: Shahaf Pinto\nCalculator\'s version (stage): 1\nDescription: This Calculator is a device that performs arithmetic operations on numbers.\nBasic calculators can do only addition, subtraction, multiplication and division mathematical calculations.');
}

document.getElementById("light").onclick = function() {lightstatefunc()};
document.getElementById("history").onclick = function() {historystatefunc()};
document.getElementById("scientific").onclick = function() {scientificstatefunc()};
document.getElementById("remote").onclick = function() {remotestatefunc()};

let lightstate = 'True';
let historystate = 'True';
let scientificstate = 'True';
let remotestate = 'True';
function lightstatefunc(){
    lightstate = !lightstate
    alert(lightstate)
}
function historystatefunc(){
    historystate = !historystate
    alert(historystate)
}
function scientificstatefunc(){
    scientificstate = !scientificstate
    alert(scientificstate)
}
function remotestatefunc(){
    remotestate = !remotestate
    alert(remotestate)
}
// const buttons1 = document.getElementsByTagName("img")
// for (let button  in buttons1){
//     button.addEventListener("click", ()=> {alert(button.getAttribute("id"))})
// }
//  buttons.onclick = function() {displayButtonInfo()}
// function displayButtonInfo(value){
//         alert(value)
//     }


// const o = {
//     foo: function (){
//     console.log(this)}
// }
// o.foo()
// document.addeventListener('click', () =>{})


