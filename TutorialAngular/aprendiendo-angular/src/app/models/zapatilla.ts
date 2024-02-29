//Lo llamamos en singular porque va a ser el molde que represente un objeto aunque luego vayamos a darselo a multiples objetos
export class Zapatilla {
    //La mejor manera de hacerlo es así ya que typescript se encarga de hacer los this. automaticamente
    constructor(
        public nombre: string,
        public marca: string,
        public color: string,
        public precio: number,
        public stock: boolean
    ){
    }
}
