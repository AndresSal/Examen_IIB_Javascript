import { Component, OnInit } from '@angular/core';
import {MateriaService} from "../../../materiaService";
import {Materia} from "../../../Materia";
import {Message} from "primeng/api";
import {Router} from "@angular/router";
import {InternalService} from "../../../internalService";

@Component({
  selector: 'app-preview-hijo',
  templateUrl: './preview-hijo.component.html',
  styleUrls: ['./preview-hijo.component.css'],
  providers: [MateriaService]
})
export class PreviewHijoComponent implements OnInit {

  materias: Materia[];
  materiaescogida: Materia;
  msgs: Message[];
  isSelectable: boolean = true;
  idEstudianteEscogido: number;

  constructor(private _materiaService: MateriaService,
              private _router: Router,
              private _internalService: InternalService)
  {

  }

  ngOnInit() {
    this.obtenerListaMaterias();
  }

  obtenerListaMaterias(){
    this._materiaService.consultarMateriasDisponibles()
      .subscribe(res =>
      {

        console.log("LAS MATERIAS SON LAS SIGUIENTES",res);
        this.materias = res;
        // this.materias = res.map(
        //   (materia: Materia) => {
        //      if(materia.esDisponible===true)
        //      {
        //       return materia;
        //      }
        //   }
        // )

      })
  }

  escogerMateria(materia: Materia) {
    this.materiaescogida = materia;
    console.log('Bien he escogido la materia: ',this.materiaescogida);
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Materia Escogida', detail: 'Nombre:' + this.materiaescogida.nombreMateria});
    this._internalService.cargarMateriaEscogida(this.materiaescogida);
    console.log('Genial ya puse la materia ',this.materiaescogida,' en el servicio interno de la app')
    this.definirRutaDeDespliegue(this._internalService.retornarIDComponentePadre());
  }

  definirRutaDeDespliegue(idPadre: number){
    let url;
    if(idPadre==1){
      url = ['/Materia/'+this.materiaescogida.idMateria];
    }else if(idPadre==2){
      this.idEstudianteEscogido = this._internalService.retornarEstudianteEscogido().idEstudiante;
      url = ['/Estudiante/'+this.idEstudianteEscogido+"/Materia/"+this.materiaescogida.idMateria]
    }
    this._router.navigate(url);
  }



}
