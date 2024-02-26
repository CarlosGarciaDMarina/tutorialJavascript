//En las funciones de TS podemos decir que tipo de dato tiene la variable que le pasamos y quew tipo de dato nos va a devolver la funcion
function getNumero(numero) {
    if (numero === void 0) { numero = 12; }
    return "El numero es: " + numero;
}
console.log(getNumero());
