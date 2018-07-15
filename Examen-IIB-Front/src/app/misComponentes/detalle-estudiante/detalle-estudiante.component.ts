import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Estudiante} from "../../Estudiante";
import {EstudianteService} from "../../estudianteService";
import {InternalService} from "../../internalService";
import {Materia} from "../../Materia";


@Component({
  selector: 'app-detalle-estudiante',
  templateUrl: './detalle-estudiante.component.html',
  styleUrls: ['./detalle-estudiante.component.css']
})
export class DetalleEstudianteComponent implements OnInit, OnChanges {

  myID: number;
  idEstudiante:number;
  listaEstudianteEscogido: Estudiante[];


  constructor(private _estudianteService:EstudianteService,
              private _internalService:InternalService) {
    this.myID = 2;
  }

  ngOnInit() {
    this._internalService.cargarIDComponentePadre(this.myID);
    this.obtenerEstudianteEscogido();
  }

  ngOnChanges(cambio) {
    console.log('algo paso ',cambio);
  }


  obtenerEstudianteEscogido(){
    this.obtenerIdDeMiEstudiante();
    this._estudianteService.arregloConEstudianteBuscado(
      this.idEstudiante)
      .subscribe(
        res => {
          console.log('estoy en Detalle Estudiante.  El resultado de la consulta es: ',res);
          this.listaEstudianteEscogido = <Estudiante[]>res;
          console.log('ahora mi arreglo de estudiante tiene: ',this.listaEstudianteEscogido);
        }
      )
  }


  obtenerIdDeMiEstudiante(){
    this.idEstudiante = this._internalService.retornarEstudianteEscogido().idEstudiante;
    console.log('en el detalle de mi estudiante, el id que tengo es: '+this.idEstudiante);
  }




}
