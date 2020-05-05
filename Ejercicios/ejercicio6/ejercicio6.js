
function sumar(valor1,valor2){ 
    
    if(arguments.length==0){
         alert("no hay valores");
        return 0;
    }
    
    //Podemos pasar solo un valor del metodo
    if (valor2 == undefined){
        alert("valor indefinido");
        valor2=0;
    }
       
    return valor1+valor2;
       
}

function test1(valor1,valor2){      
    
    var result = sumar(2,3);
           
}

function test2(valor1,valor2){  
    
    var result = sumar();
    alert(result);
           
}

function operacion(valor1,valor2,operador){
    
    if(operador == "+"){
       return valor1+valor2;  
    }else  if(operador == "-"){
         return valor1-valor2;
    }else if(operador == "*"){
         return valor1*valor2;    
    }else if (operador == undefined){
       return valor1+valor2; 
    } 
           
}

function test3(valor1,valor2,operador){  
    
    var result = operacion(2,8,"+");
    alert(result);
    
    var result = operacion(12,8,"-");
    alert(result);
    
    
    var result = operacion(4,8,"*");
    alert(result);
    
    var result = operacion(2,8);
    alert(result);
           
}






