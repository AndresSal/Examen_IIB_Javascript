import {Component, OnChanges, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Estudiante} from "../../../Estudiante";
import {EstudianteService} from "../../../estudianteService";
import {InternalService} from "../../../internalService";


@Component({
  selector: 'app-preview-padre',
  templateUrl: './preview-padre.component.html',
  styleUrls: ['./preview-padre.component.css']
})
export class PreviewPadreComponent implements OnInit, OnChanges {
  id: number;
  misEstudiantes: Estudiante[];

  constructor(private _router: Router,
              private _estudianteService: EstudianteService,
              private _internalService: InternalService) {
  }

  ngOnInit() {
    this.obtenerListaEstudiantes();
    console.log('luego de la conexion el arreglo tiene: '+this.misEstudiantes);

  }

  ngOnChanges(algoCambio) {
    this.obtenerListaEstudiantes();
    console.log('recibí algo:');
  }

  obtenerListaEstudiantes(){
    this._estudianteService.consultarListaEstudiantes()
      .subscribe(res => {
          console.log('el servidor arrojó la lista: '+res);
          this.misEstudiantes = <Estudiante[]>res;
          console.log('ahora mi arreglo tiene lo siguiente: '+this.misEstudiantes);
          return this.misEstudiantes;
        }
      )
  }

  escogerEstudiante(estudiante: Estudiante) {
    this.id = estudiante.idEstudiante;
    this._internalService.cargarIdEstudianteEscogido(this.id);
    this.irADescripcionEstudiante();
  }

  irADescripcionEstudiante (){
    const url = ['/Estudiante/'+this.id];
    this._router.navigate(url);
  }

}
