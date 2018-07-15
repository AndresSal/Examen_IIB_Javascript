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

  @Input() nombre: string;
  @Input() apellido: string;
  @Input() fechaNacimiento: string;
  @Input() semestreActual: string;
  idEstudiante: number;
  estudianteDelDetalle : Estudiante[];

  constructor(private _internalService: InternalService,
              private _estudianteService: EstudianteService) { }

  ngOnInit() {
  // this.obtenerDatosDelEstudiante();
  }

  obtenerIdDelEstudiante(){
    this.idEstudiante = this._internalService.retornarIdEstudianteEscogido();
  }

  // obtenerDatosDelEstudiante(){
  //   this.obtenerIdDelEstudiante();
  //   this._estudianteService.consultarEstudianteEspecifico(this.idEstudiante)
  //     .then(estudianteObtenido => this.estudianteDelDetalle = estudianteObtenido);
  // }

}
