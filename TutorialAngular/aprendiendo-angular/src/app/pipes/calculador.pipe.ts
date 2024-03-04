// Para personalizar pipes lo primero tenemos que importar sus librerias
import { Pipe, PipeTransform } from "@angular/core";

// Al decorador le pasamos el nombre del pipe
@Pipe({
        name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform{
    // Este método es obligatorio
    // dato | calculadora: otroDato 
    // param1               param2
    transform(value:any,value_two:any){
        let operaciones = `
            Suma: ${value + value_two} -
            Resta: ${value - value_two} -
            Multiplicación: ${value * value_two} -
            División: ${value / value_two}
        `;

        return operaciones;
    }




}