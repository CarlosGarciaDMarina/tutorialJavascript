/* POO */
// Interfaz
interface CamisetaBase{
    setColor(color: string):void;
    getColor():string;
}

module Tienda {
    //Para poder utilizar estas clases fuera del modulo hay que utilizar la palabra reservada export
    export class Ropa{
        constructor(public titulo: string){
            console.log(titulo);
        }
    }

    export class Zapateria{
        constructor(public titulo: string){
            console.log('Tienda de Zapatos' + titulo);
        }
    }

}

import Zapateria = Tienda.Zapateria;

let cargar_zapateria = new Zapateria(' La zapateria');



// Decorador - sirve para adicionar una funcionalidad extra a cualquier clase
function estampar(logo:string) {
    return function(target: any) {
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de: " + logo);
        }
    }
}

// CLases (Molde del objeto)
// export . sirve para poder exportar esta clase a cualquier archivo
/*@estampar('Gucci Gang')*/
/* export */ class Camiseta implements CamisetaBase { 

    // Propiedades (Caracteristicas del objeto)
    public color: string;
    public modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;

    // Métodos (Funciones o acciones del objeto)
    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color) {
        this.color = color;
    }

    public getColor(){
        return this.color;
    }

}

//Clase hija
class Sudadera extends Camiseta {
    public capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }

    getCapucha():boolean{
        return this.capucha;
    }
}

var camiseta = new Camiseta("sdasd", "sdasd", "sdasd", "sdasd", 12);
(camiseta as any).estampacion();
console.log(camiseta);

var sudadera_nike = new Sudadera("Rojo", "Manga larga", "Nike", "L", 30);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Azul");

console.log(sudadera_nike);
