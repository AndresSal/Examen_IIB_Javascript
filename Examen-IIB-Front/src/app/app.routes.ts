import {Routes} from "@angular/router";
import {HomeComponent} from "./misComponentes/home/home.component";
import {PageNotFoundComponent} from "./misComponentes/page-not-found/page-not-found.component";
import {CarritoComponent} from "./misComponentes/carrito/carrito.component";
import {DetalleEstudianteComponent} from "./misComponentes/detalle-estudiante/detalle-estudiante.component";
import {DetalleMateriaComponent} from "./misComponentes/detalle-materia/detalle-materia.component";


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
    path: 'Estudiante/:id',
    component: DetalleEstudianteComponent,
    children: [
      {
        path: 'Materia/:id',
        component: DetalleMateriaComponent
      }
    ]
  },

  {
    path: '**',
    component: PageNotFoundComponent
  }
];
