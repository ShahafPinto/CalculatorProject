
let buttons = Array.from(document.getElementsByClassName('button'));

class Calc {
    num1: string= '';
    num2: string= '';
    num3: string= '';
    operator: string= '';
    result: number =0;
    priorityOperands= ['/','*'];
    opernds= ['-','+','/','*'];
    digits= ['.','0','1','2','3','4','5','6','7','8','9'];
    cur: string= this.num1;

    reset(){
        this.num1= '';
        this.num2= '';
        this.num3='';
        this.operator= '';
        this.result=0;
        this.cur = this.num1;
        myElement(".hispanel").innerHTML = null;
        return myElement("#window").innerHTML = '';
    }

    displayTotal(){
        return myElement("#window").innerHTML = this.getTotal();
    }
    displayResult(_s:String = String(this.getTotal())){
        this.result = Number(eval(String(_s)));
        this.num1 = '';
        this.num2 = '';
        this.operator='';
        if (this.result){
            return myElement("#window").innerHTML = String(this.result);
        }else{
            return myElement("#window").innerHTML = String(_s);
        }
    }
    getResult(){
        return Number(eval(this.getTotal()));
    }
    getTotal(){
        return this.num1+this.operator+this.num2+this.num3;
    }
    back(){
        if(this.num3){
            this.num3 = this.sliceTheLast(this.num3);
            myElement(".hispanel").innerHTML = (myElement(".hispanel").innerHTML).slice(0,-1);
        }else if(this.num2){
            this.num2 =  this.sliceTheLast(this.num2);
            myElement(".hispanel").innerHTML = (myElement(".hispanel").innerHTML).slice(0,-1);
        }else if(this.operator){
            this.operator = this.sliceTheLast(this.operator);
            myElement(".hispanel").innerHTML = (myElement(".hispanel").innerHTML).slice(0,-1);
        }
        else if(this.num1){
            this.num1 = this.sliceTheLast(this.num1);
            myElement(".hispanel").innerHTML = (myElement(".hispanel").innerHTML).slice(0,-1);
        }
        return this.displayTotal(); 
    }
    sliceTheLast(s:string){
        return s.slice(0,-1)
    }
    getResultRemoteMode(s:string){

    }
    getThelast(){
        return String(this.getTotal).charAt(String(this.getTotal).length-1);
    }
}


for (let i = 0; i<buttons.length; i++){buttons[i].addEventListener('click', (e) => {calc(e)})};

let cal = new Calc();

// להכניס את הCUR
function calc(e:Event){
    let el = e.target as HTMLElement;
    let v = el.id;
     if (!state.scientific) /*simple mode*/{
        if (cal.opernds.includes(v)){
            if (!cal.num2){
                cal.operator = v;
                cal.displayTotal();
                myElement(".hispanel").innerHTML += cal.operator;
            }else{
                cal.result = cal.getResult();
                cal.operator=v;
                myElement("#window").innerHTML = String(cal.result)+cal.operator;
                myElement(".hispanel").innerHTML += '<br>='+String(cal.result)+cal.operator;
                cal.num1 = String(cal.result);
                cal.num2 = '';
            }
        }else if (v=='c'){
            cal.reset();
        }else if(v=='back'){ 
            cal.back();
        }else if (cal.digits.includes(v)){
            if (cal.operator){
                cal.num2 += v;
                cal.displayTotal();
                myElement(".hispanel").innerHTML += v;
            }else{
                cal.num1 = cal.num1+v;
                cal.displayTotal();
                myElement(".hispanel").innerHTML += v;
            }
        }else if (v =='=') /*v is =*/{
            let display:String = cal.getTotal();
            if (cal.operator.includes(cal.getTotal().slice(-1))){
                display = cal.sliceTheLast(cal.getTotal());
            }
            if (state.remote){
                remoteCalc(display).then( ()=> {
                    cal.displayResult(String(cal.result));
                    myElement(".hispanel").innerHTML += '<br>='+String(cal.result)+'<br>'; 
                })
                
            }else{
                cal.displayResult(display);
                myElement(".hispanel").innerHTML += '<br>='+String(cal.result)+'<br>';
                cal.num1 = String(cal.result);
                cal.num2='';
                cal.operator=''; 
            }
        }
    }
    else /*scientific mode*/{
        if(v=='xpt'){
            let display = Math.pow(Number(cal.getResult()),2);
            cal.displayResult(String(display));
            myElement(".hispanel").innerHTML += '^2='+String(display);
            cal.num1 = String(display);
            cal.num2='';
            cal.num3='';
            cal.operator='';
        }else if(v=='xrootpt'){
            let display = Math.sqrt(Number(cal.getResult()));
            cal.displayResult(String(display));
            myElement(".hispanel").innerHTML += '<br>='+String(display);
            cal.num1 = String(display);
            cal.num2='';
            cal.num3='';
            cal.operator='';
        }else if (v=='c'){
            cal.reset();
        }else if(v =='='){
            let display:String = cal.getTotal();
            if (cal.operator.includes(cal.getTotal().slice(-1))){
                display = cal.sliceTheLast(cal.getTotal());
            }if (state.remote){
                console.log('state remote is on');
                console.log(display);
                remoteCalc(display).then( ()=> {
                    cal.displayResult(String(cal.result));
                    myElement(".hispanel").innerHTML += '<br>='+String(cal.result)+'<br>'; 
                }) 
            }else{
               cal.displayResult(display);
                myElement(".hispanel").innerHTML += '<br>='+String(cal.result)+'<br>';
                cal.num1 = String(cal.result);
                cal.num2='';
                cal.num3='';
                cal.operator=''; 
            }
        }else if(v=='back'){
            cal.back();
        }else if (!cal.operator){
            if (cal.digits.includes(v)){
                cal.num1 += v;
                cal.displayTotal(); 
                myElement(".hispanel").innerHTML += v;          
            }else if (cal.opernds.includes(v)){
                cal.operator = v;
                cal.displayTotal();
                myElement(".hispanel").innerHTML += cal.operator;         
            }else if(v=='pi'){
                let pi= String(Math.PI.toFixed(3));
                cal.num1 += pi;
                cal.displayTotal(); 
                myElement(".hispanel").innerHTML += pi;
            }  
        }else /*the operator element is not empty */{
            if (!cal.num3){
                if(v=='pi'){
                    let pi= String(Math.PI.toFixed(3));
                    cal.num2 += pi;
                    cal.displayTotal(); 
                    myElement(".hispanel").innerHTML += pi;
                }else if (cal.digits.includes(v)){
                    cal.num2 += v;
                    cal.displayTotal(); 
                    myElement(".hispanel").innerHTML += v;          
                }else if(!cal.priorityOperands.includes(v)){
                    cal.num1 = String(cal.getResult());
                    cal.operator = v;
                    cal.num2 = '';
                    cal.displayTotal();
                    myElement(".hispanel").innerHTML += '<br>'+cal.num1+cal.operator; 
                }else /*priority operator*/{
                    cal.num3 += v;
                    cal.displayTotal();
                    myElement(".hispanel").innerHTML += cal.num3; 
                }
            }else /*the num3 element is not empty */{
                if (cal.digits.includes(v)){
                    cal.num3 += v;
                    cal.displayTotal();
                    myElement(".hispanel").innerHTML += v;          
                }else{
                    cal.num2 = String(eval(cal.num2+cal.num3));
                    cal.num3 = '';
                    myElement(".hispanel").innerHTML += '<br>='+cal.num1+'+'+cal.num2; 
                    if (!cal.priorityOperands.includes(v)){
                        cal.num1 = String(cal.getResult());
                        cal.operator = v;
                        cal.num2 = '';
                        cal.displayTotal();
                        myElement(".hispanel").innerHTML += '<br>='+cal.num1+cal.operator; 
                    }else/*priority operator*/{
                        cal.num3 += v;
                        cal.displayTotal();
                        myElement(".hispanel").innerHTML += cal.num3; 
                    }
                }
            }
            
        }
        
    }
}        


    
async function remoteCalc(v: String) {
    // const a; //submit button
    // const b; //expresion input
    console.log('v=',v);
    // const rawExpresion = b.value;
    let expresion = encodeURIComponent(String(v));
    console.log('expresion=',expresion);
    const response = await fetch(`https://api.mathjs.org/v4/?expr=${expresion}`);
    cal.result = Number(await response.text());
    // const result = await response.text();
    console.log('result=',cal.result);
    // return result;
    // alert(result);
    // const = result; //handle result
    // async functions always return something => a promise

}