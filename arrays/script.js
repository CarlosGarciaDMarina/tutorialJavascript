/*
*
**************ARRAYS**************
*
*   Es un bloque de datos donde añadimos elementos, por ejemplo, una caja que almacena distintos tipos de frutas.
*
***************Búsquedas y Operaciones**************
*   .some() - te muestra valores enteros mayores, menores o iguales a un valor que quieras buscar
*       ejemplo: var busqueda = precios.some(precio => precio >= 20;
*   .find() - te muestra valores numéricos o string dentro de un array
*       ejemplo: var busqueda = lenguajes.find(lenguaje => lenguaje == "JAVA");
*   .findIndex() - te muestra el indice del elemento
*       ejemplo: var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "JAVA");
*   .sort() - ordena el array por orden alfabético
*       ejemplo: lenguajes.sort();
*   .reverse() - ordena el array del reves
*       ejemplo: lenguajes.reverse();
*   .push() - añade un elemento al array
*       ejemplo: lenguajes.push();
*   .pop() - elimina el ultimo elemento del array
*       ejemplo: lenguajes.pop();
*   .join() - convierte un array en string
*       ejemplo: var lenguajes_programcion = lenguajes.join();
*   .indexOf() - te muestra el indice del elemento
*       ejemplo: lenguajes.indexOf('JAVA');
*
****************Arrays asociativos**************
*   son parecidos a los datos JSON, estos arrays tienen un valor asociado, cuando llamas a un elemento del array no te muestra el elemen
*   sino que te muestra el dato que tiene asociado
*
*/

frutas = ["manzana", "piña", "naranja", "fresa", "sandia"];

document.write(frutas[1]);
document.write("<br>");
document.write("<br>");

// ARRAY ASOCIATIVO
let pc1 = {
    nombre: "Carlos-PC",
    procesador: "Intel I7",
    ram: "32GB",
    espacio: "1TB"
};

document.write(pc1["nombre"]);
document.write("<br>");
document.write("<br>");

let nombre = pc1 ["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];

let frase = `El nombre de mi pc es ${nombre} <br>
             El procesador de mi pc es ${procesador} <br>
             El espacio en disco de mi pc es ${espacio} <br>
             La ram de mi pc es ${ram} <br>`;

document.write(frase);