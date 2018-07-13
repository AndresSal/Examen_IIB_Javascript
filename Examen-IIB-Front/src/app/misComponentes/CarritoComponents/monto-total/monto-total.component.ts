import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-monto-total',
  templateUrl: './monto-total.component.html',
  styleUrls: ['./monto-total.component.css']
})
export class MontoTotalComponent implements OnInit {

  @Input() montoTotalHoras: number;
  constructor() { }

  ngOnInit() {
  }

}
