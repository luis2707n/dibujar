canvas=document.getElementById("pizarron");
contexto=canvas.getContext("2d");

var evento="vacio";
var posicionX, posicionY;

color="black";
ancho=1;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    evento="mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    posicionX_actual=e.clientX-canvas.offsetLeft;
    posicionY_actual=e.clientY-canvas.offsetTop;

    if(evento=="mouseDown"){
        contexto.beginPath();
        contexto.strokeStyle=color;
        contexto.lineWidth=ancho;

        console.log("Posición X y pocisión Y");
        console.log("X= "+posicionX+"Y= "+posicionY);
        contexto.moveTo(posicionX,posicionY);

        console.log("Posición actual X y pocisión actual Y");
        console.log("X= "+posicionX_actual+"Y= "+posicionY_actual);
        contexto.lineTo(posicionX_actual,posicionY_actual);
        contexto.stroke();
    }
    posicionX=posicionX_actual;
    posicionY=posicionY_actual;
}

function borrar(){
    contexto.strokeStyle="white";
    contexto.lineWidth=1000;
    contexto.moveTo(0,0);
    contexto.lineTo(canvas.width,canvas.height);
    contexto.stroke();
}