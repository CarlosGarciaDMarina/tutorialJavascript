/*
*
*   Es un paradigma de la programación que lo que hace es intentar actualizar la forma en la que programamos y permitirnos programar
*   objeto como lo hariamos en la vida real
*   
*   Instanciación
*
*   Clase
*   Objeto
*   Atributo
*   Método
*   Constructor
*
*
*   Características del POO
*   Abstraccion 
*   Modularidad
*   Jerarquía
*
*   Polimorfismo
*   Herencia
*
*   Encapsulamiento
*
*/

class animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }

    verInfo(){
        document.write(this.informacion + "<br>");
    }
}

let perro = new animal("perro", 5, "marron");
let gato = new animal("gato", 2, "negro");
let pajaro = new animal("pajaro", 15, "rojo");

/*
document.write(perro.informacion);
document.write("<br>");
document.write(gato.informacion);
document.write("<br>");
document.write(pajaro.informacion);
document.write("<br>");
*/

perro.verInfo();
gato.verInfo();
pajaro.verInfo();

