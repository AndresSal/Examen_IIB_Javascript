import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/primeng";

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
    BrowserAnimationsModule,
    RouterModule.forRoot(
      RUTAS_APP,
      {
        useHash: true
      }
    ),
    NgbModule.forRoot(),
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
