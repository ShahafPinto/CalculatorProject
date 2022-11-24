
let buttons = Array.from(document.getElementsByClassName('button'))

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
    displayResult(){
        this.result = Number(eval(this.getTotal()));
        this.num1 = '';
        this.num2 = '';
        this.operator='';
        if (this.result){
            return myElement("#window").innerHTML = String(this.result);
        }else{
            return myElement("#window").innerHTML = this.getTotal();
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
        }else if(this.num2){
            this.num2 =  this.sliceTheLast(this.num2);
        }else if(this.operator){
            this.operator = this.sliceTheLast(this.operator);
        }
        else if(this.num1){
            this.num1 = this.sliceTheLast(this.num1);
        }
        return this.displayTotal(); 
    }
    sliceTheLast(s:string){
        return s.slice(0,-1)
    }
}


for (let i = 0; i<buttons.length; i++){buttons[i].addEventListener('click', (e) => {calc(e)})}

let cal = new Calc();

// להכניס את הCUR
function calc(e:Event){
    let el = e.target as HTMLElement;
    let v = el.id
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
        }else if(v=='back'){ //צריך להכניס להיסטורי פאנל!!!!!
            cal.back();
        }else if (cal.digits.includes(v)){
            if (cal.operator){
                cal.num2 += v;
                cal.displayTotal();
                myElement(".hispanel").innerHTML += cal.num2;
            }else{
                cal.num1 = cal.num1+v;
                cal.displayTotal();
                myElement(".hispanel").innerHTML += cal.num1;
            }
        }else if (v =='=') /*v is =*/{
            cal.displayResult();
            myElement(".hispanel").innerHTML += '<br>='+String(cal.result)+'<br>';
        }
    }
    else /*scientific mode*/{
        if (v=='c'){
            cal.reset();
        }else if(v =='='){
            cal.displayResult();
            myElement(".hispanel").innerHTML += '<br>='+String(cal.result)+'<br>';
        }else if(v=='back'){
            cal.back();
        }else if (!cal.operator){
            if (cal.digits.includes(v)){
                cal.num1 += v;
                cal.displayTotal(); 
                myElement(".hispanel").innerHTML += cal.num1;          
            }else if (cal.opernds.includes(v)){
                cal.operator = v;
                cal.displayTotal();
                myElement(".hispanel").innerHTML += cal.operator;         
            }
        }else /*the operator element is not empty */{
            if (!cal.num3){
                // console.log('bugbugbug!!!')
                if (cal.digits.includes(v)){
                    cal.num2 += v;
                    cal.displayTotal(); 
                    myElement(".hispanel").innerHTML += cal.num2;          
                }else if(!cal.priorityOperands.includes(v)){
                    // console.log('you are here!!!')
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
