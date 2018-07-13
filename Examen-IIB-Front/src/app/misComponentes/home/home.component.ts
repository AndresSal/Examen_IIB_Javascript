import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // idEstudiantePreview: number;
  // @Output() envioIntermedio = new EventEmitter();

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

  // recibiIDEstudianteDelPreview($event){
  //   console.log ('recibí el id: ',$event);
  //   this.idEstudiantePreview = $event;
  //   console.log('enviando al APP el id: ',this.idEstudiantePreview);
  //   this.envioIntermedio.emit(this.idEstudiantePreview);
  //   console.log('ya envie el id');
  // }

}
