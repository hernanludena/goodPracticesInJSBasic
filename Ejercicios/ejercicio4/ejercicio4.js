var total =0;
var valores = [1,2,3,4,5];

function sumar(){
 var a = parseInt(document.Calculadora.numero1.value,10);   
 var b = parseInt(document.Calculadora.numero2.value,10);       
    if(a>0 && b>0){
        var c = a + b;
        total=total+c;
       // alert("El resultado es " + c);    
        document.Calculadora.resultado.value = c;
        document.Calculadora.total.value = total;
    }else{
        alert("Numeros negativos");    
    }
    
    
   
};

function modulo(){
var a = parseInt(document.Calculadora.numero1.value,10);  
var b = parseInt(document.Calculadora.numero2.value,10);       var c = a % b;  //modulo-mod
    total=total+c;
    //alert("El modulo es " + c);
    document.Calculadora.moduloResultado.value = c;
    document.Calculadora.total.value = total;
}


function sumar_arreglo(){        
    for(var i=0;i<valores.length;i++){       
        total += valores[i];  
        document.Calculadora.totalA.value = total;
    }
}





