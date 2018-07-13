import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {Estudiante} from "../../../Estudiante";
import {Message} from "primeng/api";
import {EstudianteService} from "../../../estudianteService";
import {InternalService} from "../../../internalService";

@Component({
  selector: 'app-preview-padre',
  templateUrl: './preview-padre.component.html',
  styleUrls: ['./preview-padre.component.css']
})
export class PreviewPadreComponent implements OnInit, OnChanges {
  id:number;
  errorMessage: string;
  misEstudiantes : Estudiante[];

  @Output() deliverIDEstudiante = new EventEmitter();


  constructor(private _router:Router,
              private _estudianteService: EstudianteService,
              private _internalService: InternalService) { }

  ngOnInit() {
    console.log('principio');
    this._estudianteService.verListaEstudiantes();
    this.obtenerTodosLosEstudiantes();
  }

  ngOnChanges(algoCambio){
    console.log('recibí algo:');
  }

  obtenerTodosLosEstudiantes (){
    this._estudianteService.obtenerListaEstudiantes()
      .then(laLista => {
        this.misEstudiantes = laLista;
        if(this.misEstudiantes.length === 0){
          this.errorMessage = 'no hay registros en el arreglo';
        }
    }, error => {
        console.error('Ha ocurrido un error: '+error);
      })
    console.log('mi arreglo: ',this.misEstudiantes);
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
