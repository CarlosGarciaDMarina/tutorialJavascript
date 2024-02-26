// Crear un tipado
type alfanumerico = string | number;

// String
let cadena: string = "Carlosdemadev.es";

// Number
let edad: number = 12;

// Boolean
let verd_fals: boolean = true;

// Any
let cualquierDato: any = "Hola";

// Arrays
// var lenguajes: Array<string> = ["PHP", "JS","TS"];
// var lenguajes: Array<number> = [12, 23,65];
var lenguajes: Array<any> = ["PHP", "JS", 34];

let years: number[] = [12, 13, 14];
let years2: any[] = [12, 13, 14, "15"];

// Tuberias
let cadena2: string | number = "Carlosdemadev.es";

cadena2 = 12;

console.log(cadena, edad, verd_fals, cualquierDato, lenguajes, years, years2);