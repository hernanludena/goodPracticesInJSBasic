var canvas;
var context;
var ancho = 500;
var alto = 500;
var particulas = [];

window.onload = function () {
    //Inicializar canvas
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d")
    for (var i = 0; i < 50; i++) {
        particulas.push(new particula());
    }
}

function particula() {
    this.px = generarRandom(0, ancho);
    this.py = generarRandom(0, alto);
    this.vx = generarRandom(-10, 10);
    this.vy = generarRandom(-10, 10);

    var r = generarRandom(0, 255);
    var g = generarRandom(0, 255);
    var b = generarRandom(0, 255);

    this.color = "rgba(" + r + "," + g + "," + b + ",0.5)";
    this.radio = generarRandom(20, 40);
}

function generarRandom(desde, hasta) {
    var valor = 0;
    valor = Math.random() * hasta;
    if (valor < desde) {
        valor = valor + desde;
    }
    return Math.floor(valor);
}


function dibujarParticula(particula1) {
    context.beginPath();
    var degradado = context.createRadialGradient(particula1.px, particula1.py, 0, particula1.px, particula1.py, particula1.radio);
    degradado.addColorStop(0, "white");
    degradado.addColorStop(0.4, "white");
    degradado.addColorStop(0.4, particula1.color);
    degradado.addColorStop(1, "black");
    context.fillStyle = degradado;
    context.arc(particula1.px, particula1.py, particula1.radio, 0, 2 * Math.PI);
    context.fill();

}

function test1() {
    var p = new particula();
    dibujarParticula(p);

}

function dibujarParticulas(choque) {
    context.globalCompositeOperation = "source-over";
    context.fillStyle = "rgba(0, 0, 0, 0.3)";
    context.fillRect(0, 0, ancho, alto); //W y H representan el ancho y alto del canvas
    context.globalCompositeOperation = "lighter";

    for (var i = 0; i < particulas.length; i++) {
        particulas[i].px = particulas[i].px + particulas[i].vx;
        particulas[i].py = particulas[i].py + particulas[i].vy;
        /*if (particulas[i].px > ancho){
            particulas[i].px = 0;
        }
        if (particulas[i].py > alto){
             particulas[i].py = 0;
        }*/

        /* if (particulas[i].px > ancho || particulas[i].px < 0) {
            particulas[i].vx = particulas[i].vx * -1;
        }
        if (particulas[i].py > alto || particulas[i].py < 0) {
            particulas[i].vy = particulas[i].vy * -1;
        }*/
        choque(i);
        dibujarParticula(particulas[i]);

    }
}

function probar() {
    setInterval(dibujarParticulas, 33);
}

function rebote() {
    dibujarParticulas(function (indice1) {
        if (particulas[indice1].px > ancho || particulas[indice1].px < 0) {
            particulas[indice1].vx = particulas[indice1].vx * -1;
        }
        if (particulas[indice1].py > alto || particulas[indice1].py < 0) {
            particulas[indice1].vy = particulas[indice1].vy * -1;
        }
    });
}

function pacman() {
    dibujarParticulas(function (indice2) {
        if (particulas[indice2].px > ancho) {
            particulas[indice2].px = 0;
        }
        if (particulas[indice2].py > alto) {
            particulas[indice2].py = 0;
        }
    });
}

function pacman1(){
    setInterval(pacman,33);
}


function rebote1(){
    setInterval(rebote,33);
}