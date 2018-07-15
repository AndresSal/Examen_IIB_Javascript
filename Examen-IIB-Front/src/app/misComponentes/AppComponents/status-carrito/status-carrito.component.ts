import {Component, OnChanges, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EstudianteService} from "../../../estudianteService";
import {InternalService} from "../../../internalService";
import {Estudiante} from "../../../Estudiante";

@Component({
  selector: 'app-status-carrito',
  templateUrl: './status-carrito.component.html',
  styleUrls: ['./status-carrito.component.css']
})
export class StatusCarritoComponent implements OnInit, OnChanges {

  resultado:Estudiante[];
  // numItems:number = 0;
  idEstudiante = 1;
  constructor(private _router: Router,
              private _estudianteService: EstudianteService,
              private _internalService: InternalService) { }

  obtenerNumeroItems(){
    this.idEstudiante = this._internalService.retornarEstudianteEscogido().idEstudiante;
    this._estudianteService.arregloConEstudianteBuscado(this.idEstudiante)
      .subscribe(
        res=> {
          this.resultado= <Estudiante[]>res;
        }
      )
  }

  obtenerAlEstudiante(id:number){
    this._estudianteService.arregloConEstudianteBuscado(id)
      .subscribe(
        res=> {
          this.resultado= <Estudiante[]>res;
        }
      )
  }

  irAlCarrito(){
    const url = ['/Carrito'];
    this._router.navigate(url);
  }
  ngOnInit() {
  //this.obtenerAlEstudiante(this.idEstudiante);
  }

  ngOnChanges(){
    this.obtenerNumeroItems();
  }

}
