import { Component, OnInit } from '@angular/core';
import {Estudiante} from "../../../Estudiante";
import {EstudianteService} from "../../../estudianteService";
import {InternalService} from "../../../internalService";

@Component({
  selector: 'app-datos-cuenta',
  templateUrl: './datos-cuenta.component.html',
  styleUrls: ['./datos-cuenta.component.css']
})
export class DatosCuentaComponent implements OnInit {

  resultadoConsulta: Estudiante[];
  idEstudiante: number;
  constructor(private _estudianteService: EstudianteService,
              private _internalService: InternalService) { }

  ngOnInit() {
    this.obtenerEstudianteDeServicio();
    // console.log('luego de la conexion mi estudiante tiene: ',this.estudianteEscogido);
  }

  obtenerEstudianteDeServicio(){
    this.obtenerIdDeMiEstudiante();
    this._estudianteService.arregloConEstudianteBuscado(
      this.idEstudiante)
      .subscribe(
        res => {
          console.log('estoy en Detalle Estudiante.  El resultado de la consulta es: ',res);
          this.resultadoConsulta = <Estudiante[]>res;
          console.log('ahora mi arreglo de estudiante tiene: ',this.resultadoConsulta);
        }
      )
  }

  obtenerIdDeMiEstudiante(){
    this.idEstudiante = this._internalService.retornarEstudianteEscogido().idEstudiante;
    console.log('en el detalle de mi estudiante, el id que tengo es: '+this.idEstudiante);
  }

}
