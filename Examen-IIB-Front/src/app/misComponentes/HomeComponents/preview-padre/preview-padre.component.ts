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
  msgs: Message[];
  misEstudiantes : Estudiante[] = [
    {
      "materiasEstudiante":null,
      "idEstudiante": 1,
      "nombreEstudiante": "Andres",
      "apellidoEstudiante": "Salazar",
      "fechaNacimiento": "17/10/1995",
      "esGraduado": false,
      "semestreActual": 8,
      "fotoEstudiante": "https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
  ];
  @Output() deliverIDEstudiante = new EventEmitter();


  constructor(private _router:Router,
              private _estudianteService: EstudianteService,
              private _internalService: InternalService) { }

  ngOnInit() {
    this._estudianteService.verListaEstudiantes();
    // this.obtenerTodosLosEstudiantes();
    this.recibirEstudiantes();
  }

  ngOnChanges(algoCambio){
    console.log('recibí algo:');
  }

  // obtenerTodosLosEstudiantes (){
  //   this._estudianteService.obtenerListaEstudiantes()
  //     .subscribe(losEstudiantes => this.misEstudiantes = losEstudiantes);
  // }

  escogerEstudiante(estudiante: Estudiante) {
    this.id = estudiante.idEstudiante;
    this._internalService.cargarIdEstudianteEscogido(this.id);
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Estudiante Escogido', detail: 'Nombre:' + estudiante.nombreEstudiante});
    this.irADescripcionEstudiante();
  }

  recibirEstudiantes(){
    console.log('la lista actualmente tiene lo siguiente: '+this.misEstudiantes);
    this._estudianteService.obtenerListaEstudiantes().then(materias => this.misEstudiantes = materias);
    console.log('recibi la lista '+this.misEstudiantes);
  }

  irADescripcionEstudiante (){
    const url = ['/Estudiante/'+this.id];
    this._router.navigate(url);
  }



}
