'use strict';

// Eventos

//Evento de load sirve para que puedas cargar el script en la cabecera del documento HTML
window.addEventListener('load', () => { 

    // Eventos de ratón
    var boton = document.querySelector("#boton");

    function cambiarColor() {
        var bg = boton.style.background;

        if(bg == "green"){
            boton.style.background = "red";
            
        } else {
            boton.style.background = "green";
        }

        boton.style.padding = "15px";
        boton.style.border = "1px solid #000";
        boton.style.borderRadius = "12px";

        return true;
    }

    // Evento onClick
    boton.addEventListener('click', function() {
        cambiarColor();
    });

    // Mouse hover
    // boton.addEventListener('mouseover', function(){
    //   boton.style.transform = "scale(1.5)"; 
    // });

    boton.addEventListener('mouseenter', function(){
        boton.style.transform = "scale(1.5)"; 
    });

    //Mouse Out
    boton.addEventListener('mouseout', function(){
        boton.style.transform = "scale(1)"; 
    });

    // Focus
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus', function(){
        console.log("[Focus]");
    });

    // Blur - cuando salimos del focus
    input.addEventListener('blur', function(){
        console.log("[Blur]");
    });

    // Keydown
    // Incluimos el parámetro "event" en la función de manejo de eventos De esta manera,
    // puedes acceder al objeto de evento y evitar errores en algunos navegadores que pueden
    // ocurrir si no se proporciona el objeto de evento explícitamente.
    input.addEventListener('keydown', function(event){
        console.log("[KeyDown]", String.fromCharCode(event.keyCode));
    });

    // Keypress
    input.addEventListener('keypress', function(event){
        console.log("[KeyPress]", String.fromCharCode(event.keyCode));
    });
    // Keyup
    input.addEventListener('keyup', function(event){
        console.log("[KeyUp]", String.fromCharCode(event.keyCode));
    });
    
}); // end load

