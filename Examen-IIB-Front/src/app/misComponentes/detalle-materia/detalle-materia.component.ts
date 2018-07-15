import {Component, OnChanges, OnInit} from '@angular/core';
import {MateriaService} from "../../materiaService";
import {Materia} from "../../Materia";
import {InternalService} from "../../internalService";

@Component({
  selector: 'app-detalle-materia',
  templateUrl: './detalle-materia.component.html',
  styleUrls: ['./detalle-materia.component.css']
})
export class DetalleMateriaComponent implements OnInit, OnChanges {

  listaMateriaEscogida: Materia[];
  id: number;
  constructor(private _materiaService: MateriaService,
              private _internarlService: InternalService) { }

  ngOnInit() {
    //console.log('Estoy en el detalle Materia: la materia que extraje es: ',this._internarlService.retornarMateriaEscogida());
    this.obtenerIDMateriaSeleccionada();
    this.obtenerMateriaEscogida();
  }

  ngOnChanges(){
    this.obtenerIDMateriaSeleccionada();
  }

  obtenerIDMateriaSeleccionada(){

    this.id = this._internarlService.retornarMateriaEscogida().idMateria;
    console.log('Estoy en el Detalle Materia. Ahora tengo el id de la materia: ',this.id);

  }
  obtenerMateriaEscogida(){
    this._materiaService.arregloConEstudianteBuscado(
      this.id)
      .subscribe(
        res => {
          console.log('estoy en Detalle Materia.  El resultado de la consulta es: ',res);
          this.listaMateriaEscogida = <Materia[]>res;
          console.log('ahora mi arreglo de materia tiene: ',this.listaMateriaEscogida);
        }
      )
  }

}
