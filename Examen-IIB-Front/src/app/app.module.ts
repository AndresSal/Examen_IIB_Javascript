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
import {CarouselModule, DataScrollerModule, InputTextModule} from "primeng/primeng";
import {CardModule} from "primeng/card";
import {MatButtonModule, MatCardModule, MatListModule} from "@angular/material";
import { DetalleEstudianteComponent } from './misComponentes/detalle-estudiante/detalle-estudiante.component';
import { DetalleMateriaComponent } from './misComponentes/detalle-materia/detalle-materia.component';
import {DataViewModule} from "primeng/dataview";
import { VolverInicioComponent } from './misComponentes/AppComponents/volver-inicio/volver-inicio.component';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from "@angular/common/http";
import {GrowlModule} from 'primeng/growl';
import {EstudianteService} from "./estudianteService";
import {MateriaService} from "./materiaService";
import {InternalService} from "./internalService";
import { CabeceraFacturacionComponent } from './misComponentes/CarritoComponents/cabecera-facturacion/cabecera-facturacion.component';
import { DatosCuentaComponent } from './misComponentes/CarritoComponents/datos-cuenta/datos-cuenta.component';
import { MontoTotalComponent } from './misComponentes/CarritoComponents/monto-total/monto-total.component';
import { DescripcionMateriaEscogidaComponent } from './misComponentes/Shared Components/descripcion-materia-escogida/descripcion-materia-escogida.component';
import {OrderListModule} from 'primeng/orderlist';
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
    CargarMasComponent,
    DetalleEstudianteComponent,
    DetalleMateriaComponent,
    VolverInicioComponent,
    CabeceraFacturacionComponent,
    DatosCuentaComponent,
    MontoTotalComponent,
    DescripcionMateriaEscogidaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      RUTAS_APP,
      {
        useHash: true
      }
    ),
    NgbModule.forRoot(),
    ButtonModule,
    InputTextModule,
    CardModule,
    CarouselModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    DataViewModule,
    DataScrollerModule,
    GrowlModule,
    MatListModule,
    DataScrollerModule,
    OrderListModule
  ],
  providers: [
    EstudianteService,
    MateriaService,
    InternalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
