import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-volver-inicio',
  templateUrl: './volver-inicio.component.html',
  styleUrls: ['./volver-inicio.component.css']
})
export class VolverInicioComponent implements OnInit {

  constructor(private _router:Router) { }

  irAlHome(){
    const url = ['/Home'];
    this._router.navigate(url);
  }
  ngOnInit() {
  }

}
