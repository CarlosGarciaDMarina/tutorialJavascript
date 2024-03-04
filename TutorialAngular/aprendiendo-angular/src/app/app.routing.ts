// Importar los modulos del router de Angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Importar componentes
import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';


// Array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent}, // Ruta home
    {path: 'home', component: HomeComponent}, // Ruta home
    {path: 'zapatillas', component: ZapatillasComponent}, // Ruta zapatillas
    {path: 'videojuego', component: VideojuegoComponent}, // Ruta videojuegos
    {path: 'cursos', component: CursosComponent}, // Ruta cursos
    {path: 'cursos/:nombre', component: CursosComponent}, // Ruta cursos con opcion a recoger parametos
    {path: 'cursos/:nombre/:followers', component: CursosComponent}, // Ruta cursos con opcion a recoger parametos
    {path: 'externo', component: ExternoComponent},// Ruta externo
    {path: 'contacto', component: ContactoComponent},// Ruta contacto
    {path: '**', component: HomeComponent} // Ruta 404, se define la última de todas porque si no se encuentra ninguno de nuestros componentes, esta va a ser la que cargue
];

// Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
