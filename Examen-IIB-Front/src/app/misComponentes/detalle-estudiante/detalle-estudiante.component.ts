import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Estudiante} from "../../Estudiante";
import {EstudianteService} from "../../estudianteService";
import {InternalService} from "../../internalService";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";



@Component({
  selector: 'app-detalle-estudiante',
  templateUrl: './detalle-estudiante.component.html',
  styleUrls: ['./detalle-estudiante.component.css']
})
export class DetalleEstudianteComponent implements OnInit, OnChanges {

  myID: number;
  idEstudiante:number;
  resultadoBusqueda: Estudiante[];
  estudianteActual: Estudiante;
  closeResult: string;

  constructor(private _estudianteService:EstudianteService,
              private _internalService:InternalService,
              private modalService: NgbModal) {
    this.myID = 2;
  }

  open(content){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
      .result.then((result)=>{
        this.closeResult = `Closed with: ${result}`;
    }, (reason)=>{
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit() {
    this._internalService.cargarIDComponentePadre(this.myID);
    this.obtenerEstudianteEscogido();
  }

  ngOnChanges(cambio) {
    console.log('algo paso ',cambio);
  }


  obtenerEstudianteEscogido(){
    this.estudianteActual = this._internalService.retornarEstudianteEscogido();
    this.obtenerIdDeMiEstudiante();
    this._estudianteService.arregloConEstudianteBuscado(
      this.idEstudiante)
      .subscribe(
        res => {
          console.log('estoy en Detalle Estudiante.  El resultado de la consulta es: ',res);
          this.resultadoBusqueda = <Estudiante[]>res;
          console.log('ahora mi arreglo de estudiante tiene: ',this.resultadoBusqueda);
        }
      )
  }


  obtenerIdDeMiEstudiante(){
    this.idEstudiante = this._internalService.retornarEstudianteEscogido().idEstudiante;
    console.log('en el detalle de mi estudiante, el id que tengo es: '+this.idEstudiante);
  }




}
