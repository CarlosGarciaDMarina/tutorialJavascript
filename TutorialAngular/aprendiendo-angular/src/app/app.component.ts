import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title = 'aprendiendo-angular';
  public mostrar_videojuegos: boolean = true;

  ocultarVideojuegos(value: boolean){
    this.mostrar_videojuegos = value;
  }

}
