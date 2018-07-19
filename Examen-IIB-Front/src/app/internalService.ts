import {EventEmitter, Injectable} from "@angular/core";
import {Estudiante} from "./Estudiante";
import {Materia} from "./Materia";
import {MateriaService} from "./materiaService";
import {EstudianteService} from "./estudianteService";

@Injectable()
export class InternalService {

  estudianteEscogido: Estudiante;
  materiaEscogida: Materia;
  IDComponentePadre: number;
  contadorCarrito:number;
  emisorDelContador: EventEmitter <number> = new EventEmitter<number>();
  montoTotal: number;

  constructor(private _materiaService: MateriaService,
              private _estudianteService: EstudianteService){
    this.contadorCarrito = 0;
  }

  cargarIDComponentePadre(id: number){
    this.IDComponentePadre = id;
    console.log('ahora el ID del padre es ',this.IDComponentePadre);
  }

  retornarIDComponentePadre(){
    return this.IDComponentePadre;
  }

  cargarEstudianteEscogido(estudiante: Estudiante){
    this.estudianteEscogido = estudiante;
    this.contadorCarrito = 0;
    console.log('estudiante actual: ',this.estudianteEscogido);

    this._estudianteService.consulta(
      this.retornarEstudianteEscogido().idEstudiante)
      .subscribe(
        res => {
          res.find(estudiante =>{
            let idRegistroEstudiante = estudiante.id;
            this._materiaService.MateriasDeMiEstudiante(idRegistroEstudiante)
              .subscribe(
                respuesta =>{
                  let numItems=0;
                  if(typeof respuesta != "undefined"){
                    respuesta.forEach(mat =>
                    {
                      // numItems++;
                      this.contadorCarrito++;
                      console.log('EL INTERNAL DICE: ahora tengo ',numItems,' items');

                    })
                  }
                  // console.log('TOTAL NUMERO DE ITEMS: ',numItems);
                  this.emitirContadorCarrito(this.contadorCarrito);
                }
              )
          })
        }
      )
  }

  emitirContadorCarrito (numItems: number){
    this.emisorDelContador.emit(numItems);
  }


  retornarEstudianteEscogido(){
    return this.estudianteEscogido;
  }

  cargarMateriaEscogida(materia: Materia){
    this.materiaEscogida = materia;
    console.log('materia escogida: ',this.materiaEscogida);
  }

  retornarMateriaEscogida (){
    return this.materiaEscogida;
  }

  aumentarContador(){
    this.contadorCarrito = ++this.contadorCarrito;
    // console.log('EL INTERNAL dice que el contador aumento a ',this.contadorCarrito);
    this.emitirContadorCarrito(this.contadorCarrito);
  }

  disminuirContador(){
    this.contadorCarrito = --this.contadorCarrito;
    // console.log('EL INTERNAL dice que el contador disminuyo a ',this.contadorCarrito);
    this.emitirContadorCarrito(this.contadorCarrito);
  }

  setearContador(){
    this.contadorCarrito = 0;
  }

  setearEstudiante(){
    this.estudianteEscogido = null;
  }

  retornarContador(){
    return this.contadorCarrito;
  }

  cargarMontoTotal(montoFinal){
    this.montoTotal = montoFinal;
  }

  retornarMontoTotal(){
    return this.montoTotal;
  }




}
