/*
*
**********FUNCIONES**********
*
*   
*
*
*
*
*
*
*
*
*/

/*

function saludo() {
    let respuesta = prompt("Hola, ¿Como fue tu día?");
    if (respuesta == "bien") {
        alert("me alegro");
    } else {
        alert("una pena");
    }
}

saludo();

document.write("<b>Funcion</b>");
document.write("<br>");

function saludar() {
    alert("Hola !");
    return "La funcion se ejecutó correctamente";
}

let hola = saludar();

document.write(hola);

document.write("<br>");
document.write("<br>");
document.write("<b>Funcion de ejemplo</b>");
document.write("<br>");

let num1 = prompt("Dame el primer numero.");
let num2 = prompt("Dame el segundo numero.");

function sumar(num1, num2) {
    let numero1 = parseInt(num1);
    let numero2 = parseInt(num2);

    let res = numero1 + numero2;
    
    return res;
}

let resultadoSuma = sumar(num1, num2);

document.write("La suma de los numeros " + num1 + " y "+ num2 + " es: " + resultadoSuma);

document.write("<br>");
document.write("<br>");
document.write("<b>Funciones flecha</b>");
document.write("<br>");

let nombre = "Antonio";

const saludamos = (nombre) => {
    let frase = `¡Hola ${nombre}! ¿Cómo estas?`;
    document.write(frase);
}

saludamos(nombre);

*/

/* 
*       Tambien se puede hacer así
*
*       let frase = `¡Hola ${nombre}! ¿Cómo estas?`;
*
*       const saludamos = nombre => document.write(frase);
*
*       saludamos(nombre);
*       
*/


/*
*
*                               PRACTICA
*
*   Un joven muy afortunado logró ganar la loteria... este joven decidiói irse de fiesta para celebrarlo, compró una maquina
*   máquina que edja pasar solamente a los mayores de edad,..
*   
*   - Dejar pasar a los mayores de edad
*   - La primera persona que entra despues de las 2AM, no paga.
*
*/

let edad = 23;
let hora = 2;
let cliente = 1;

function mayorEdad(edad){
    let pasas = false;

    //Creamos el condicional que comprueba si es mayor de edad o no
    if (edad >= 18) {
        pasas = true;
        return pasas;
    } else {
        pasas = false;
        return pasas;
    }
}

//Comprobamos que la discoteca este abierta
if (hora >= 0 && hora <= 7){

    //Si esta abierta comprobamos la edad
    if (mayorEdad(edad) == true) {
        document.write("Vale, puedes pasar...");

        //Si tiene edad para pasar comprobamos si es el primer cliente de la hora acordada
        if (hora == 2 && cliente == 1) {
            document.write(" y pasas gratis.");

        } else {
            //No has sido el primero
            document.write(" no has sido el primero, son 12 pavos.");
        }

    } else {
        //No tiene la edad para pasar
        document.write("Espera chaval, no puedes pasar.");
    }

}else{
    //Esta cerrada
    document.write("La discoteca esta cerrada.");
}
