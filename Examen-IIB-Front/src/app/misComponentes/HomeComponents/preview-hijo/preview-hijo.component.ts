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
    this.recibirMaterias();
  }

  recibirMaterias(){
    console.log('la lista actualmente tiene lo siguiente: '+this.materias);
    this._materiaService.obtenerMaterias().then(materias => this.materias = materias);
    console.log('recibi la lista '+this.materias);
  }

  escogerMateria(materia: Materia) {
    this.materiaescogida = materia;
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Materia Escogida', detail: 'Nombre:' + this.materiaescogida.nombreMateria});
  }

}
