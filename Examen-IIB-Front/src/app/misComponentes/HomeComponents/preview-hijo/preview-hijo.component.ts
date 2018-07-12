import { Component, OnInit } from '@angular/core';
import {Car} from "../../../Car";
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
    this._materiaService.obtenerListaMaterias().then(materias => this.materias = materias);
  }

}
