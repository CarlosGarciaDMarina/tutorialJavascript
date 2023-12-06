/* 
*********** BUCLES * E * ITERACIÓN **********
*
*   Un bucle es una estructura que permite repetir un conjunto de instrucciones varias veces.
*
*   Por ejemplo:
*
*   Imagina que estás preparando un lote de galletas y tienes que cortar la masa en formas individuales. 
*   En lugar de cortar cada galleta una por una, decides usar un cortador de galletas con una forma específica. 
*   Entonces, colocas el cortador en la masa, lo presionas, cortas la forma y luego mueves el cortador a otra 
*   parte de la masa para cortar otra galleta.
*
*   En programación, un bucle es como ese cortador de galletas. Definimos una serie de instrucciones 
*   que queremos que se repitan, y el bucle ejecuta esas instrucciones una y otra vez hasta que se cumple 
*   cierta condición. Es una forma eficiente de realizar tareas repetitivas sin tener que escribir las mismas 
*   instrucciones una y otra vez.
*
*
*
*/
//Legibilidad del documento
document.write("<b>While</b>");
document.write("<br>");

//Variable
let num1 = 0;

//Bucle
while (num1 < 10) {
    num1 = num1 + 1;
    document.write(num1 + "<br>");
}

//Legibilidad del documento
document.write("<br>");
document.write("<b>Do - While</b>");
document.write("<br>");

//Variable
let num2 = 2;

//Bucle
do {
    num2++;
    document.write(num2 + "<br>")

} while (num2 < 10)

/* Break se utiliza para terminar una sentencia en un bucle */
//Legibilidad del documento
document.write("<br>");
document.write("<b>While con break</b>");
document.write("<br>");

//Variable
let num3 = 0;

//Bucle
while (num3 < 100) {
    //Sumamos y escribimos en el documento
    num3 = num3 + 1;
    document.write(num3 + "<br>");

    //Establecemos las condiciones
    if (num3 == 10) {
        document.write("Hemos llegado a 10 !! cuando llegemos a 20 habrá un break.<br>")
    }
    else if( num3 == 20) {
        document.write("Hemos llegado a 20! <br>")
        break; //El while deja de ejecutarse y se fnaliza
    }
}

//Mensaje para saber si salimos del bucle
document.write("Estoy fuera del bucle.");
document.write("<br>");

//Legibilidad del documento
document.write("<br>");
document.write("<b>For y continue</b>");
document.write("<br>");

for (let i = 0; i < 10; i++) {
    if(i == 6) {
        document.write("Damos un saltito. <br>")
        continue;
    }
    document.write("i -> " + i + "<br>");

}

//Legibilidad del documento
document.write("<br>");
document.write("<b>Ejemplo con un array: </b>");
document.write("<br>");

//Array de ejemplo
libros = ["Por qué fracasan los países", "Enquiridion", "El principito", "El principe"];

//Creamos un for que recorra el array y lo muestre por pantalla
for (i = 0; i < libros.length; i++) {
    const element = libros[i];
    document.write(element + "<br>"); //Agregamos un salto de linea para mejorar la legibilidad
}

//Legibilidad del documento
document.write("<br>");
document.write("<b>For in</b>");
document.write("<br>");

//Vamos a crear un array
let animales =["Gato", "Perro", "Tiranosaurio Rex"];

for (const animal in animales) {
    document.write(animal + "<br>");
}

//Legibilidad del documento
document.write("<br>");
document.write("<b>For of</b>");
document.write("<br>");

for (const animal of animales) {
    document.write(animal + "<br>");
}

document.write("<br>");
document.write("<b>For label</b>");
document.write("<br>");

array1 = ["Coque", "Enrique", "Antonio"];
array2 = ["Vicenta", "Marisa", array1, "Concha"];

forComunidad:
for (let array in array2) {
    if(array == 2){
        for (array of array1) {
            document.write(array + "<br>");
            continue forComunidad;
        }
    }else{
        document.write(array2[array] + "<br>");
    }      
}


