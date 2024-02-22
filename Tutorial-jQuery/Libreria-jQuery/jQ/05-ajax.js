$(document).ready(function(){
    console.log("DOM Cargado!")

    // LOAD - nos permite hacer peticiones ajax y meter el resultado en cualquier elem que tengamos en la pagina
    //$('#datos').load("https://reqres.in/");

    // GET y POST 
    //Esta funcion GET recoge la peticion de la pagina directamente, le concretamos la pagina que queremos coger y hacemos la funcion de callback
    $.get("https://reqres.in/api/users", {page: 2}, function(response){
        response.data.forEach((element, index) => {
            $("#datos").append("<p>" + element.first_name + " " + element.last_name + "</p>"); // mostramos el contenido
        });
    });

    //Añadimos el formulario a una variable
    var formulario = $('#formulario');

    //Capturamos el evento para que no nos redirija a otra pag
    formulario.submit(function(e) {
        e.preventDefault();//Capturamos el evento para que no nos redirija a otra pag

        //Creamos la variable para que almacene los campos que queremos mostrar
        var usuario = {
            "name": $('input[name="name"]').val(),
            "web": $('input[name="web"]').val()
        }
        console.log(usuario);
/*        
        //Este metodo post recoge la peticion del attr action del formulario y le pasa los datos del usuario 
        $.post($(this).attr("action"), usuario, function(response) {
            console.log(response);
        }).done(function(){ // Sirve para comprobar que ha sido añadido
            alert("Usuario añadido con éxito.")
        });
*/
        //Este metodo nos permite manipular de una forma mucho mas amplia cualquier peticion AJAX que queramos hacer 
        $.ajax({ // La config de este metodo es estilo JSON
            type: "post", //Tipo de peticion 
            url: $(this).attr("action"), //URL a la que vamos a hacer la peticion AJAX
            data: usuario, //El objeto que vamos a enviar
            dataType: "json", //Que datos vamos a recibir o enviar 
            beforeSend: function (response) { //Antes de enviarse los datos le decimos que haga lo siguiente
                console.log("Enviando los datos...");
            },
            success: function (response) { // En el caso de que todo vaya correcto
                console.log(response);
            },
            error: function() { //En el caso de que suceda un error
                console.log("Ha ocurrido un error..." + e);
            },
            timeout: 2000 //Cuanto tiempo quiero que tarde como máximo la petición
        });

        return false;
    });


});