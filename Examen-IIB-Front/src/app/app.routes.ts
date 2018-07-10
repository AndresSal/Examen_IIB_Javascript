import {Routes} from "@angular/router";
import {HomeComponent} from "./misComponentes/home/home.component";
import {PageNotFoundComponent} from "./misComponentes/page-not-found/page-not-found.component";
import {CarritoComponent} from "./misComponentes/carrito/carrito.component";


export const RUTAS_APP: Routes = [
  {
    path: 'Home',
    component: HomeComponent
  },

  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  {
    path: 'Carrito',
    component: CarritoComponent
  },

  {
    path: '**',
    component: PageNotFoundComponent
  }
];
