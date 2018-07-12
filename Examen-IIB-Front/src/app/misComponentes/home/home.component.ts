import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // listaEstudiantes = [
  //   {
  //     idEstudiante: 1,
  //     nombreEstudiante: 'Andres ',
  //     apellidoEstudiante: 'Salazar',
  //     fechaNacimiento: '17/10/1995',
  //     esGraduado: false,
  //     semestreActual: 8,
  //     misMaterias: [
  //     ]
  //   },
  //   {
  //     idEstudiante: 2,
  //     nombreEstudiante: 'William ',
  //     apellidoEstudiante: 'Rawlins',
  //     fechaNacimiento: '07/01/1998',
  //     esGraduado: false,
  //     semestreActual: 3,
  //     misMaterias: [
  //     ]
  //   },
  //   {
  //     idEstudiante: 3,
  //     nombreEstudiante: 'David',
  //     apellidoEstudiante: 'Liberman',
  //     fechaNacimiento: '04/08/1990',
  //     esGraduado: false,
  //     semestreActual: 6,
  //     misMaterias: [
  //     ]
  //   },
  // ];

  //@Output() paqueteListaEstudiantes = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // this.enviarListaEstudiantes(this.listaEstudiantes)
  }

  // enviarListaEstudiantes (arregloEstudiantes)
  // {
  //   console.log('enviando la lista de estudiantes a mi hijo');
  //   this.paqueteListaEstudiantes.emit(arregloEstudiantes);
  // }

}
