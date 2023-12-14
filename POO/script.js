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
*
*   Un metodo estatico (static) es un metodo que no necesita que la clase se defina para poder ser creado
*
*/

class animal {
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

class perro extends animal {
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = null;
    }
    ladrar(){
        document.write("Bau Baaaaaau ! <br>");
    }

    get getRaza(){
        return this.raza;
    }

    set setRaza(raza){
        this.raza = raza;
    }
}


const fuwa = new perro("perro", 5, "marron", "doberman");
const gato = new animal("gato", 2, "negro");
const pajaro = new animal("pajaro", 15, "rojo");

fuwa.verInfo();
fuwa.ladrar();
gato.verInfo();
pajaro.verInfo();

document.write("<br>");

class telefono {
    constructor(marca, color, peso, resolucion, camara, ram){
        this.marca = marca;
        this.color = color;
        this.peso = peso;
        this.resolucion = resolucion;
        this.camara = camara;
        this.ram = ram;
        this.encendido = false;

    }

    encender() {
        if (this.encendido == false) {
            document.write(`El telefono de la marca ${this.marca} se acaba de encender. <br>`);
            this.encendido = true;

        } else {
            document.write(`El telefono de la marca ${this.marca} ya esta encendido. <br>`);

        }
    }

    apagar() {
        if (this.encendido == true) {
            document.write(`El telefono de la marca ${this.marca} se acaba de apagar. <br>`);
            this.encendido = false;
            
        } else {
            document.write(`El telefono de la marca ${this.marca} ya esta apagado, enciendelo si quieres usarlo. <br>`);

        }
    }

    reiniciar() {
        if (this.encendido == true) {
            document.write(`El telefono de la marca ${this.marca} se este reiniciando. <br>`)
            
        } else {
            document.write(`El telefono de la marca ${this.marca} esta apagado y no se puede reiniciar. <br>`);

        }
    }

    tomarFoto() {
        if (this.encendido == true) {
            document.write(`¡Click! <br>`);
            
        } else {
            document.write(`El telefono de la marca ${this.marca} esta apagado y no puede hacer fotos. <br>`);

        }
    }

    grabar() {
        if (this.encendido == true) {
            document.write(`yiiiiiiih *grabando* <br>`);
            
        } else {
            document.write(`El telefono de la marca ${this.marca} esta apagado y no puede hacer grabar. <br>`);

        }
    }

    info() {
        document.write(`El telefono de la marca ${this.marca} es de color ${this.color}, pesa ${this.peso}gr, la cámara es ${this.camara} y 
                        tiene una resolucion de ${this.resolucion}mpx y, por último, tiene ${this.ram}GB de RAM.<br><br>`);
    }

}


class altaGama extends telefono {
    constructor(marca, color, peso, resolucion, camara, ram, camaraExtra){
        super(marca, color, peso, resolucion, camara, ram);
        this.encendido = false;
        this.camaraExtra = camaraExtra;
    }

    camaraSuperLenta(){
        if (this.encendido == true) {
            document.write(`yiiiiiiihhhh *grabando a camara super lenta* <br>`);
            
        } else {
            document.write(`El telefono de la marca ${this.marca} esta apagado y no puede hacer grabar. <br>`);

        }
    }

    reconocimientoFacial() {
        if (this.encendido == true) {
            document.write(`yiiiiiiih *Analizando la cara* <br>`);
            document.write(`Has pasado el check.`)
            
        } else {
            document.write(`El telefono de la marca ${this.marca} esta apagado y no puede hacer el reconomiento facil. <br>`);

        }
    }

    info() {
        document.write(`El telefono de la marca ${this.marca} es de color ${this.color}, pesa ${this.peso}gr, la cámara es ${this.camara} y 
                        tiene una resolucion de ${this.resolucion}mpx y, por último, tiene ${this.ram}GB de RAM y su 2ª camara es 
                        ${this.camaraExtra}.<br><br>`);
    }

}



const neoGT3 = new telefono("realme", "amarillo", 250, 900, "HD", 16);
const maxPro15 = new altaGama("iphone", "gris", 150, 1900, "4K", 32, "Full HD");
const galaxyS23 = new telefono("samsung", "azul", 100, 1300, "Full HD", 32);

neoGT3.info();
maxPro15.info();
galaxyS23.info();

neoGT3.apagar();
neoGT3.encender();

neoGT3.reiniciar();
neoGT3.tomarFoto();
neoGT3.grabar();

maxPro15.info();