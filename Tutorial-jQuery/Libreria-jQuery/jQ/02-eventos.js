$(document).ready(function() {
    console.log("El dom está cargado.")

    // MouseOver y MouseOut
    var caja = $("#caja");
/*
    caja.mouseover(function() {
        $(this).css("background", "red");
    });    
    
    caja.mouseout(function() {
        $(this).css("background", "green");
    });
*/
    function cambiaRojo() {
        $(this).css("background", "red");
    }    

    function cambiaVerde() {
        $(this).css("background", "green");
    }

    // Hover en jQuery primero se ejecuta el hover cuando entras y luego cuando sales ejemplo: .hover(entra, sale)
    caja.hover(cambiaRojo, cambiaVerde);

    // Click y DoubleClick
    // Click
    caja.click(function() {
        $(this).css("color", "#fff")
               .css("background", "blue");
    })

    // DoubleClick
    caja.dblclick(function() {
        $(this).css("color", "#000")
               .css("background", "pink");
    })

    // Focus y Blur
    var nombre = $("#nombre");
    var datos = $("#datos");

    nombre.focus(function() {
        $(this).css("border", "5px solid #FF0000");
    });
    
    nombre.blur(function() {
        $(this).css("border", "2px solid green");
        //El metodo text te muestra un texto por pantalla y el metodo .val recoge el valor de un atributo
        datos.text($(this).val()).show(); // el metodo show sirve para mostrar elementos y hide para ocultarlos
    });

    // Mousedown y Mouseup
    datos.mousedown(function() {
        $(this).css("border-color", "gray")
    });

    datos.mouseup(function() {
        $(this).css("border-color", "#000")
    });

    // Mousemove 
    $(document).mousemove(function(event){ //Event sirve para
        console.log(`Posicion x del raton: ${event.clientX}`);
        console.log(`Posicion y del raton: ${event.clientY}`);

        var sigueme = $("#sigueme");
        
        $('body').css("cursor", "none");
        sigueme.css("left", event.clientX)
               .css("top", event.clientY);
    });
    /*
        El objeto 'event' en JavaScript proporciona información sobre el evento que ha ocurrido, como un clic del mouse, un desplazamiento, una pulsación de tecla, etc. 
        Este objeto se pasa automáticamente como argumento a la función de manejo de eventos cuando ocurre un evento.

        Algunas de las propiedades más comunes del objeto event son:
        event.target: Devuelve el elemento DOM que desencadenó el evento.
        event.type: Devuelve el tipo de evento.
        event.clientX y event.clientY: Devuelven las coordenadas del puntero del mouse en relación con el borde izquierdo y superior de la ventana del navegador.
        event.keyCode: Devuelve el código de la tecla presionada.
        El uso de este objeto te permite acceder a información relevante sobre el evento que ocurrió y realizar acciones en consecuencia en tu código JavaScript.
     */

});