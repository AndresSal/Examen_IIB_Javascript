import {Component, OnChanges, OnInit} from '@angular/core';
import {MateriaService} from "../../materiaService";
import {Materia} from "../../Materia";
import {InternalService} from "../../internalService";
import {Router} from "@angular/router";
import {EstudianteService} from "../../estudianteService";

@Component({
  selector: 'app-detalle-materia',
  templateUrl: './detalle-materia.component.html',
  styleUrls: ['./detalle-materia.component.css']
})
export class DetalleMateriaComponent implements OnInit, OnChanges {

  listaMateriaEscogida: Materia[];
  idMateria: number;
  idEstudiante: number;
  IDComponentePadre: number;

  esSeleccionable = true;
  constructor(private _materiaService: MateriaService,
              private _internarlService: InternalService,
              private _router: Router,
              private _estudianteService: EstudianteService) { }

  ngOnInit() {
    //console.log('Estoy en el detalle Materia: la materia que extraje es: ',this._internarlService.retornarMateriaEscogida());
    this.verificarEstadoMateria();
    this.obtenerIDMateriaSeleccionada();
    this.obtenerMateriaEscogida();
  }

  ngOnChanges(){
    this.obtenerIDMateriaSeleccionada();
    this.obtenerMateriaEscogida();
  }

  obtenerIDMateriaSeleccionada(){
    this.idMateria = this._internarlService.retornarMateriaEscogida().idMateria;
    //console.log('Estoy en el Detalle Materia. Ahora tengo el idMateria de la materia: ',this.idMateria);
  }

  obtenerIDDeMiComponentePadre(){
    this.IDComponentePadre = this._internarlService.retornarIDComponentePadre();
    //console.log('recibi el ID del componente padre: ',this.IDComponentePadre);
  }

  aumentarMateria(){
    this._estudianteService.consulta(this._internarlService.
    retornarEstudianteEscogido().idEstudiante)
      .subscribe(
        res =>{
          console.log('RESPUESTA DEL SERVIDOR, ',res);
          res.find(registroEstudiante =>{
            let idRegistroEstudiante= registroEstudiante.id;

            this._materiaService.consultarMateriaEspecifica(this._internarlService.retornarMateriaEscogida().idMateria)
              .subscribe(
                resMateria =>{
                  console.log('RESPUESTA A CONSULTA MATERIA: ',resMateria);
                  resMateria.find(registroMateria =>
                      {
                        console.log('el id del registro Estudiante es: ',idRegistroEstudiante);
                        let idRegistroMateria = registroMateria.id;
                        console.log('el id del registro Materia es: ',idRegistroMateria);
                        this._materiaService.vincularMateriaConEstudiante(idRegistroMateria,idRegistroEstudiante)
                          .subscribe(
                            resultado => {
                              console.log('esto es lo que hago a continuación: ',resultado);
                              this._internarlService.aumentarContador();
                              this.irAlHome();
                            }
                          )
                      })
                }
              )
          })
        }
      )
  }


  verificarEstadoMateria(){
    this.obtenerIDDeMiComponentePadre();
    if(this.IDComponentePadre==1){
      this.esSeleccionable = false;
    }else if(this.IDComponentePadre==2){
      this.esSeleccionable = true;
    }
  }

  irAlHome (){
    const url = ['/Home/'];
    this._router.navigate(url);
  }

  obtenerMateriaEscogida(){
    this._materiaService.arregloConEstudianteBuscado(
      this.idMateria)
      .subscribe(
        res => {
          //console.log('estoy en Detalle Materia.  El resultado de la consulta es: ',res);
          this.listaMateriaEscogida = <Materia[]>res;
          //console.log('ahora mi arreglo de materia tiene: ',this.listaMateriaEscogida);
        }
      )
  }



}
