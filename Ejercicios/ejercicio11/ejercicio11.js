var canvas;
var context;

window.onload = function(){  
    //Inicializar canvas
    canvas= document.getElementById("canvas");
    context = canvas.getContext("2d");    
}

function dibujarRectangulo(){
    context.beginPath();
    //las propiedades se agregan al context
    context.fillStyle = "red";    
    context.fillRect(100,100,200,200);
    
}
    

function dibujarCirculo(){
    context.beginPath();
    context.fillStyle = "blue"; 
    context.arc(100,100,50,0,2*Math.PI);
    context.fill();
    
}


function mostrarDegradado(){ 
    context.beginPath(); //Limpiar contexto    
    
    var degradado = context.createRadialGradient(100,100,0,100,100,50);
    degradado.addColorStop(0,"blue");
    degradado.addColorStop(1,"yellow");   
    
    context.fillStyle = degradado;
    
    context.arc(100,100,40,0,2*Math.PI);
    context.fill();
    
}

