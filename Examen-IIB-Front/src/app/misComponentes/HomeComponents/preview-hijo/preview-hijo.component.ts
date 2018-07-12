import { Component, OnInit } from '@angular/core';
import {MateriaService} from "../../../materiaService";
import {Materia} from "../../../Materia";

@Component({
  selector: 'app-preview-hijo',
  templateUrl: './preview-hijo.component.html',
  styleUrls: ['./preview-hijo.component.css'],
  providers: [MateriaService]
})
export class PreviewHijoComponent implements OnInit {

  materias: Materia[];
  constructor(private _materiaService: MateriaService) { }

  ngOnInit() {
    console.log('la lista actualmente tiene lo siguiente: '+this.materias);
    this._materiaService.obtenerMaterias().then(materias => this.materias = materias);
    console.log('recibi la lista '+this.materias);
  }

}
