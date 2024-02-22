$(document).ready(function(){
    console.log("DOM Cargado!!"); // Comprobamos que el dom esta cargado

    reloadLinks(); // Lo cargamos antes para que se vean los enlaces que tienen dentro

    //Creamos una funcion que recoja el valor que le damos al campo de add link y lo añada dentro de una lista a la lista ya existente
    //Con el metodo HTML podemos incrustar HTML sin ningun problema dentro del body           
    $('#add_button').click(function(){
        // $('#menu').html('<a href="'+$("#add_link").val()+'"></a>'); Lo INCRUSTA en la lista machacando lo que había
        $('#menu').append('<li><a href="' + $("#add_link").val() + '"></a></li>'); // Lo AÑADE al final de la lista existente
        // $('#menu').prepend('<li><a href="'+$("#add_link").val()+'"></a></li>'); // Lo AÑADE al principio de la lista existente
        // $('#menu').before('<li><a href="'+$("#add_link").val()+'"></a></li>'); // Lo añade ANTES de la lista (en otra diferente)
        // $('#menu').after('<li><a href="'+$("#add_link").val()+'"></a></li>'); // Lo añade DESPUES de la lista (en otra diferente)

        $('#add_link').val(''); // Esto sirve para dejar vacío el campo de texto despues de añadir 
        reloadLinks(); // Recargamos los links para que se muestren 
    });





});

function reloadLinks() {
        // Con el metodo each podemos recorrer todos los elementos
        $('a').each(function(index){
            // Siempre que podamos tenemos que meter los $() en variables para no sobrecargar el DOM
            var enlace = $(this).attr("href");
            var that = $(this);
            
            //Modificamos el atributo para que cargue la pag en una pestaña diferente
            that.attr('target', '_blank');
            //Podemos borrar atributos si usamos removeAttr, ejemplo
            // that.removeAttr('_blank);

            // Metemos los enlaces en el metodo de texto y ahora nos muestra en pantalla los enlaces
            that.text(enlace);
        });
}