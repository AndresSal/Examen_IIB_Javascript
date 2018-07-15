import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Estudiante} from "../../Estudiante";
import {EstudianteService} from "../../estudianteService";
import {InternalService} from "../../internalService";


@Component({
  selector: 'app-detalle-estudiante',
  templateUrl: './detalle-estudiante.component.html',
  styleUrls: ['./detalle-estudiante.component.css']
})
export class DetalleEstudianteComponent implements OnInit, OnChanges {

  idEstudiante:number;
  @Input() estudianteEscogido: Estudiante;
  myID: number;
  constructor(private _estudianteService:EstudianteService,
              private _internalService:InternalService) {
    this.myID = 2;
  }

  ngOnInit() {
    this._internalService.cargarIDComponentePadre(this.myID);
    this.obtenerMiEstudianteEscogido();
    console.log('luego de la conexion mi estudiante tiene: ',this.estudianteEscogido);
  }

  ngOnChanges(cambio) {
    console.log('algo paso ',cambio);
    this.obtenerMiEstudianteEscogido();
  }

  obtenerIdDeMiEstudiante(){
    this.idEstudiante = this._internalService.retornarEstudianteEscogido().idEstudiante;
    console.log('en el detalle de mi estudiante, el id que tengo es: '+this.idEstudiante);
  }


  obtenerMiEstudianteEscogido(){
    this.obtenerIdDeMiEstudiante();
    this._estudianteService.consultarEstudianteEspecifico(this.idEstudiante)
      // .subscribe(res=>this.estudianteEscogido=res)
      .subscribe(
        res => {
          console.log('el servidor me envió lo siguiente: ',res);
          this.estudianteEscogido = <Estudiante> res;
          console.log('ahora tengo al estudiante: ',this.estudianteEscogido);
          return this.estudianteEscogido;
        }
      )
  }



}
