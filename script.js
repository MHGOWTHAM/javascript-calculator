
function clearNumbers(){
    let input = document.getElementById("numbers");
    input.value = "";
}

function deleteLastNumber(){
    let input = document.getElementById("numbers");
    input.value = input.value.slice(0,-1);
}
function calculateResult(){
    let input = document.getElementById("numbers");
    
    
    input.value = eval(input.value);

    if(input.value.length > 9){        
        if (input.value.includes('e')) {
            input.value=input.value;
        }
        const trim = input.value.replace(/(\.\d*?)0+$/, ''); //trim the zeroes after the decimal value
    
        const exponent = trim.includes('.') ? trim.indexOf('.')-1 : trim.length-1;
    
        const coefficient=parseFloat(trim) / (10**exponent);
    
        input.value=`${coefficient.toFixed(9)}e+${exponent}`;
    }

    
}

function appendToResult(val){
    var input = document.getElementById("numbers");
   
    let pattern = /[+\-/*%]/;
    if(val==='0' && input.value.substring(0,1)==='0'){
        let num = parseInt(input.value);
        input.value = num.toString();
    }
    
    
    if(input.value.includes('.') && (val==='.') && (!(pattern.test(input.value)))){
        input.value = input.value;
    }

     else{
        input.value +=val;  
     }
         
}

  
