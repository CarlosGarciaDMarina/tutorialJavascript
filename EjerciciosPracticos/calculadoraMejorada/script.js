/*
*   Crear una calculadora que, ademas de calcular las operaciones básicas de suma, resta,
*    multiplicación y división, tambien calcule potencias, raices cuadradas y cúbicas
*
*/

class Calculadora {

    //Funciones de la calculadora
    suma(num1, num2) {
        //Transformamos a int los datos
        num1 = parseInt(num1);
        num2 = parseInt(num2);

        //Creamos la variable y los sumamos
        let resultado = num1 + num2;

        //Devolvemos el resultado
        return resultado;
    }

    //Funciones de la calculadora
    resta(num1, num2) {
        //Transformamos a int los datos
        num1 = parseInt(num1);
        num2 = parseInt(num2);

        //Creamos la variable y los restamos
        let resultado = num1 - num2;

        //Devolvemos el resultado
        return resultado;
    }

    //Funciones de la calculadora
    multiplicar(num1, num2) {
        //Transformamos a int los datos
        num1 = parseInt(num1);
        num2 = parseInt(num2);

        //Creamos la variable y los multiplicamos
        let resultado = num1 * num2;

        //Devolvemos el resultado
        return resultado;
    }

    //Funciones de la calculadora
    dividir(num1, num2) {
        //Transformamos a int los datos
        num1 = parseInt(num1);
        num2 = parseInt(num2);

        //Creamos la variable y los dividimos
        let resultado = num1 / num2;

        //Devolvemos el resultado
        return resultado;
    }

    //Funciones de la calculadora
    potencia(num, exp) {
        //Devolvemos el resultado
        return num ** exp;
    }

    //Funciones de la calculadora
    raizCua(num1) {
        //Devolvemos el resultado
        return Math.sqrt(num1);
    }

    //Funciones de la calculadora
    raizCub(num1) {
        //Devolvemos el resultado
        return Math.cbrt(num1);
    }
    


}

const calculadora = new Calculadora()


//Preguntamos al usuario que funcion quiere realizar
let operacion = prompt("¿Que operacion deseas realizar? (1 = Sumar - 2 = Restar - 3 = Multiplicar - 4 = Dividir - 5 = Potencias - 6 = Raíz cuadrada - 7 = Raíz cúbica)")

//Creamos las condiciones del programa para que, segun lo que haya escrito el usuario, realice una funcion u otra
if (operacion == 1) {
    //Pedimos los numeros al usuario
    num1 = prompt("Dame el primer numero");
    num2 = prompt("Dame el segundo numero");

    //Mostramos el resultado por pantalla
    document.write("El resultado de sumar los números " + num1 + " y " + num2 + " es: " + calculadora.suma(num1,num2));

}
else if (operacion == 2){
    //Pedimos los numeros al usuario
    num1 = prompt("Dame el primer numero");
    num2 = prompt("Dame el segundo numero");

    //Mostramos el resultado por pantalla
    document.write("El resultado de restar los números " + num1 + " y " + num2 + " es: " + calculadora.resta(num1,num2));
}
else if (operacion == 3){
    //Pedimos los numeros al usuario
    num1 = prompt("Dame el primer numero");
    num2 = prompt("Dame el segundo numero");
    
    //Mostramos el resultado por pantalla
    document.write("El resultado de multiplicar los números " + num1 + " y " + num2 + " es: " + calculadora.multiplicar(num1,num2));
}
else if (operacion == 4){
    //Pedimos los numeros al usuario
    num1 = prompt("Dame el primer numero");
    num2 = prompt("Dame el segundo numero");
    
    //Mostramos el resultado por pantalla
    document.write("El resultado de dividir los números " + num1 + " y " + num2 + " es: " + calculadora.dividir(num1,num2));
}
else if (operacion == 5){
    //Pedimos los numeros al usuario
    num1 = prompt("Dame el numero que quieres potenciar");
    num2 = prompt("Dame el exponente");
    
    //Mostramos el resultado por pantalla
    document.write("El resultado de potenciar el número " + num1 + " al exponente " + num2 + " es: " + calculadora.potencia(num1,num2));
}
else if (operacion == 6){
    //Pedimos los numeros al usuario
    num1 = prompt("Dame el numero");
    
    //Mostramos el resultado por pantalla
    document.write("El resultado de la raiz cuadrada del número " + num1  + " es: " + calculadora.raizCua(num1));
}
else if (operacion == 7){
    //Pedimos los numeros al usuario
    num1 = prompt("Dame el numero");
    
    //Mostramos el resultado por pantalla
    document.write("El resultado de la raiz cúbica del número " + num1  + " es: " + calculadora.raizCub(num1));
}
else{
    alert("Ha ocurrido un error el programa debe cerrarse.")
}



