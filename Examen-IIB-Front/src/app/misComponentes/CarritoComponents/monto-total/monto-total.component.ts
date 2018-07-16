import {Component, Input, OnInit} from '@angular/core';
import {MateriaService} from "../../../materiaService";
import {InternalService} from "../../../internalService";
import {Materia} from "../../../Materia";

@Component({
  selector: 'app-monto-total',
  templateUrl: './monto-total.component.html',
  styleUrls: ['./monto-total.component.css']
})
export class MontoTotalComponent implements OnInit {

  montoTotalHoras: number;
  constructor(private _internalService:InternalService,
              private _materiaService:MateriaService) { }

  ngOnInit() {
  this.obtenerMontoTotal();
  }


  obtenerMontoTotal(){
    this._materiaService.MateriasDeMiEstudiante
    (this._internalService.retornarEstudianteEscogido().idEstudiante)
      .subscribe(res =>{
        let montoFinal=0;
        if(typeof res != "undefined"){
          res.forEach(mat =>
          {
            console.log('NombreMateria: ',<number>mat.numHorasXSemana);
            montoFinal = montoFinal+mat.numHorasXSemana;

          })
        }
        console.log('TOTAL NUMERO DE HORAS: ',montoFinal);
        this.montoTotalHoras = montoFinal;

      })
  }
  

}
