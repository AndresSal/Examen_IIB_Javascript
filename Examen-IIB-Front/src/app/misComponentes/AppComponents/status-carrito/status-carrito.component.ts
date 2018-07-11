import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-status-carrito',
  templateUrl: './status-carrito.component.html',
  styleUrls: ['./status-carrito.component.css']
})
export class StatusCarritoComponent implements OnInit {

  constructor(private _router: Router) { }

  irAlCarrito(){
    const url = ['/Carrito'];
    this._router.navigate(url);
  }
  ngOnInit() {
  }

}
