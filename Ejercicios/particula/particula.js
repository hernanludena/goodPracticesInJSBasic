var canvas;
var context;
var ancho =500;
var alto=500;
var particulas=[];

window.onload = function(){  
    //Inicializar canvas
    canvas= document.getElementById("canvas");
    context = canvas.getContext("2d"); 
    
    for(var i=0;i<50;i++){
        particulas.push(new particula());
    }
    
}

function particula(){
    this.px = generarRandom(0,ancho);//colocar siemore this
    this.py = generarRandom(0,alto);
    this.vx = generarRandom(-10,10);
    this.vy = generarRandom(-10,10);
    
    var r = generarRandom(0,255);
    var g = generarRandom(0,255);
    var b= generarRandom(0,255);
    
    this.color = "rgba("+r+","+g+","+b+","+"0.5)";
    this.radio = generarRandom(20,40);    
}


/*function generarRandom(desde,hasta){
    var valor = 0;
    valor =Math.random() * hasta;
    if(valor < desde){
        valor = valor + desde;
    }   
    return Math.floor(valor);
}*/
function generarRandom(desde, hasta){
      var min = parseInt(desde);
      var max = parseInt(hasta);

      var valor = Math.floor(Math.random() * (max - min + 1)) + min
       return valor;
}


function dibujarParticula(p){
    context.beginPath();
    var degradado=context.createRadialGradient(p.px,p.py,0,p.px,p.py,p.radio);
//degradado= context.createRadialGradient(100,100,0,100,100,50);
     degradado.addColorStop(0,"white");
     degradado.addColorStop(0.4,"white");  
     degradado.addColorStop(0.4,p.color);  //color de la p
     degradado.addColorStop(1,"black");  
    
    context.fillStyle = degradado;
    
    //context.arc(100,100,40,0,2*Math.PI);
    context.arc(p.px,p.py,p.radio,0,2*Math.PI);
    context.fill();
    
    
}

function test1(){
    var p1=new particula();
    dibujarParticula(p1);
    
}
//--------------------------------------


function dibujarParticulasN(){
    
context.globalCompositeOperation = "source-over";
context.fillStyle = "rgba(0, 0, 0, 0.3)";
context.fillRect(0, 0, ancho, alto); //W y H representan el ancho y alto del canvas
context.globalCompositeOperation = "lighter";
         
     for(var i=0;particulas.length;i++){ 
        
        particulas[i].px += particulas[i].vx;
        particulas[i].py += particulas[i].vy;
        dibujarParticula(particulas[i]);
         
    }
    
}
function probar(){
    setInterval(dibujarParticulasN,33);
    
}


function dibujarParticulas(comportamiento){
    
context.globalCompositeOperation = "source-over";
context.fillStyle = "rgba(0, 0, 0, 0.3)";
context.fillRect(0, 0, ancho, alto); //W y H representan el ancho y alto del canvas
context.globalCompositeOperation = "lighter";
         
    
     for(var i=0;particulas.length;i++){ 
        
        particulas[i].px += particulas[i].vx;
        particulas[i].py += particulas[i].vy;
        
        comportamiento(i);
         
     /* Rebote   
     if (particulas[i].px >ancho || particulas[i].px < 0)                    {
             particulas[i].vx=particulas[i].vx *-1
         }else         
         if (particulas[i].py >alto || particulas[i].py < 0)
         {
             particulas[i].vy=particulas[i].vy *-1
         }
    */   
         
       dibujarParticula(particulas[i]);
         
    }
    
}


function rebote(){
    dibujarParticulas(function (indice){        
         if (particulas[indice].px >ancho || particulas[indice].px < 0) {
             particulas[indice].vx=particulas[indice].vx *-1
         }else         
         if (particulas[indice].py >alto || particulas[indice].py < 0)
         {
             particulas[indice].vy=particulas[indice].vy *-1
         }        
    });
}
function rebotar(){
     setInterval(rebote,33);
}



function pacman(){
    dibujarParticulas(function(indice){
         if (particulas[indice].px > ancho) {
            particulas[indice].px = 0;
        }
        if (particulas[indice].py > alto) {
            particulas[indice].py = 0;
        }
    });    
}
function pacmanGo(){
     setInterval(pacman,33);
}


