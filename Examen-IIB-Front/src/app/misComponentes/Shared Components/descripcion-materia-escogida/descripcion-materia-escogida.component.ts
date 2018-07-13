import { Component, OnInit } from '@angular/core';
import {MateriaService} from "../../../materiaService";
import {Materia} from "../../../Materia";

@Component({
  selector: 'app-descripcion-materia-escogida',
  templateUrl: './descripcion-materia-escogida.component.html',
  styleUrls: ['./descripcion-materia-escogida.component.css']
})
export class DescripcionMateriaEscogidaComponent implements OnInit {

  miMateriaEscogida: Materia[];

  constructor(private _materiaService:MateriaService) { }

  ngOnInit() {
  }

  consultarMateria(){

  }
}
