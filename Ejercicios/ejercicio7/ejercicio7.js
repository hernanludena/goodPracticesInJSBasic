
function metodo1(variable){ 
   //recibir y retornar funciones
    variable();  
       
}

function metodo2(){  
    alert("ejecuta metodo2");       
}

function test(){  
    //metodo1(metodo2()); //ejecuta metodo y retorna el res
    
    metodo1(metodo2); //Pasamos la funcion, mas no el res
}

//----------------------------------------------

function metodo3(){  
    return 300;      
}

function metodo4(f1){  
    return f1();      
}

function test2(){  
    var respuesta=metodo4(metodo3);
    alert(respuesta);
}

//----------------------------------------------

function test3(){  
    var respuesta=metodo4(
        function(){
            return 500;
        } 
    );
    alert(respuesta);
}





