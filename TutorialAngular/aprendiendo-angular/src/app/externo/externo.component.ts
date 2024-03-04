import { Component } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service'; // Importamos los servicios que hemos creado para poder utilizarlo aqui
import { response } from 'express';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrl: './externo.component.css',
  providers: [PeticionesService] //Para que funcione la peticion del servicio debemos cargarlos en el array
})
export class ExternoComponent {

  public user: any;
  public userId: any;
  public fecha:any;

  public new_user: any; //Peticion AJAX a reqres.in
  public usuario_guardado:any; //Mostrar por la web

  constructor(
    private _peticionesService: PeticionesService
  ){
    // Establecemos que la id del usuario sea 1 por defecto
    this.userId =1;
    //Establecemos el json como lo pide la api 
    this.new_user = {"name": "","job": ""};
  }

  ngOnInit(){
    //Pipe para fecha
    this.fecha = new Date();

    // Llamamos al metodo por default
    this.cargaUsuario();
  }

  cargaUsuario(){
    // El metodo Observable que utilizamos en peticiones.component.ts siempre nos permite usar el subscribe
    this._peticionesService.getUser(this.userId).subscribe(
      // Recogemos el resultado
      result =>{
        this.user = result.data; // Dentro de data esta el objeto
      }, 
      // Recogemos el error
      error => {
        console.log(<any> error);
      }
    );
  }

  onSubmit(form:any){
    //Llamamos al servicio de peticiones
    this._peticionesService.addUser(this.new_user).subscribe(
      response => {
        //Mostramos la respuesta
        console.log(response);
        this.usuario_guardado = response;
        //Vaciamos el form
        form.reset();
      }, error => {
        //Mostramos el error
        console.log(<any> error);
      }
    );
  }


}
