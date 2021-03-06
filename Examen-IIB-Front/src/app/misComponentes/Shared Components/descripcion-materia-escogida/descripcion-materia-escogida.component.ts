import { Component, OnInit } from '@angular/core';
import {MateriaService} from "../../../materiaService";
import {Estudiante} from "../../../Estudiante";
import {Materia} from "../../../Materia";
import {EstudianteService} from "../../../estudianteService";
import {InternalService} from "../../../internalService";
import {forEach} from "@angular/router/src/utils/collection";
import {Router} from "@angular/router";

@Component({
  selector: 'app-descripcion-materia-escogida',
  templateUrl: './descripcion-materia-escogida.component.html',
  styleUrls: ['./descripcion-materia-escogida.component.css']
})
export class DescripcionMateriaEscogidaComponent implements OnInit {

  materiasDelEstudiante: Materia[];

  constructor(private _materiaService:MateriaService,
              private _internalService: InternalService,
              private _estudianteService: EstudianteService,
              private _router: Router) { }

  ngOnInit() {
    this.consultarListaDeMaterias();
  }

  consultarListaDeMaterias(){
    this._estudianteService.consulta(this._internalService
      .retornarEstudianteEscogido().idEstudiante).subscribe(
        res => {
          res.find(estudiante =>{
            let idRegistroEstudiante = estudiante.id;
            console.log('el id del registro es: ',idRegistroEstudiante);
            this._materiaService.MateriasDeMiEstudiante
            (idRegistroEstudiante).subscribe(
              respuesta => {
                console.log('las materias son: ',respuesta);
                this.materiasDelEstudiante = <Materia[]>respuesta;
              }
            )
          })
        }
    )
  }

  eliminarMateriaDeMiCarrito(materia: Materia){
    this._materiaService.quitarMateriaDelEstudiante(materia.idMateria).subscribe(
        res =>{
          console.log('cambios a la materia: ',res);
          this._internalService.disminuirContador();
          this.irAlHome();
        }
    )
  }

  irAlHome (){
    const url = ['/Home/'];
    this._router.navigate(url);
  }

}
