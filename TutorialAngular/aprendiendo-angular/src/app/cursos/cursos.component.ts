import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

    public nombre!: string; // el simbolo de exclamacion indica que esta propiedad se inicializará más tarde
    public followers!: number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){ }
  
  ngOnInit(): void {
       this._route.params.subscribe((params: Params) => {
        this.nombre = params['nombre']; // Accedemos a la propiedad con ['nombre'] porque proviene de una firma de indice y asi evitamos errores haciendo el codigo mas robusto
        this.followers = +params['followers']; // El símbolo + indica que el paramtero va a ser tipo number

        /* EJEMPLO DE COMO Redirigir a paginas segun datos del navegador
        if (this.nombre == 'ninguno') {
          this._router.navigate(['/home']);

        }
        */
       });
  }
  redirigir(){
    this._router.navigate(['/zapatillas']);
  }

}
