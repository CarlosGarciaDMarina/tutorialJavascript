// Local Storage

window.addEventListener('load', function() {
    console.log("DOM cargado !!");

    //Condicional que comprueba si el local storage existe
    if (typeof(Storage) !== 'undefined') {
        console.log("Local Storage disponible");
    } else {
        console.log("Incompatible local storage");
    }

    //Guardar datos | usamos setItem para guardar los datos
    localStorage.setItem("Titulo", "Curso de JS");

    // Recuperar el elemento | con getItem podemos llamar al elemento
    document.querySelector("#peliculas").innerHTML = localStorage.getItem("Titulo");

    // Guardar objetos
    var usuario = {
        nombre : "Carlos",
        mail: "djsfhoe@sjdhnoe.com",
        web: "Escuela estoica"
    }
    //set.Item para crear y guardar un nuevo objeto, en este caso estamos guardando el diccionario de usuario, JSON.stringfy sirve para convertir datos de tipo JSON de JS a string
    localStorage.setItem("usuario", JSON.stringify(usuario));

    // Recuperar objeto, JSON.parse convertimos un string de JSON en un objeto de JS usable
    var userjs = JSON.parse(localStorage.getItem("usuario"));

    console.log(userjs);
    document.querySelector("#peliculas").append(" " + userjs.web);

    /**
     * Para borrar datos usamos
     * localStorage.removeItem("usuario");
     * o tambien podemos usar
     * localStorage.clear();
     */

});