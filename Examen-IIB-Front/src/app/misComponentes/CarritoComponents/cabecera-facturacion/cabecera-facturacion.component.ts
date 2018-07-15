import {Component, Input, OnInit} from '@angular/core';
import {InternalService} from "../../../internalService";
import {EstudianteService} from "../../../estudianteService";
import {Estudiante} from "../../../Estudiante";

@Component({
  selector: 'app-cabecera-facturacion',
  templateUrl: './cabecera-facturacion.component.html',
  styleUrls: ['./cabecera-facturacion.component.css']
})
export class CabeceraFacturacionComponent implements OnInit {


  idEstudiante: number;
  resultadosConsulta : Estudiante[];

  constructor(private _internalService: InternalService,
              private _estudianteService: EstudianteService) { }

  ngOnInit() {
    this.obtenerEstudianteParaFacturacion();
  }

  obtenerEstudianteParaFacturacion(){
    this.obtenerIdDeMiEstudiante();
    this._estudianteService.arregloConEstudianteBuscado(
      this.idEstudiante)
      .subscribe(
        res => {
          console.log('estoy en Detalle Estudiante.  El resultado de la consulta es: ',res);
          this.resultadosConsulta = <Estudiante[]>res;
        }
      )
  }


  obtenerIdDeMiEstudiante(){
    this.idEstudiante = this._internalService.retornarEstudianteEscogido().idEstudiante;
    console.log('en el detalle de mi estudiante, el id que tengo es: '+this.idEstudiante);
  }

}
