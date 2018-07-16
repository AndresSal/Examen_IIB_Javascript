import { Component, OnInit } from '@angular/core';
import {EstudianteService} from "../../../estudianteService";
import {MateriaService} from "../../../materiaService";
import {InternalService} from "../../../internalService";

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styleUrls: ['./resultado-busqueda.component.css']
})
export class ResultadoBusquedaComponent implements OnInit {

  constructor(private _estudianteService:EstudianteService,
              private _materiaService:MateriaService,
              private _internalService:InternalService) { }

  ngOnInit() {
  }



}
