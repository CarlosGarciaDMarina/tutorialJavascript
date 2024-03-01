import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit {

    public titulo: string = "Componente de Zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: string;
    public mi_marca: string;

    constructor(){
        this.mi_marca = "Fila";
        this.color = 'yellow';
        this.marcas = new Array;
        this.zapatillas = [
            new Zapatilla('Reebook Classic', 'Reebook', 'Blanco', 80, true),
            new Zapatilla('Reebook Spartan', 'Reebook', 'Gris', 145, false),
            new Zapatilla('Nike Airmax', 'Nike', 'Rojas', 190, true),
            new Zapatilla('Nike Runner MD', 'Nike', 'Negras', 70, true),
            new Zapatilla('Adidas Yezzy', 'Adidas', 'Gris', 180, false)
        ]
    }

    ngOnInit(): void {
        console.log(this.zapatillas);
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) =>{
            if(this.marcas.indexOf(zapatilla.marca) < 0){
                this.marcas.push(zapatilla.marca);

            }
        });

        console.log(this.marcas);
    }

    getMarca(){
        alert(this.mi_marca);
    }

    addMarca(){
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(index:number){
        // delete this.marcas[index]; //Sirve para borrar, lo vuelve undefined
        this.marcas.splice(index,1); //Le pasamos el indice que queremos borrar y, a partir de ahí, cuantos elems quieres borrar
    }

    onBlur(){
        console.log("Has salido del input.");
    }

    mostrarPalabra(){
        alert("Has utilizado las teclas para escribir lo siguiente: " + this.mi_marca);
    }

}