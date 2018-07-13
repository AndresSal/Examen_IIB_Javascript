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
    this.estudianteService.verListaEstudiantes();
    this.obtenerMiEstudiante();
  }

  obtenerIdDeMiEstudiante(){
    this.idEstudiante = this._internalService.retornarIdEstudianteEscogido();
    console.log('en el detalle de mi estudiante, el id que tengo es: '+this.idEstudiante);
  }

  obtenerMiEstudiante () {
    this.obtenerIdDeMiEstudiante();
    this.estudianteService.consultarEstudianteEspecifico(this.idEstudiante)
      .subscribe(resultadoEstudiante => this.estudianteArray);
    this.estudianteEscogido = this.estudianteArray[this.idEstudiante];
  }


}
