document.getElementById("info").addEventListener("click", infoFunction);
document.getElementById("light").addEventListener("click", lightstatefunc);
document.getElementById("history").addEventListener("click", historystatefunc);
document.getElementById("scientific").addEventListener("click", scientificstatefunc);
document.getElementById("remote").addEventListener("click", remotestatefunc);
let lightstate = true;
let historystate = true;
let scientificstate = true;
let remotestate = true;
function myElement(s) {
    return document.querySelector(`${s}`);
}
function infoFunction() {
    alert('Developer\'s name: Shahaf Pinto\nCalculator\'s version (stage): 1\nDescription: This Calculator is a device that performs arithmetic operations on numbers.\nBasic calculators can do only addition, subtraction, multiplication and division mathematical calculations.');
}
function BottunStateIsOn(id) {
    myElement(`${id}`).style.backgroundColor = 'orange';
}
function BottunStateIsOff(id) {
    myElement(`${id}`).style.removeProperty('background-color');
}
function lightstatefunc() {
    lightstate = !lightstate;
    if (lightstate) {
        myElement('#window').style.backgroundColor = 'yellow';
        BottunStateIsOn('#light');
    }
    else {
        myElement('#window').style.removeProperty('background-color');
        BottunStateIsOff('#light');
    }
    // alert(lightstate)
}
function historystatefunc() {
    historystate = !historystate;
    alert(historystate);
}
function scientificstatefunc() {
    scientificstate = !scientificstate;
    if (scientificstate) {
        BottunStateIsOn('#scientific');
    }
    else {
        BottunStateIsOff('#scientific');
    }
    // alert(scientificstate)
}
function remotestatefunc() {
    remotestate = !remotestate;
    alert(remotestate);
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
