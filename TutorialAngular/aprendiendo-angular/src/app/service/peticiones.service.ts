/* Antes de iniciarlo asegurate de importar el HTTPClient en el app.module.ts, sino no va a funcionar */
import { Injectable } from "@angular/core"; // Necesario para poder inyectar los servicios en otras clases
import { HttpClient, HttpHeaders } from "@angular/common/http"; // Nos van a permitrir hacer peticiones AJAX a una web o servidor externo y tb modificar las cabeceras de esas peticiones
import { Observable } from "rxjs"; // Recogemos la info edl api REST cuando haga una peticion

@Injectable() //Decorador
export class PeticionesService{
    public url: string;

    constructor(
        //Tenemos que inyectar nuestro servicio por aqui
        public _http: HttpClient
    ){
        this.url = "https://reqres.in/";
    }

    //Vamos a sacar un usuario de la url
    getUser(userId: number): Observable<any>{
        return this._http.get(this.url+'api/users/' + userId); //Con esto estamos haciendo una peticion AJAX
    }

    //Metodo para añadir un usuario en la api reqres.in
    addUser(user: any): Observable<any> {
        //Vamos a pasarle la peticion AJAX usando POST
        let params = JSON.stringify(user);// Utilizamos JSON.stringify para convertir un objeto de javascript puro a json string (json)
        let headers = new HttpHeaders().set('Content-Type', 'application/json'); //Configuramos las cabeceras y con el .set le decimos la peticion que va a ser(contenido, tipo)

        return this._http.post(this.url + 'api/users', params, {headers: headers}); // Enviamos la peticion por post
    }








}