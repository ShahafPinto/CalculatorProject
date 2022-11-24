// let a = ()=> {window.open("config.html",'_blank')};
let state = {
    light: false,
    history: true,
    scientific: true,
    remote: false
};

document.getElementById("info").addEventListener("click", infoFunction);
document.getElementById("light").addEventListener("click", lightstatefunc);
document.getElementById("history").addEventListener("click", historystatefunc);
document.getElementById("scientific").addEventListener("click", scientificstatefunc);
document.getElementById("remote").addEventListener("click", remotestatefunc); 
document.getElementById("setting").addEventListener("click", openForm); 

document.addEventListener("DOMContentLoaded", render);
// document.querySelector('body').setAttribute('class','dark');
// function createBgAndFont(_color:String,_font:String){
//     document.querySelector('body').setAttribute('class',`${_color} ${_font}`);
// }
function findColor(_color:String){
    if (_color.includes('beige')){
        return 'beige';
    }else if (_color.includes('green')){
        return 'green';    
    }else if (_color.includes('teal')){
        return 'teal';
    }else if (_color.includes('navy')){
        return 'navy';
    }else if (_color.includes('mint')){
        return 'mint';
    }
}
function findFont(_font:String){
    if (_font.includes('Times')){
        return 'times';
    }else if (_font.includes('Arial')){
        return 'arial';    
    }else if (_font.includes('Gill')){
        return 'gill';    
    }else if (_font.includes('Lucida')){
        return 'lucida';    
    }else if (_font.includes('Impact')){
        return 'impact';    
    }
}
function getFormData(){
    let data = window.location.search;
    let bgcolor = '';
    let fontf = '';
    if (data){
        // console.log(data);
        let color = data.substring(data.indexOf('color')+6,data.indexOf('color')+12);
        let font =  data.substring(data.indexOf('family')+7,data.indexOf('family')+17);
        let mode = data.substring(data.indexOf('mode')+7,data.indexOf('mode')+12);
        // console.log(color);
        // console.log(font);
        // console.log(mode);
        bgcolor = findColor(color);
        fontf = findFont(font);
        document.querySelector('body').setAttribute('class',`${bgcolor} ${fontf}`);

        if (mode.includes('dark')){
            // console.log('dark is on!!!!')
            document.querySelector('body').setAttribute('class','dark');
        }
    }
    
}

function render(): void{
    historystatefunc();
    scientificstatefunc();
    getFormData();
}

function openForm(){
    window.open("config.html",'_blank');
}

function myElement(s:string){
    return document.querySelector(`${s}`) as HTMLElement;
}

function infoFunction():void {
    alert('Developer\'s name: Shahaf Pinto\nCalculator\'s version (stage): 1\nDescription: This Calculator is a device that performs arithmetic operations on numbers.\nBasic calculators can do only addition, subtraction, multiplication and division mathematical calculations.');
}

function BottunStateIsOn(id:string){
    myElement(`${id}`).style.backgroundColor ='orange';
}
function BottunStateIsOff(id:string){
    myElement(`${id}`).style.removeProperty('background-color');
}
function lightstatefunc():void{
    state.light = !state.light
    if (state.light){
        myElement('#window').style.backgroundColor ='yellow';
        BottunStateIsOn('#light');
    }else{
        myElement('#window').style.removeProperty('background-color');
        BottunStateIsOff('#light');
    }
    // alert(lightstate)
}
function historystatefunc():void{
    state.history = !state.history
    if(state.history){
        BottunStateIsOn('#history')
        myElement(".historyPanel").style.display='block';
    }else{
        BottunStateIsOff('#history');
        myElement(".historyPanel").style.display='none';
    }
}
function scientificstatefunc():void{
    state.scientific = !state.scientific;
    if (state.scientific){
        BottunStateIsOn('#scientific');
        myElement(".scientificPanel").style.display='block';
        cal.reset();
    }else{
        BottunStateIsOff('#scientific');
        cal.reset();
        myElement(".scientificPanel").style.display='none';
    }
}
function remotestatefunc(){
    state.remote = !state.remote
    alert(state.remote)
}