'use strict';

// Creamos el load para esperar a que se cargue completamente el DOM antes de ejecutar el script
window.addEventListener('load', function() {
    console.log("DOM Cargado !!") // Comprobacion 

    // Creamos las variables que vamos a necesitar
    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed")
    box_dashed.style.display = "none"; // Ajustamos el display a none para que no se vea hasta que cliquemos el boton 

    // Creamos el evento del formulario
    formulario.addEventListener('submit', function() {
        console.log("Evento submit capturado"); // Comprobacion 

        // Le damos a cada variable su valor
        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;

        // Mostramos la caja
        box_dashed.style.display = "block";

        // Creamos un diccionario donde metemos los datos del usuario
        var datos_usuario = {Nombre: nombre, Apellidos: apellidos, Edad: edad};

        // Hacemos un for in que recorra los datos del usuario 
        for (var indice in datos_usuario) {
            var parrafo = document.createElement("p"); // creamos el elemento parrafo
            parrafo.append(indice + ": " +datos_usuario[indice]); // En cada iteracion va a crear un parrafo con los datos del array
            box_dashed.append(parrafo); //metemos parrafo dentro de box_dashed para que aparezcan dentro
        }
    }); // End formulario
}); // End load