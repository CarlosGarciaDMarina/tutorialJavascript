/* 
    Los operadores aritméticos toman valores numéricos (ya sean literales o variables) 
    como sus operandos y retornan un valor numérico 

    Los operadores de asignacion asigna un valor al operando de la izquierda basado 
    en el valor del operando de la derecha
*/
/* OPERADORES DE ASIGNACION 
 *
 * x += y       Sumar
 * x -= y       Restar
 * x *= y       Multiplicar
 * x /= y       Dividir
 * x %= y       Resto
 * x **= y      Exponente
 * x <<= y      Desplazamiento a la izda
 * x >>= y      Desplazamiento a la dcha
 * x >>>= y     sin signo, Desplazamiento a la dcha 
 * x &= y       AND
 * x ^= y       XOR
 * x |= y       OR
 */

let numero = 10;
numero += 5; //sería igual que poner numero = numero + 5
document.write(numero); // es como el alert pero lo escribe en el documento

/* Operadores Aritméticos */

let numero1 = 10;
let numero2 = 5;

numero1--; //Resta 1
//  numero1**3; //(Exponente al cubo)
//  resultado = numero1%numero2; //(Saca el resto entre 2 numeros)

resultado = numero1;
alert(resultado); 

document.write("<br>");


/*
*   *** OERADORES LÓGICOS ***   
*   
*   	Equality                (a == b)
*       Inequality              (a != b)
*       Identity                (a === b) *Mira tambien si el tipo de dato es el mismo, por ejemplo: que ambos sean strings*
*       Non-identity            (a !== b)
*       Grater than             (a > b)
*       Greater than or equal   (a >= b)
*       Less than               (a > b)
*       Less than or equal      (a <= b)
*
*/

let numero3 = 23;
let numero4 = 13;
let texto   = "23";
let texto2  = "Hola";

document.write(texto === numero3);
document.write("<br>");





