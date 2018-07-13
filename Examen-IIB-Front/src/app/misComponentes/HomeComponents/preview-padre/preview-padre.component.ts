import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Estudiante} from "../../../Estudiante";
import {Message} from "primeng/api";
import {EstudianteService} from "../../../estudianteService";

@Component({
  selector: 'app-preview-padre',
  templateUrl: './preview-padre.component.html',
  styleUrls: ['./preview-padre.component.css']
})
export class PreviewPadreComponent implements OnInit, OnChanges {
  id = 10000;
  msgs: Message[];
  estudiantes : Estudiante[];
  // @Input() miArregloDeEstudiantes;
  miArregloDeEstudiantes = [
    {
      idEstudiante: 1,
      nombreEstudiante: 'Andres ',
      apellidoEstudiante: 'Salazar',
      fechaNacimiento: '17/10/1995',
      esGraduado: false,
      semestreActual: 8,
      misMaterias: [
      ]
    },
    {
      idEstudiante: 2,
      nombreEstudiante: 'William ',
      apellidoEstudiante: 'Rawlins',
      fechaNacimiento: '07/01/1998',
      esGraduado: false,
      semestreActual: 3,
      misMaterias: [
      ]
    },
    {
      idEstudiante: 3,
      nombreEstudiante: 'David',
      apellidoEstudiante: 'Liberman',
      fechaNacimiento: '04/08/1990',
      esGraduado: false,
      semestreActual: 6,
      misMaterias: [
      ]
    },
  ];


  constructor(private _router:Router, private _estudianteService: EstudianteService) { }

  ngOnInit() {

    console.log('la lista (estudiantes) tiene lo siguiente: '+this.estudiantes);
    this._estudianteService.obtenerListaEstudiantes().then(misEstudiantes => this.estudiantes = misEstudiantes);
    console.log('recibi la lista '+this.estudiantes);
  }

  ngOnChanges(algoCambio){
    console.log('recibí algo:');
  }

  irADescripcionEstudiante (){
    const url = ['/Estudiante/'+this.id];
    this._router.navigate(url);
  }



  recibirPaqueteDeEstudiantes ($event){
    this.miArregloDeEstudiantes = $event;
    console.log('recibí el arreglo de mi padre');
    console.log('el arreglo de estudiantes es: ', this.miArregloDeEstudiantes)
  }

  selectCar(estudiante: Estudiante) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Estudiante Escogido', detail: 'Nombre:' + estudiante.nombreEstudiante});
  }


}
