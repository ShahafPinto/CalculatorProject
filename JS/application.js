
document.getElementById("info").addEventListener("click", infoFunction);
document.getElementById("light").addEventListener("click", lightstatefunc);
document.getElementById("history").addEventListener("click", historystatefunc);
document.getElementById("scientific").addEventListener("click", scientificstatefunc);
document.getElementById("remote").addEventListener("click", remotestatefunc); 

let lightstate = 'True';
let historystate = 'True';
let scientificstate = 'True';
let remotestate = 'True';

function infoFunction() {
    alert('Developer\'s name: Shahaf Pinto\nCalculator\'s version (stage): 1\nDescription: This Calculator is a device that performs arithmetic operations on numbers.\nBasic calculators can do only addition, subtraction, multiplication and division mathematical calculations.');
}

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


