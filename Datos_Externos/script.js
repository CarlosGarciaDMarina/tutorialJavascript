'use strict';
// Fetch y petciones a servicios / apis rest

window.addEventListener('load', function() {
    // Comprobamos que funciona el load
    console.log("DOM cargado!!");

    var div_usuarios = document.querySelector("#usuarios");

    var usuarios = [];

    // Este metodo Fetch lo que hace es acceder a unos datos remotos, hace una peticion y se queda a la espera de que, cuando recibamos esos datos, los convirtamos a json
    fetch('https://reqres.in/api/users')
        .then(data => data.json()) // convertimos los datos a json
        .then(users => {
            usuarios = users.data;
            console.log(usuarios);

            usuarios.map((user, i) => {
                let nombre = document.createElement('h2');

                nombre.innerHTML = i+ ". " + user.first_name + " " + user.last_name;

                div_usuarios.appendChild(nombre);

                document.querySelector(".load").style.display = 'none';
            });

        });









});// End Load