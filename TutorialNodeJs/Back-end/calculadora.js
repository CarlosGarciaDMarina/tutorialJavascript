'use strict'

// Para recoger los parametros que le pasamos por la consola de comandos utilizaremos:
var params = process.argv.slice(2);

var num1 = parseFloat(params[0]);
var num2 = parseFloat(params[1]);

var plantilla = `
    La suma es: ${num1 + num2}
    La resta es: ${num1 - num2}
    La multiplicacion es: ${num1 *num2}
    La division es: ${num1 / num2}
`;


console.log(plantilla);