import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {

    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = "Componente de Videojuegos";
        this.listado = "Listado de los juego mas populares";
        console.log("Se ha cargado el componente de videojuegos con éxito.");
    }

    //Hooks
    //OnInti
    ngOnInit(): void {
      console.log("OnInit ejecutado");
    }

    //DoCheck
    ngDoCheck(){
        console.log("DoCheck ejecutado");
    }
    cambiarTitulo(){
        this.titulo = "Nuevo título del componente";
    }

    //OnDestroy
    ngOnDestroy(){
        console.log("OnDestroy ejecutado");
    }


}