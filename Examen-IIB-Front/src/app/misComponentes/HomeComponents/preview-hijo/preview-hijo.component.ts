import { Component, OnInit } from '@angular/core';
import {MateriaService} from "../../../materiaService";
import {Materia} from "../../../Materia";
import {Message} from "primeng/api";

@Component({
  selector: 'app-preview-hijo',
  templateUrl: './preview-hijo.component.html',
  styleUrls: ['./preview-hijo.component.css'],
  providers: [MateriaService]
})
export class PreviewHijoComponent implements OnInit {

  materias: Materia[];
  materiaescogida;
  msgs: Message[];

  constructor(private _materiaService: MateriaService) { }

  ngOnInit() {
    this.obtenerListaMaterias();
    //this.recibirMaterias();
  }

  obtenerListaMaterias(){
    this._materiaService.consultarListaMaterias()
      .subscribe(res => this.materias = <Materia[]>res)
  }

  escogerMateria(materia: Materia) {
    this.materiaescogida = materia;
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Materia Escogida', detail: 'Nombre:' + this.materiaescogida.nombreMateria});
  }

}
