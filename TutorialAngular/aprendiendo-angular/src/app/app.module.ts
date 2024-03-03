import { NgModule } from '@angular/core'; // Importa el decorador NgModule para definir un módulo de Angular
import { BrowserModule, provideClientHydration } from '@angular/platform-browser'; // Importa el módulo BrowserModule para funcionalidades básicas del navegador y provideClientHydration para la hidratación del cliente
import { FormsModule } from '@angular/forms'; // Importa el módulo FormsModule para trabajar con formularios en Angular
import { routing, appRoutingProviders } from './app.routing'; // Importa las rutas definidas en app.routing
import { HttpClientModule } from '@angular/common/http'; // Necesario para trabajar con peticiones AJAX

import { AppRoutingModule } from './app-routing.module'; // Importa el módulo de enrutamiento principal
import { AppComponent } from './app.component';// Importa el componente raíz de la aplicación
import { VideojuegoComponent } from './videojuego/videojuego.component'; // Importa el componente VideojuegoComponent
import { ZapatillasComponent } from './zapatillas/zapatillas.component'; // Importa el componente ZapatillasComponent
import { CursosComponent } from './cursos/cursos.component'; // Importa el componente CursosComponent
import { HomeComponent } from './home/home.component'; // Importa el componente HomeComponent
import { ExternoComponent } from './externo/externo.component'; // Importa el componente ExternoComponent

@NgModule({
  declarations: [
    AppComponent, // Componente principal de la aplicación
    VideojuegoComponent, // Componente para la sección de videojuegos
    ZapatillasComponent, // Componente para la sección de zapatillas
    CursosComponent, // Componente para la sección de cursos
    HomeComponent, // Componente para la página de inicio
    ExternoComponent // Componente externo
  ],
  imports: [
    BrowserModule, // Proporciona funcionalidades básicas del navegador
    AppRoutingModule, // Módulo de enrutamiento principal
    routing, //Define las rutas de la aplicación
    FormsModule, // Permite la vinculación de datos en formularios
    HttpClientModule // Permite realizar solicitudes HTTP
  ],
  providers: [
    provideClientHydration(),
    appRoutingProviders // Proveedor para la configuración de las rutas de la aplicación
  ],
  bootstrap: [AppComponent] // Componente raíz de la aplicación
})
export class AppModule { }
