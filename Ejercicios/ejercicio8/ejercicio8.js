

//var total1=3; 
var total1 = function(){
    alert('entra a la funcion');
    return 100;
};
    
 function test1(){    
   alert(total1);  //imprimo la variable funcion
   alert(total1()); //invocando a la funcion       
}


//--------------------------------------------
var numeros =[1,2,3,4,5,6,7,8,9];

var total2 = function(arreglo){
    var suma=0;
    //ForEach Recibe como parametro una funcion (value,indice)
    arreglo.forEach(function(valor,indice){
        //alert("valor:"+valor+" indice:"+indice);
        suma+=valor;        
    }); 
    return suma;
}

//--------------------------------------------
//Suma Pares
var total3 = function(arreglo){
    var suma=0;
    arreglo.forEach(function(valor,indice){
       if(valor%2==0){
           suma+=valor;        
       }
        
    }); 
    return suma;
}

//Suma Impares
var total4 = function(arreglo){
    var suma=0;
    arreglo.forEach(function(valor,indice){
       if(valor%2!=0){
           suma+=valor;        
       }
        
    }); 
    return suma;
}


//--------------------------------------------



var total5 = function(arreglo,selector){
    var suma=0;        
        arreglo.forEach(function(valor,indice){
           if(selector(valor)){
               suma+=valor;        
           }

        }); 
    return suma;
}



//--------------------------------------------
var total6 = function(arreglo,selector){
    var suma=0;
    
    if(selector == undefined){
        selector = function(){
            return true;
        };       
        alert("selector indefinido");
    }
        arreglo.forEach(function(valor){
           if(selector(valor)){
               suma+=valor;        
           }

        }); 
    return suma;
   
}

//--------------------------------------------

function test2(){    
/* alert("Suma Todos: " + total2(numeros));
 alert("Suma Pares: " + total3(numeros));
 alert("Suma Impares: " + total4(numeros));
alert("Selector Pares: " + total5(numeros,function(valor){
    return valor%2==0;
}));*/
   
        
alert("Selector: " + total6(numeros));  //Sin selector
  
alert("Selector Pares: " + total6(numeros,function(valor){
    return valor%2==0;
}));


    
}



