import { Component, OnInit } from '@angular/core';
import {Car} from "../../Car";
import {MateriaService} from "../../materiaService";

@Component({
  selector: 'app-detalle-materia',
  templateUrl: './detalle-materia.component.html',
  styleUrls: ['./detalle-materia.component.css']
})
export class DetalleMateriaComponent implements OnInit {

  cars: Car[];
  constructor(private _materiaService: MateriaService) { }

  ngOnInit() {
    this._materiaService.obtenerListaMaterias().then(cars => this.cars = cars);
  }

}
