import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _router:Router){
  }

  irAHome(){
    const url = ['/Home'];
    this._router.navigate(url);
  }

  irACarrito(){
    const url = ['/Carrito'];
    this._router.navigate(url);
  }
}
