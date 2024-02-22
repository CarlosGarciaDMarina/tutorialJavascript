$(document).ready(function(){
    console.log("DOM Cargado!");

    var caja = $('#caja');

    //Ocultamos la caja
    $('#mostrar').hide();

    //Asignamos al boton de mostrar la capacidad de mostrar la caja
    $('#mostrar').click(function(){
        $(this).hide(); //Ocultamos el boton de mostrar
        $('#ocultar').show(); //Mostramos el boton de ocultar

        caja.show('fast');

        //$('#caja').fadeIn('slow');
        //$('#caja').slideDown('slow');
        //$('#caja').fadeTo('slow', 1); Nos permite que vaya de un estado a otro
    });
    
    //Asignamos al boton de ocultar la capacidad de ocultar la caja
    $('#ocultar').click(function(){
        $(this).hide(); //Ocultamos el boton de ocultar
        $('#mostrar').show(); //Mostramos el boton de mostrar

        // Si queremos podemos añadir un callback como segundo parametro de la funcion
        caja.hide('fast', function(){
            console.log("Panel ocultado.");
        });

        //$('#caja').fadeOut('slow');
        //$('#caja').slideUp('slow');
        //$('#caja').fadeTo('slow', 0); Nos permite que vaya de un estado a otro
    });

    // Podemos asignar que oculte y muestre a la vez
    $('#todo_en_uno').click(function(){
        caja.toggle('fast');
        // $('#caja').fadeToggle('fast');
        // $('#caja').slideToggle('fast');
    });

    // Más animaciones
    $('#animar').click(function(){
        caja.animate({
                      marginLeft: '800px',
                      fontSize: '50px',
                      height: '115px'
                    }, 'slow')
            .animate({
                      borderRadius: '50px',
                      marginTop: '200px'
                    }, 'slow')
            .animate({
                      borderRadius: '0px',
                      marginLeft: '0px'
                    }, 'slow')
            .animate({
                      borderRadius: '50px',
                      marginTop: '5px'
                    }, 'slow'); 
    });

});