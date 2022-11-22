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

function getFormData(){
    let data = window.location.search;
    if (data){
        console.log(data);
        let color = data.substring(data.indexOf('color')+6,data.indexOf('color')+12);
        let font =  data.substring(data.indexOf('family')+7,data.indexOf('family')+17);
        let mode = data.substring(data.indexOf('mode')+7,data.indexOf('mode')+12);
        console.log(color);
        console.log(font);
        console.log(mode);
        if (color.includes('red')){
            document.querySelector('body').style.backgroundColor = 'red';
        }else if (color.includes('pink')){
            document.querySelector('body').style.backgroundColor = 'pink';
        }else if (color.includes('yellow')){
            document.querySelector('body').style.backgroundColor = 'yellow';
        }else if (color.includes('blue')){
            document.querySelector('body').style.backgroundColor = 'blue';
        }else if (color.includes('green')){
            document.querySelector('body').style.backgroundColor = 'green';
        }
        if (font.includes('Times')){
            document.querySelector('body').style.fontFamily = 'Times New Roman';
        }else if (font.includes('Arial')){
            document.querySelector('body').style.fontFamily = 'Arial';
        }else if (font.includes('Gill')){
            document.querySelector('body').style.fontFamily = 'Gill Sans';
        }else if (font.includes('Lucida')){
            document.querySelector('body').style.fontFamily = 'Lucida Sans';
        }else if (font.includes('Impact')){
            document.querySelector('body').style.fontFamily = 'Impact';
        }if (mode.includes('dark')){
            console.log('dark is on!!!!')
            document.querySelector('body').style.removeProperty('background-color');
            document.querySelector('body').style.removeProperty('font-family');
            document.querySelector('body').setAttribute('class','dark');
        }
    }
    
}
// form.onsubmit = () => {
//     const formData = new FormData(form);
//     const background = formData.get('background-color') as string;
//     const font = formData.get('font-family') as string;
//     const mode = formData.get('mode') as string;
//     console.log(background, font, mode);
//     // return false; // prevent reload
// };

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