import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './misComponentes/home/home.component';
import { PageNotFoundComponent } from './misComponentes/page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";
import {RUTAS_APP} from "./app.routes";
import { CarritoComponent } from './misComponentes/carrito/carrito.component';
import { StatusCarritoComponent } from './misComponentes/AppComponents/status-carrito/status-carrito.component';
import { PerfilUsuarioComponent } from './misComponentes/AppComponents/perfil-usuario/perfil-usuario.component';
import { BuscadorComponent } from './misComponentes/HomeComponents/buscador/buscador.component';
import { PreviewPadreComponent } from './misComponentes/HomeComponents/preview-padre/preview-padre.component';
import { PreviewHijoComponent } from './misComponentes/HomeComponents/preview-hijo/preview-hijo.component';
import { CargarMasComponent } from './misComponentes/HomeComponents/cargar-mas/cargar-mas.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    CarritoComponent,
    StatusCarritoComponent,
    PerfilUsuarioComponent,
    BuscadorComponent,
    PreviewPadreComponent,
    PreviewHijoComponent,
    CargarMasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      RUTAS_APP,
      {
        useHash: true
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
