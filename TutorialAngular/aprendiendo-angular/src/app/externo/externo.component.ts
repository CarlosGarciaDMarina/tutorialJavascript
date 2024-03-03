import { Component } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service'; // Importamos los servicios que hemos creado para poder utilizarlo aqui

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrl: './externo.component.css',
  providers: [PeticionesService] //Para que funcione la peticion del servicio debemos cargarlos en el array
})
export class ExternoComponent {

  public user: any;
  public userId: any;

  constructor(
    private _peticionesService: PeticionesService
  ){
    // Establecemos que la id del usuario sea 1 por defecto
    this.userId =1;
  }

  ngOnInit(){
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


}
