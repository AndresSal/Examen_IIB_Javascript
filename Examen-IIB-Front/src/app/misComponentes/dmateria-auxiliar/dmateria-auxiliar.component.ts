import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dmateria-auxiliar',
  templateUrl: './dmateria-auxiliar.component.html',
  styleUrls: ['./dmateria-auxiliar.component.css']
})
export class DMateriaAuxiliarComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  irACrearEstudiante(){
    const url = ['/CrearEstudiante'];
    this._router.navigate(url);
  }

}
