import { Component, OnInit } from '@angular/core';
import {EstudianteService} from "../../../estudianteService";
import {MateriaService} from "../../../materiaService";
import {InternalService} from "../../../internalService";
import {Estudiante} from "../../../Estudiante";
import {Router} from "@angular/router";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  inputConsulta:string;
  resultadosBusqueda : any[];

  constructor(private _estudianteService:EstudianteService,
              private _materiaService:MateriaService,
              private _internalService:InternalService,
              private _router: Router) { }

  ngOnInit() {
  }

  efectuarConsulta(){
    this._estudianteService.consultarEstudiantePorNombre(this.inputConsulta)
      .subscribe(
        res => {
          console.log('VEAMOS EL RESULTADO: ',res);
          this.resultadosBusqueda = res;
        }
      )

  }

  escogerEstudiante(estudiante: Estudiante) {
    this._internalService.cargarEstudianteEscogido(estudiante);
    this.irADescripcionEstudiante();
  }

  irADescripcionEstudiante (){
    const url = ['/Estudiante/'+this._internalService.retornarEstudianteEscogido().idEstudiante];
    this._router.navigate(url);
  }


}
