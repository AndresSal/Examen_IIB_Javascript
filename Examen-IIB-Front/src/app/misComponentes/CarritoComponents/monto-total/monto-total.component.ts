import {Component, Input, OnInit} from '@angular/core';
import {MateriaService} from "../../../materiaService";
import {InternalService} from "../../../internalService";
import {EstudianteService} from "../../../estudianteService";

@Component({
  selector: 'app-monto-total',
  templateUrl: './monto-total.component.html',
  styleUrls: ['./monto-total.component.css']
})
export class MontoTotalComponent implements OnInit {

  montoTotalHoras: number;
  constructor(private _internalService:InternalService,
              private _materiaService:MateriaService,
              private _estudianteService: EstudianteService) { }

  ngOnInit() {
  this.obtenerMontoTotal();
  }

  obtenerMontoTotal(){
    this._estudianteService.consulta(this._internalService
      .retornarEstudianteEscogido().idEstudiante).subscribe(
        res => {
          res.find(estudiante => {
            this._materiaService
              .MateriasDeMiEstudiante(estudiante.id).subscribe(
                resultado => {
                  let montoFinal = 0;
                  if(typeof resultado != "undefined"){
                    resultado.forEach(
                      mat => {
                        montoFinal = montoFinal+mat.numHorasXSemana;
                      }
                    )
                  }
                  console.log('TOTAL NUMERO DE HORAS: ',montoFinal);
                  this.montoTotalHoras = montoFinal;
                }
            )
          })
        }
    )
  }

  // obtenerMontoTotal(){
  //   this._materiaService.MateriasDeMiEstudiante
  //   (this._internalService.retornarEstudianteEscogido().idEstudiante)
  //     .subscribe(res =>{
  //       let montoFinal=0;
  //       if(typeof res != "undefined"){
  //         res.forEach(mat =>
  //         {
  //           console.log('NombreMateria: ',<number>mat.numHorasXSemana);
  //           montoFinal = montoFinal+mat.numHorasXSemana;
  //
  //         })
  //       }
  //       console.log('TOTAL NUMERO DE HORAS: ',montoFinal);
  //       this.montoTotalHoras = montoFinal;
  //
  //     })
  // }


}
