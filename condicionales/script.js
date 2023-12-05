/*
*   *** Condicionales ***
*
*   Un condicional es una senterncia que nos permite validar algo
*
*
*
*
*
*/

let nombre = "Antonio";

if(nombre == "Antonio") {
    alert("Mi nombre es Antonio Recio, mayorista no limpio pescado.");
} 
else if(nombre == "Enrique"){
    alert("Mi nombre es Enrique Pastor, concejal de juventud y tiempo libre.");
}
else{
    alert("Ah! Que eres cualquier otro vecino de Mirador de Montepinar.");
}

document.write("<br>")

/* Ejercicio práctico
*
*   3 personas entran en una heladeria a comprar un helado, los precios no estan al lado del estante de cada helado.
*   Ellos quieren comprar el helado mmás caro que puedan con el dinero que tienen.
*   
*   Antonio tiene ------------->  1.5€
*   Enrique tiene ------------->  2.6€
*   Coque tiene --------------->  3.25€
*
*   Los precios de los helados son los siguientes:
*
*   Helado de agua ------------>  0.5€
*   Helado de crema ----------->  1€
*   Helado de chocolate ------->  1.7€
*   Helado de fresa ----------->  1.6€
*   Helado de limon ----------->  1.9€
*   Sandwich helado maxibone -->  2.3€
*   Corneto de lima y limon --->  2.5€
*
*   Crear las siguientes soluciones:
*   - Pedirles que ingresen el monto que tienen y mostrar el helado más caro.
*   - Si hay 2 o mas helados con el mismo precio mostrar ambos.
*   - Antonio quiere saber cuanto dinero le sobra despues de comprar
*
*/

let dineroAntonio = prompt("¿Cuánto dinero tiene Antonio?");
let antonio = dineroAntonio;
let dineroEnrique = prompt("¿Cuánto dinero tiene Enrique?");
let enrique = dineroEnrique;
let dineroCoque = prompt("¿Cuánto dinero tiene Coque?");
let coque = dineroCoque;

document.write("<h1> Lista de precios </h1>");
document.write("<p>Helado de agua ------------>  0.5€</p>");
document.write("<p>Helado de crema ----------->  1€</p>");
document.write("<p>Helado de chocolate ------->  1.7€</p>");
document.write("<p>Helado de fresa ----------->  1.6€</p>");
document.write("<p>Helado de limon ----------->  1.9€</p>");
document.write("<p>Sandwich helado maxibone -->  2.3€</p>");
document.write("<p>Corneto de lima y limon --->  2.5€</p>");

let heladoAgua = 0.5;
let heladoCrema = 1;
let heladoChocolate = 1.7;
let heladoFresa = 1.6;
let heladoLimon = 1.9;
let sandwichHelado = 2.3;
let cornetoLimon = 2.5;
let resultado = 0;
let calcularVueltas = 0;

alert("El helado mas caro que tenemos es el corneto de lima y limon que vale  " + cornetoLimon + "€");

// Apartado de Antonio
if (dineroAntonio >= cornetoLimon) {
    alert("Puedes comprarte cualquier helado");
    let respuestaAntonio = prompt("Escribe el precio del helado que quieras");
    calcularVueltas = respuestaAntonio;
    // Este proceso solo lo haré en el primer paso porque ir añadiendolo a todos los casos sería demasiado tedioso
    // Y tengo que continuar con el tutorial
    if (respuestaAntonio == calcularVueltas) {
        resultado = dineroAntonio - calcularVueltas;

        if (calcularVueltas == 2.3) {
            alert("Aquí tienes el sandwich helado, las vueltas son " + resultado +"€.")

        }

    } else {
        alert("Te has equivocado con el precio del helado.")
    }
} 
else if (dineroAntonio >= sandwichHelado) {
    alert("Puedes comprarte cualquier helado menos el corneto de limón");
    resultado = dineroAntonio - cornetoLimon;
    alert("Las vueltas de la compra son " + resultado + "€.");
} 
else if (dineroAntonio >= heladoLimon) {
    alert("Puedes comprarte cualquier helado menos el corneto de limón y el sandwich helado.");
    resultado = dineroAntonio - cornetoLimon;
    alert("Las vueltas de la compra son " + resultado + "€.");
}  
else if (dineroAntonio >= heladoFresa) {
    alert("Puedes comprarte el helado de agua ó el de crema ó el de chocolate ó el helado de fresa.");
    resultado = dineroAntonio - cornetoLimon;
    alert("Las vueltas de la compra son " + resultado + "€.");
} 
else if (dineroAntonio <= heladoChocolate) {
    alert("Puedes comprarte el helado de agua ó el de crema ó el de chocolate.");
    resultado = dineroAntonio - cornetoLimon;
    alert("Las vueltas de la compra son " + resultado + "€.");
}
else if (dineroAntonio <= heladoCrema) {
    alert("Puedes comprarte el helado de agua ó el de crema.");
    resultado = dineroAntonio - heladoCrema;
    alert("Las vueltas de la compra son " + resultado + "€.");
} 
else if (dineroAntonio <= heladoAgua) {
    alert("Puedes comprarte el helado de agua.");
    resultado = dineroAntonio - heladoAgua;
    alert("Las vueltas de la compra son " + resultado + "€.");
}  
else {
    alert("No puedes comprarte el corneto de limón.")
}


// Apartado de Enrique
if (dineroEnrique >= cornetoLimon) {
    alert("Enrique, puedes comprarte cualquier helado");
    resultado = dineroEnrique - cornetoLimon;
    alert("Enrique, las vueltas de la compra son " + resultado + "€.");
} 
else if (dineroEnrique <= sandwichHelado) {
    alert("Enrique, puedes comprarte cualquier helado menos el corneto de limón");
    resultado = dineroEnrique - cornetoLimon;
    alert("Enrique, las vueltas de la compra son " + resultado + "€.");
} 
else if (dineroEnrique <= heladoLimon) {
    alert("Enrique, puedes comprarte cualquier helado menos el corneto de limón y el sandwich helado.");
    resultado = dineroEnrique - cornetoLimon;
    alert("Enrique, las vueltas de la compra son " + resultado + "€.");
}  
else if (dineroEnrique <= heladoFresa) {
    alert("Enrique, puedes comprarte el helado de agua ó el de crema ó el de chocolate ó el helado de fresa.");
    resultado = dineroEnrique - cornetoLimon;
    alert("Enrique, las vueltas de la compra son " + resultado + "€.");
} 
else if (dineroEnrique <= heladoChocolate) {
    alert("Enrique, puedes comprarte el helado de agua ó el de crema ó el de chocolate.");
    resultado = dineroEnrique - cornetoLimon;
    alert("Enrique, las vueltas de la compra son " + resultado + "€.");
}
else if (dineroEnrique <= heladoCrema) {
    alert("Enrique, puedes comprarte el helado de agua ó el de crema.");
    resultado = dineroEnrique - heladoCrema;
    alert("Enrique, las vueltas de la compra son " + resultado + "€.");
} 
else if (dineroEnrique <= heladoAgua) {
    alert("Enrique, puedes comprarte el helado de agua.");
    resultado = dineroEnrique - heladoAgua;
    alert("Enrique, las vueltas de la compra son " + resultado + "€.");
}  
else {
    alert("Enrique, no puedes comprarte ningún helado.")
}

// Apartado de Coque
if (dineroCoque >= cornetoLimon) {
    alert("Coque, puedes comprarte cualquier helado");
    resultado = dineroCoque - cornetoLimon;
    alert("Coque, las vueltas de la compra son " + resultado + "€.");
} 
else if (dineroCoque <= sandwichHelado) {
    alert("Coque, puedes comprarte cualquier helado menos el corneto de limón");
    resultado = dineroCoque - cornetoLimon;
    alert("Coque, las vueltas de la compra son " + resultado + "€.");
} 
else if (dineroCoque <= heladoLimon) {
    alert("Coque, puedes comprarte cualquier helado menos el corneto de limón y el sandwich helado.");
    resultado = dineroCoque - cornetoLimon;
    alert("Coque, las vueltas de la compra son " + resultado + "€.");
}  
else if (dineroCoque <= heladoFresa) {
    alert("Coque, puedes comprarte el helado de agua ó el de crema ó el de chocolate ó el helado de fresa.");
    resultado = dineroCoque - cornetoLimon;
    alert("Coque, las vueltas de la compra son " + resultado + "€.");
} 
else if (dineroCoque <= heladoChocolate) {
    alert("Coque, puedes comprarte el helado de agua ó el de crema ó el de chocolate.");
    resultado = dineroCoque - cornetoLimon;
    alert("Coque, las vueltas de la compra son " + resultado + "€.");
}
else if (dineroCoque <= heladoCrema) {
    alert("Coque, puedes comprarte el helado de agua ó el de crema.");
    resultado = dineroCoque - heladoCrema;
    alert("Coque, las vueltas de la compra son " + resultado + "€.");
} 
else if (dineroCoque <= heladoAgua) {
    alert("Coque, puedes comprarte el helado de agua.");
    resultado = dineroCoque - heladoAgua;
    alert("Coque, las vueltas de la compra son " + resultado + "€.");
}  
else {
    alert("Coque, no puedes comprarte ningún helado");
}