/*  
    var = se utiliza para que una variable tenga efecto global
    let = se utiliza para que una variable tenga efecto en un lugar determinado
    const = se utiliza para que una variable tenga siempre el mismo valor, las definimos una vez y ya no se puede definir nunca mas
*/

var string = "Cadenas de texto"
let numero = 27;
const pi = 3.1415;

let numero1, numero2, numero3;
numero1 = 23;
numero2 = 39;
numero3 = 42;

let patata = null;

// Ejemplo para el Nan
// alert(numero * string);

/*  
                    *** T I P O S ** D E ** E R R O R E S ***
    undefined = la variable existe pero no tiene ningun valor definido
    Null = la variable existe pero su valor es null
    Nan (Not a number) = Es porque estas intentando hacer una operacion que no puede realizarse
*/

/* 
    Uso del prompt
    Muestra un mensaje en el que nos pide que escribamos algo, ese algo se almacenará en una variable
*/

let nombre = prompt("Dime tu nombre: ");

alert("Hola " + nombre);
