import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillaService {
    public zapatillas: Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla('Reebook Classic', 'Reebook', 'Blanco', 80, true),
            new Zapatilla('Reebook Spartan', 'Reebook', 'Gris', 145, false),
            new Zapatilla('Nike Airmax', 'Nike', 'Rojas', 190, true),
            new Zapatilla('Nike Runner MD', 'Nike', 'Negras', 70, true),
            new Zapatilla('Adidas Yezzy', 'Adidas', 'Gris', 180, false)
        ];
    }

    getTexto(){
        return "Hola mundo desde un servicio";
    }

    //al get podemos indicarle lo que va a devolver con los :
    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
}