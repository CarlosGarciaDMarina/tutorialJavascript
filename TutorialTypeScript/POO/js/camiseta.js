var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tienda;
(function (Tienda) {
    //Para poder utilizar estas clases fuera del modulo hay que utilizar la palabra reservada export
    var Ropa = /** @class */ (function () {
        function Ropa(titulo) {
            this.titulo = titulo;
            console.log(titulo);
        }
        return Ropa;
    }());
    Tienda.Ropa = Ropa;
    var Zapateria = /** @class */ (function () {
        function Zapateria(titulo) {
            this.titulo = titulo;
            console.log('Tienda de Zapatos' + titulo);
        }
        return Zapateria;
    }());
    Tienda.Zapateria = Zapateria;
})(Tienda || (Tienda = {}));
var Zapateria = Tienda.Zapateria;
var cargar_zapateria = new Zapateria(' La zapateria');
// Decorador - sirve para adicionar una funcionalidad extra a cualquier clase
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de: " + logo);
        };
    };
}
// CLases (Molde del objeto)
// export . sirve para poder exportar esta clase a cualquier archivo
/*@estampar('Gucci Gang')*/
/* export */ var Camiseta = /** @class */ (function () {
    // Métodos (Funciones o acciones del objeto)
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
//Clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var camiseta = new Camiseta("sdasd", "sdasd", "sdasd", "sdasd", 12);
camiseta.estampacion();
console.log(camiseta);
var sudadera_nike = new Sudadera("Rojo", "Manga larga", "Nike", "L", 30);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Azul");
console.log(sudadera_nike);
