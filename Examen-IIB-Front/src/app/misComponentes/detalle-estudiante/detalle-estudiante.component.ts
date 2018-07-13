import {Component, Input, OnInit} from '@angular/core';
import {Estudiante} from "../../Estudiante";
import {EstudianteService} from "../../estudianteService";
import {InternalService} from "../../internalService";

@Component({
  selector: 'app-detalle-estudiante',
  templateUrl: './detalle-estudiante.component.html',
  styleUrls: ['./detalle-estudiante.component.css']
})
export class DetalleEstudianteComponent implements OnInit {

  idEstudiante:number;
  estudianteArray : Estudiante[];
  estudianteEscogido: Estudiante;
  constructor(private estudianteService:EstudianteService,
              private _internalService:InternalService) { }

  ngOnInit() {
    const observableParametro$ = this.estudianteEscogido;
    this.estudianteService.verListaEstudiantes();
    this.obtenerMiEstudiante(observableParametro$);
  }

  obtenerIdDeMiEstudiante(){
    this.idEstudiante = this._internalService.retornarIdEstudianteEscogido();
    console.log('en el detalle de mi estudiante, el id que tengo es: '+this.idEstudiante);
  }

  obtenerMiEstudiante (parametroObservable) {
    this.obtenerIdDeMiEstudiante();
    parametroObservable.consultarEstudianteEspecifico(this.idEstudiante)
      .then(estudiante => this.estudianteEscogido = estudiante);

  }


}
