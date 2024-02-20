'use strict';

// Fetch y petciones a servicios / apis rest / Gestion de errores 


// Esperamos a que el DOM esté completamente cargado
window.addEventListener('load', function() {
    console.log("DOM cargado!!");

    // Seleccionamos los contenedores de usuarios y Janet del DOM
    var div_usuarios = document.querySelector("#usuarios");
    var div_alumno = document.querySelector("#alumno");
    var div_janet = document.querySelector("#janet");

    // Realizamos la solicitud Fetch para obtener la lista de usuarios
    getUsuarios()
        .then(data => data.json()) // Convertimos los datos de la respuesta a JSON
        .then(users => {
            // Mostramos la lista de usuarios en el contenedor correspondiente
            listadoUsuarios(users.data);
            return getInfo();
        })
        .then(data => {
            div_alumno.innerHTML = data;
            return getJanet(); // Realizamos una solicitud Fetch para obtener los detalles de Janet
        })
        .then(data => data.json()) // Convertimos los datos de la respuesta a JSON
        .then(user => {
            // Mostramos los detalles de Janet en el contenedor correspondiente
            mostrarJanet(user.data);
        })
        .catch(error => {
            // Capturamos y manejamos cualquier error que pueda ocurrir durante las solicitudes Fetch
            console.error('Error en las solicitudes Fetch:', error);
        });

    // Función para realizar la solicitud Fetch de la lista de usuarios
    function getUsuarios() {
        return fetch('https://reqres.in/api/users');
    }

    // Función para realizar la solicitud Fetch de los detalles de Janet
    function getJanet() {
        return fetch('https://reqres.in/api/users/2');
    }

    // Función para mostrar la lista de usuarios en el contenedor correspondiente
    function listadoUsuarios(usuarios) {
        usuarios.forEach((user, i) => {
            let nombre = document.createElement('h2'); // Creamos un elemento h2 para el nombre
            nombre.innerHTML = `${i + 1}. ${user.first_name} ${user.last_name}`; // Establecemos el contenido del nombre
            div_usuarios.appendChild(nombre); // Añadimos el nombre al contenedor de usuarios en el DOM
        });
        document.querySelector(".load").style.display = 'none'; // Ocultamos el indicador de carga
    }

    // Función para mostrar los detalles de Janet en el contenedor correspondiente
    function mostrarJanet(user) {
        let nombre = document.createElement('h3'); // Creamos un elemento h3 para el nombre de Janet
        let avatar = document.createElement('img'); // Creamos un elemento img para el avatar de Janet

        nombre.innerHTML = `${user.first_name} ${user.last_name}`; // Establecemos el contenido del nombre
        avatar.src = user.avatar; // Establecemos la fuente del avatar
        avatar.width = '100'; // Establecemos el ancho del avatar

        div_janet.appendChild(nombre); // Añadimos el nombre de Janet al contenedor correspondiente en el DOM
        div_janet.appendChild(avatar); // Añadimos el avatar de Janet al contenedor correspondiente en el DOM

        document.querySelector("#janet .load").style.display = 'none'; // Ocultamos el indicador de carga de Janet
    }

    // Funcion para mostrar informacion que devolverá otra promesa
    function getInfo() {
        var alumno = {
            nombre: 'Carlos',
            apellidos: 'García',
            url: 'https://carlos.es'
        };

        return new Promise((resolve, reject) => {
            var alumno_string = "";
            setTimeout(function() {
                alumno_string = JSON.stringify(alumno);

                if(typeof alumno_string != 'string' || alumno_string == ' ') return reject('¡Ha ocurrido un error!');

                return resolve(alumno_string);
            }, 3000);
        });

    }

    // Función para mostrar la lista de usuarios en el contenedor correspondiente
    function listadoUsuarios(usuarios) {
        usuarios.forEach((user, i) => {
            let nombre = document.createElement('h2'); // Creamos un elemento h2 para el nombre
            nombre.innerHTML = `${i + 1}. ${user.first_name} ${user.last_name}`; // Establecemos el contenido del nombre
            div_usuarios.appendChild(nombre); // Añadimos el nombre al contenedor de usuarios en el DOM
        });
        document.querySelector(".load").style.display = 'none'; // Ocultamos el indicador de carga
    }

    // Función para mostrar los detalles de Janet en el contenedor correspondiente
    function mostrarJanet(user) {
        let nombre = document.createElement('h3'); // Creamos un elemento h3 para el nombre de Janet
        let avatar = document.createElement('img'); // Creamos un elemento img para el avatar de Janet

        nombre.innerHTML = `${user.first_name} ${user.last_name}`; // Establecemos el contenido del nombre
        avatar.src = user.avatar; // Establecemos la fuente del avatar
        avatar.width = '100'; // Establecemos el ancho del avatar

        div_janet.appendChild(nombre); // Añadimos el nombre de Janet al contenedor correspondiente en el DOM
        div_janet.appendChild(avatar); // Añadimos el avatar de Janet al contenedor correspondiente en el DOM

        document.querySelector("#janet .load").style.display = 'none'; // Ocultamos el indicador de carga de Janet
    }
});


/*
'use strict';

window.addEventListener('load', function() {

    // Comprobamos que funciona el load
    console.log("DOM cargado!!");

    var div_usuarios = document.querySelector("#usuarios");
    var div_janet = document.querySelector("#janet");

    // Este metodo Fetch lo que hace es acceder a unos datos remotos, hace una peticion y se queda a la espera de que, cuando recibamos esos datos, los convirtamos a json
    getUsuarios()
        .then(data => data.json()) // convertimos los datos a json
        .then(users => {
            listadoUsuarios(users.data);
            return getJanet();

        })
        .then(data => data.json())
        .then(user => {
            mostrarJanet(user.data);
        });
    
    // Funcion que sirve para mostrar usuarios // Funcion promesa
    function getUsuarios() {
        return fetch('https://reqres.in/api/users'); // Promesa
    }

    // Funcion que sirve para mostrar un usuario
    function getJanet() {
        return fetch('https://reqres.in/api/users/2'); // Promesa
    }

    // Funcion que sirve para mostrar la informacion de los usuarios
    function listadoUsuarios(usuarios) {
        usuarios.map((user, i) => {
            let nombre = document.createElement('h2');

            nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name;

            div_usuarios.appendChild(nombre);

            document.querySelector(".load").style.display = 'none';
        });
    }

    function mostrarJanet(user) {
        let nombre = document.createElement('h3');
        let avatar = document.createElement('img');

        nombre.innerHTML = user.first_name + " " + user.last_name;
        avatar.src = user.avatar;
        avatar.width = '100';

        div_janet.appendChild(nombre);
        div_janet.appendChild(avatar);

        document.querySelector("#janet .load").style.display = 'none';
    }









});// End Load
*/


/**     Codigo mejorado
 'use strict';

window.addEventListener('load', function() {
    console.log("DOM cargado!!");

    var div_usuarios = document.querySelector("#usuarios");
    var div_janet = document.querySelector("#janet");

    getUsuarios()
        .then(data => data.json())
        .then(users => {
            listadoUsuarios(users.data);
            return getJanet();
        })
        .then(data => data.json())
        .then(user => {
            mostrarJanet(user.data);
        })
        .catch(error => {
            console.error('Error en las solicitudes Fetch:', error);
        });

    function getUsuarios() {
        return fetch('https://reqres.in/api/users');
    }

    function getJanet() {
        return fetch('https://reqres.in/api/users/2');
    }

    function listadoUsuarios(usuarios) {
        usuarios.forEach((user, i) => {
            let nombre = document.createElement('h2');
            nombre.innerHTML = `${i + 1}. ${user.first_name} ${user.last_name}`;
            div_usuarios.appendChild(nombre);
        });
        document.querySelector(".load").style.display = 'none';
    }

    function mostrarJanet(user) {
        let nombre = document.createElement('h3');
        let avatar = document.createElement('img');

        nombre.innerHTML = `${user.first_name} ${user.last_name}`;
        avatar.src = user.avatar;
        avatar.width = '100';

        div_janet.appendChild(nombre);
        div_janet.appendChild(avatar);
        document.querySelector("#janet .load").style.display = 'none';
    }
});

 */