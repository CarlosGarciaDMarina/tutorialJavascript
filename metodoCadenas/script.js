/*
*   Métodos de cadenas
*
*   concat() - junta dos o mas cadenas y retorna una nueva
*   startsWith() - compara si dos cadenas empiezan con la misma palabra, sino empiezan con la misma devuelve false.
*   endsWith() - lo contrario a starsWith()
*   includes() - si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino, devuelve false
*   indexOf() - devuelve el indice del primer caracter de la cadena, si no existe, devuelve -1
*   lasIndexOf() - devuelve el último índice del primer caracter de la cadena, si no existe, devuelve -1
*
*   padStart() [propuesta de Estandar] - Rellenar cadena al principio con los caracteres deseados
*   padEnd() [propuesta de ECMA] - Rellenar cadena al final con los caracteres deseados
*   repeat() - Devuelve la misma cadena pero repetida la cantidad que le indiquemos
*
*   split() -divide la cadena como la pidamos
*   substring() - Nos retorna un pedazo de la cena que seleccionamos
*   toLowerCase() - Convierte una cadena a minúscula
*   toUpperCase() - Convierte una cadena a mayúscula
*   toString() - Método que devuelve una cadena que representa alk objeto especificado.
*   trim() - Elimina los espacios en blanco al princio y al final de una cadena.
*   trimEnd() - Elimina los espacios en blanco al final de una cadena.
*   trimStart() - Elimina los espacios en blanco al princio de una cadena.
*   valueOf() - Retorna el valor primitivo de una cadena
*
*/

let cadena = "Cadena de prueba";
let cadena2 = " prueba";

let resultado = cadena.padStart(23, "¡");
let resultado2 = cadena.padEnd(23, "!");
let resultado3 = cadena.substring(2,7);

document.write(resultado);
document.write("<br>");
document.write(resultado2);
document.write("<br>");
document.write(resultado3);

/*
*   Métodos de arrays
*
*   _________TRANSFORMADORES_________
*   pop() - Elimina y devuelve el ultimo elemento de un array.
*   shift() - Elimina el primer elemento de un array y lo devuelve.
*   push() - Agrega un elemento al final de la lista de un array.
*   reverse() - Invierte el orden de los elementos de un array.
*   unshift() - Agrega uno o vsarios elementos al inicio de un array, y devuelve la nueva longitud del array.
*   sort() - Ordena los elementos de un array localmente y lo devuelve ordenado.
*   splice() - Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
*
*   _________ACCESORES_________
*   join() - Une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve.
*   slice() - Devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido).
*
*   _________DE REPETICION_________
*   filter() - Crea un nuevo array con todos los elementos que cumplan la condicion
*   forEach() - Ejecuta la función indicada una vez por cada elemento de un array
*
*/

let nombres = ["Antonio", "Coque", "Enrique"];

document.write("<br>");
document.write("<br>");
document.write("Array Original: <b>" + nombres + ".</b><br>");
 let resultado4 = nombres.pop();
document.write("Elemento removido: <b style='color:red'>" + resultado4 + ".</b><br>");
document.write("Resultado final: <b>" + nombres + ".</b><br>");
document.write("<br>");
document.write("<br>");

document.write(nombres + "<br>");
nombres.splice(0, 1, "Juan");
document.write(nombres);


