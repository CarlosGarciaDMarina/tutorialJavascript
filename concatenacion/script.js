/*
 * Para concatenar unimos dos cadenas
 * 
 * 
 * 
 * 
 * 
 */

let saludo = "Hola Pedro!"
let pregunta = " ¿Cómo estas?"

let frase = saludo + pregunta;

document.write(frase);

/* Numeros tambien */
let numero1 = 12;
let numero2 = 14;
let numero = "" + numero1 + numero2;

/* numero = numero1.concat(numero2) , aqui si o si tenemos que tener una variable string definida */

document.write(numero);

/* 
 *          Concatenar con baktips 
 * De esta forma es como mas errores nos vamos a evitar
 *   - Sin bakticks: "1\n\
 *                       linea 2"
 * 
 *  - Con bakticks: ´´´´ línea 1 |
 *                        línea 2`
*/

let nombre = "Carlos García";
let frase2 = `Soy ${nombre} y estoy caminando.`;
document.write(frase2);

