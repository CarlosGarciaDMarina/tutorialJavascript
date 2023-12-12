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
*                               PRACTICA 1
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

document.write("<br>");
document.write("<br>");
document.write("<b>Práctica 2: </b>");
document.write("<br>");
document.write("<br>");

/*
*                               PRACTICA 2
*
*   Este joven volvió a clase el dia siguiente de la fiesta, en su curso son un total de 19 alumnos. En su universidad ocurrio un problema
*   y es que se rompió el sistema de registro de asistencias y durante los proximos 30dias no se pueden hacer registros de datos,
*   las clases no podran comenzar hasta que alguien resuelva este problema....
*   
*   - Crear un minisistema que nos permita registrar a los alumnos presentes (p) y a los ausentes (a).
*   - Pasados los 30 días mostrar la situacion final de todos los alumnos (nº total de ausentes y presentes).
*   - Se puede tener un maximo de 10% de ausencias por semestre, si algun alumno tiene mas será suspenso.
*/

let cantidad = prompt("¿Cuantos alumnos son?");
let alumnosTotales = [];

for (let i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0];
}

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia =="P") {
        alumnosTotales[p][1]++;
    }
}

for (i=0; i <= 30; i++){
    for(alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}

for(alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    _________Presentes: ${alumnosTotales[alumno][1]}
    _________Ausencias: ${30 - alumnosTotales[alumno][1]}`;

    if (30 - alumnosTotales[alumno][1] > 17) {
        resultado += "<b style='color:red'> REPROBADO POR FALTAR A CLASE</b><br><br>";
    }else{
        resultado += "<br><br>"
    }
    document.write(resultado);

}

/*
*   Práctica 3 Crear una calculadora
*/

//Funciones de la calculadora
function suma(num1, num2) {
    //Transformamos a int los datos
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    //Creamos la variable y los sumamos
    let resultado = num1 + num2;

    //Devolvemos el resultado
    return resultado;
}

//Funciones de la calculadora
function resta(num1, num2) {
    //Transformamos a int los datos
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    //Creamos la variable y los sumamos
    let resultado = num1 - num2;

    //Devolvemos el resultado
    return resultado;
}

//Funciones de la calculadora
function multiplicar(num1, num2) {
    //Transformamos a int los datos
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    //Creamos la variable y los sumamos
    let resultado = num1 * num2;

    //Devolvemos el resultado
    return resultado;
}

//Funciones de la calculadora
function dividir(num1, num2) {
    //Transformamos a int los datos
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    //Creamos la variable y los sumamos
    let resultado = num1 / num2;

    //Devolvemos el resultado
    return resultado;
}


//Preguntamos al usuario que funcion quiere realizar
let operacion = prompt("¿Que operacion deseas realizar? (1 = Sumar - 2 = Restar - 3 = Multiplicar - 4 = Dividir)")

//Creamos las condiciones del programa para que, segun lo que haya escrito el usuario, realice una funcion u otra
if (operacion == 1) {
    //Pedimos los numeros al usuario
    num1 = prompt("Dame el primer numero");
    num2 = prompt("Dame el segundo numero");

    //Mostramos el resultado por pantalla
    document.write("El resultado de sumar los numeros " + num1 + " y " + num2 +" es: " + suma(num1,num2));

}
else if (operacion == 2){
    //Pedimos los numeros al usuario
    num1 = prompt("Dame el primer numero");
    num2 = prompt("Dame el segundo numero");

    //Mostramos el resultado por pantalla
    document.write("El resultado de restar los numeros " + num1 + " y " + num2 +" es: " + resta(num1,num2));
}
else if (operacion == 3){
        //Pedimos los numeros al usuario
        num1 = prompt("Dame el primer numero");
        num2 = prompt("Dame el segundo numero");
    
        //Mostramos el resultado por pantalla
        document.write("El resultado de multiplicar los numeros " + num1 + " y " + num2 +" es: " + multiplicar(num1,num2));
}
else if (operacion == 4){
        //Pedimos los numeros al usuario
        num1 = prompt("Dame el primer numero");
        num2 = prompt("Dame el segundo numero");
    
        //Mostramos el resultado por pantalla
        document.write("El resultado de dividir los numeros " + num1 + " y " + num2 +" es: " + dividir(num1,num2));
}
else{
    alert("Ha ocurrido un error el programa debe cerrarse.")
}


