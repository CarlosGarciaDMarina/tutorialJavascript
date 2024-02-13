/**
 * 1. Pida 6 números al usuario y los meta en un array
 * 2. Muestra el array entero en el cuerpo de la pagina y de la consola
 * 3. Ordenarlo y mostrarlo
 * 4. Invertir su orden y mostrarlo
 * 5. Mostrar cuantos elementos tiene el array
 * 6. Búsqueda de un valor por el usuario, que nos diga si lo encuentra y nos de su índice
 * 
 * 
 * 
 * 
 */
    // Creamos e inicializamos el array
    let numeracion = new Array;

    // Bucle para lanzar los 6 prompts
    for (let i = 0; i <= 5; i++) {
        // Creamos la variable que va a lanzar el prompt para recoger la respuesta del usuario
        let respuesta = parseInt(prompt("Dame el " + (i+1) + "º" + " numero:"));
        numeracion.push(respuesta); // Lo añadimos al array
    }

    // Ajustamos lo que vamos a mostrar en el documento
    document.write("<h2 style='color:red;'> Este es un array ordenado </h2>");
    document.write("<h2 style='color:blue;'>" + numeracion.sort(function(a, b){return a-b}) + "</h2>");
    document.write("<h2 style='color:red;'> Este es un array ordenado del reves </h2>");
    document.write("<h2 style='color:blue;'>" + numeracion.reverse() + "</h2>");
    document.write("<h2 style='color:red;'> Este array tiene " + numeracion.length + " elementos</h2>");
    document.write("<h2 style='color:blue;'>" + numeracion.reverse() + "</h2>");    
    
    // Ajustamos lo que vamos a mostrar por la consola
    console.log("Este es un array ordenado:")
    console.log(numeracion.sort());
    console.log("Este es un array ordenado del reves:");
    console.log(numeracion.reverse());
    console.log("Este array tiene " + numeracion.length + " elementos")

    // Preguntamos al usuario lo que quiere buscar dentro del array 
    let buscar = parseInt(prompt("¿Qué valor quieres buscar?"));

    // Creamos las variables y buscamos dentro del array
    let resultadoBusqueda = numeracion.find(numeracion => numeracion == buscar);
    let indiceBusqueda = numeracion.findIndex(numeracion => numeracion == buscar)

    // Si lo encontramos lo mostramos y si no mostramos mensaje de error
    if (resultadoBusqueda && resultadoBusqueda != -1) {
        document.write("<h2 style='color:red;'> Esto es lo que buscabas: " + resultadoBusqueda + " y se encuentra en la posicion numero: "+ indiceBusqueda + " del array." +"</h2>");
    } else {
        // Error en la busqueda
        document.write("<h2 style='color:red;'> El numero " + buscar + " no se encuentra en el array </h2>")
    }
    
    
