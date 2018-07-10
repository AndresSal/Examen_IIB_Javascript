import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './misComponentes/home/home.component';
import { PageNotFoundComponent } from './misComponentes/page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";
import {RUTAS_APP} from "./app.routes"
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
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
