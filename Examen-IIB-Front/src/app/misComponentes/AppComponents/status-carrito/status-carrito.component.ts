import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EstudianteService} from "../../../estudianteService";
import {InternalService} from "../../../internalService";
import {Estudiante} from "../../../Estudiante";

@Component({
  selector: 'app-status-carrito',
  templateUrl: './status-carrito.component.html',
  styleUrls: ['./status-carrito.component.css']
})
export class StatusCarritoComponent implements OnInit, OnChanges {

   numItems:number;
  constructor(private _router: Router,
              private _estudianteService: EstudianteService,
              private _internalService: InternalService) {
    this.numItems = 0;
  }



  ngOnInit() {
    this.obtenerNumeroItemsEnElCarrito()
  }

  ngOnChanges(){
    this.obtenerNumeroItemsEnElCarrito()
  }

  irAlCarrito(){
    const url = ['/Carrito'];
    this._router.navigate(url);
  }

  obtenerNumeroItemsEnElCarrito(){
    this._internalService
      .emisorDelContador.subscribe(
        res => {
          this.numItems = res;
        }
      )
    console.log('el numero de contador es: ',this.numItems);
  }
}
