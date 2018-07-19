import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Estudiante} from "../../Estudiante";
import {EstudianteService} from "../../estudianteService";
import {InternalService} from "../../internalService";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {MateriaService} from "../../materiaService";



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


  inputNombreEstudiante: string;
  inputApellidoEstudiante: string;
  inputFechaNacimiento: string;
  inputEsGraduado: boolean;
  inputSemestreActual: number;


  constructor(private _estudianteService:EstudianteService,
              private _internalService:InternalService,
              private _materiaService: MateriaService,
              private modalService: NgbModal,
              private _router:Router,
              ) {
    this.myID = 2;
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

  actualizarAMiEstudiante(){
    this.estudianteActual.nombreEstudiante = this.inputNombreEstudiante;
    this.estudianteActual.apellidoEstudiante = this.inputApellidoEstudiante;
    this.estudianteActual.fechaNacimiento = this.inputFechaNacimiento;
    this.estudianteActual.esGraduado = this.inputEsGraduado;
    this.estudianteActual.semestreActual = this.inputSemestreActual;

    let bodyDelUpdate = {
      nombreEstudiante: this.inputNombreEstudiante,
      apellidoEstudiante : this.inputApellidoEstudiante,
      fechaNacimiento : this.inputFechaNacimiento,
      esGraduado : this.inputEsGraduado,
      semestreActual : this.inputSemestreActual
    };

    this._estudianteService.consulta(
      this._internalService.retornarEstudianteEscogido().idEstudiante
    ).subscribe(
      res =>{
        res.find(registro =>{
          let idRegistro = registro.id;
          this._estudianteService.actualizarDetalleEstudiante(idRegistro,bodyDelUpdate)
            .subscribe(
              result =>{
                console.log('BRAVO!! se actualizaron con exito los datos del estudiante!!!');
                console.log('ahora mi estudiante tiene la siguiente info',result);
                this.irAlHome();
              }
            )
        })
      }
    )



    this._estudianteService.actualizarDetalleEstudiante(this.idEstudiante,bodyDelUpdate)
      .subscribe(
        res => {
          console.log('BRAVO!! se actualizaron con exito los datos del estudiante!!!');
          console.log('ahora mi estudiante tiene la siguiente info',res);
          this.irAlHome();
        }
      )
  }

  eliminarEstudiante(){
    this._estudianteService.consulta(
      this._internalService.retornarEstudianteEscogido().idEstudiante
    ).subscribe(
      res => {
        console.log('resultado de la consulta: ',res);
        res.find(estudiante =>{
          let materiasEstudiante = estudiante.materiasEstudiante;
          console.log('la lista de materias que tiene es: ',materiasEstudiante);
          materiasEstudiante.forEach(
            materia=> {
              this._materiaService.eliminarMateriasDelEstudiante(materia)
                .subscribe(
                  respuesta =>{
                    console.log('que recibi: ',respuesta);
                  }
                )
            }
          )
          let idRegistro = estudiante.id;
          console.log('el id de ese registro es: ', idRegistro);
          this._estudianteService.eliminarEstudianteEscogido(idRegistro)
            .subscribe(
              resultado => {
                console.log('CORRECTO!! se ha eliminado el estudiante escogido');
                console.log('resultado de la operación: ',resultado);
                this._internalService.setearContador();
                this._internalService.setearEstudiante();
                this.irAlHome();
              }
            )
        })
      }
    )
  }





  irAlHome (){
    const url = ['/Home/'];
    this._router.navigate(url);
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

}
