// Local Storage

window.addEventListener('load', function() {
    // Comprobamos que funciona el load
    console.log("DOM cargado!!");

    // Capturamos el formulario
    var formulario = document.querySelector("#form_peliculas");

    //Creamos el evento de submit
    formulario.addEventListener('submit', function(){
        //Comprobamos si entra en el evento
        console.log("Entra");

        //Almacenamos el valor del campo de texto en la variable titulo
        var titulo = document.querySelector('#add_pelicula').value;

        //Creamos un condicional para gestionar errores
        if (titulo.length >= 1) {
            //Lo almacenamos
            localStorage.setItem(titulo, titulo);
        }
    });// End event submit

        // Capturamos el formulario
        var formulario_b = document.querySelector("#form_borrar_peliculas");

        //Creamos el evento de submit
        formulario_b.addEventListener('submit', function(){
            //Comprobamos si entra en el evento
            console.log("Entra");
    
            //Almacenamos el valor del campo de texto en la variable titulo
            var titulo = document.querySelector('#borrar_pelicula').value;
    
            //Creamos un condicional para gestionar errores
            if (titulo.length >= 1) {
                //Lo almacenamos
                localStorage.removeItem(titulo);
            }
        });// End event submit

    var ul = document.querySelector('#peliculas_list');

    //Recorremos el local storage
    for (const index in localStorage) {
        //Solamente añadirá si lo que estamos introduciendo son strings
        if (typeof localStorage[index] == 'string') {
            var li = document.createElement("li");//Creamos el elemento li
            li.append(localStorage[index]); //Lo añadimos al body con el append
            ul.append(li);
        }

    }









});// End Load