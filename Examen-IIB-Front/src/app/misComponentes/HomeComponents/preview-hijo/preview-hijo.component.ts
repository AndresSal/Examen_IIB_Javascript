import { Component, OnInit } from '@angular/core';
import {Car} from "../../../Car";
import {MateriaService} from "../../../materiaService";

@Component({
  selector: 'app-preview-hijo',
  templateUrl: './preview-hijo.component.html',
  styleUrls: ['./preview-hijo.component.css']
})
export class PreviewHijoComponent implements OnInit {

  cars: Car[];
  constructor(private _materiaService: MateriaService) { }

  ngOnInit() {
    this._materiaService.obtenerListaMaterias().then(cars => this.cars = cars);
  }

}
