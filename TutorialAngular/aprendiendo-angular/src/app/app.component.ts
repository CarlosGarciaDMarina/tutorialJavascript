import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title = 'aprendiendo-angular';
  public mostrar_videojuegos: boolean = true;
  public descripcion: string;
  public color: string;
  public config;

  constructor(){
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
    this.color = Configuracion.color;
    this.config = Configuracion;

  }


  ocultarVideojuegos(value: boolean){
    this.mostrar_videojuegos = value;
  }

}
