import { Component, OnInit } from '@angular/core';
import {Car} from "../../Car";
import {MateriaService} from "../../materiaService";
import {Materia} from "../../Materia";

@Component({
  selector: 'app-detalle-materia',
  templateUrl: './detalle-materia.component.html',
  styleUrls: ['./detalle-materia.component.css']
})
export class DetalleMateriaComponent implements OnInit {

  listaMaterias: Materia[];
  constructor(private _materiaService: MateriaService) { }

  ngOnInit() {
    this._materiaService.obtenerListaMaterias().then(materias => this.listaMaterias = materias);
  }

}
