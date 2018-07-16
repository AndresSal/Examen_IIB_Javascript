import { Component, OnInit } from '@angular/core';
import {EstudianteService} from "../../estudianteService";
import {forEach} from "@angular/router/src/utils/collection";
import {Estudiante} from "../../Estudiante";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.css']
})
export class CrearEstudianteComponent implements OnInit {

  inputNombreEstudiante:string;
  inputApellidoEstudiante:string;
  inputFechaNacimiento:string;
  inputEsGraduado:boolean;
  inputSemestreActual:number;

  nuevoid:number;

  constructor(private _estudianteService:EstudianteService,
              private _router: Router) { }

  ngOnInit() {
  }

  ingresarUnNuevoEstudiante(){
    this._estudianteService.consultarListaEstudiantes()
      .subscribe(
        res => {
          console.log('CREAR ESTUDIANTE: obtengo el resultado',res);
          let cont = Object.keys(res).length;
          console.log('numero de elementos: ',cont);
          this._estudianteService.registrarNuevoEstudiante(
            this.construirElBodyDelRequest(cont)).
          subscribe(
            res => {
              console.log('MUY BIEN!! se ha creado un nuevo estudiante');
              console.log('ahora la lista de estudiantes es esta: ',res);
              this.irAlHome();
            }
          )


        }
      )
    console.log('mi nuevo id es: ',this.nuevoid);
  }

  construirElBodyDelRequest(id:number){
    let body = {
      "idEstudiante": id+1,
      "nombreEstudiante": this.inputNombreEstudiante,
      "apellidoEstudiante": this.inputApellidoEstudiante,
      "fechaNacimiento": this.inputFechaNacimiento,
      "esGraduado": this.inputEsGraduado,
      "semestreActual": this.inputSemestreActual,
      "fotoEstudiante": 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    }
    return body;
  }

  irAlHome(){
    const url = ['/Home'];
    this._router.navigate(url);
  }

}
