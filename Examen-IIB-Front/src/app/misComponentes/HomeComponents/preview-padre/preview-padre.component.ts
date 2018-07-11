import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-preview-padre',
  templateUrl: './preview-padre.component.html',
  styleUrls: ['./preview-padre.component.css']
})
export class PreviewPadreComponent implements OnInit {

  id = 10000;

  constructor(private _router:Router) { }


  irADescripcionEstudiante (){
    const url = ['/Estudiante/'+this.id];
    this._router.navigate(url);
  }


  ngOnInit() {
  }

}
