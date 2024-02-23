$(document).ready(function () {
    //Comprobamos que el DOM esta cargado
    console.log("DOM cargado !!");

    // Método que hace que puedas mover los divs con el raton por la pagina
    $(".elemento").draggable(); 
    
    // Método que hace que redimensionable los divs con el raton
    $(".elemento").resizable(); 

    // Método que sirve para poder seleccionar elementos del DOM
    // $(".lista-seleccionable").selectable();

    // Método que sirve para poder ordenar elementos del DOM
    $(".lista-seleccionable").sortable({ //Las funciones siempre se llaman al style JSON
        update: function(event, ui){
            console.log("La lista ha cambiado.")
        }
    });

    // El método droppable permite que un elemento acepte elementos arrastrables soltados sobre él
    $("#elemento-movido").draggable();
    $("#area").droppable({ //Las funciones siempre se llaman al style JSON
        drop: function() {
            console.log("Has soltado algo dentro de la caja")
        }
    });

    // EFECTOS (efecto, opciones, tiempo)
    $("#mostrar").click(function() { 
        $(".caja-efectos").toggle("explode", 4000); // Efecto de explosion de jQuery UI
/*        
        $(".caja-efectos").toggle("blind"); // Efecto de persiana de arriba a abajo jQuery UI
        $(".caja-efectos").toggle("slide"); // Efecto de persiana de izda a dcha de jQuery UI
        $(".caja-efectos").toggle("drop"); // Efecto de degradado de jQuery UI
        $(".caja-efectos").toggle("fold"); // Efecto de ventana de jQuery UI
        $(".caja-efectos").toggle("puff"); // Efecto de puff de jQuery UI
        $(".caja-efectos").toggle("scale"); // Efecto de escalado de tamaño de jQuery UI
        $(".caja-efectos").toggle("shake"); // Efecto de movimiento de jQuery UI 
*/        
    });




});