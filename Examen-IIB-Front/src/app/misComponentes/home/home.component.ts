import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {InternalService} from "../../internalService";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  myID :number;

  constructor(private _internalService: InternalService) {
    this.myID = 1;
  }

  ngOnInit() {
    this._internalService.cargarIDComponentePadre(this.myID);
  }


}
