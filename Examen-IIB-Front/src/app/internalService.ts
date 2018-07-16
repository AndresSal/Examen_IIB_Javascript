import {Injectable} from "@angular/core";
import {Estudiante} from "./Estudiante";
import {Materia} from "./Materia";
import {EstudianteService} from "./estudianteService";
import {MateriaService} from "./materiaService";

@Injectable()
export class InternalService {

  estudianteEscogido: Estudiante;
  materiaEscogida: Materia;
  IDComponentePadre: number;
  contadorCarrito: number;
  montoTotal: number;

  constructor(private _materiaService: MateriaService){}

  cargarIDComponentePadre(id: number){
    this.IDComponentePadre = id;
    console.log('ahora el ID del padre es ',this.IDComponentePadre);
  }

  retornarIDComponentePadre(){
    return this.IDComponentePadre;
  }

  cargarEstudianteEscogido(estudiante: Estudiante){
    this.estudianteEscogido = estudiante;
    console.log('estudiante actual: ',this.estudianteEscogido);

    this._materiaService.MateriasDeMiEstudiante
    (this.estudianteEscogido.idEstudiante)
      .subscribe(res =>{
        let numItems=0;
        if(typeof res != "undefined"){
          res.forEach(mat =>
          {
            numItems++;
            console.log('EL INTERNAL DICE: ahora tengo ',numItems,' items');

          })
        }
        console.log('TOTAL NUMERO DE ITEMS: ',numItems);
        this.contadorCarrito = numItems;

      })
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
    console.log('EL INTERNAL dice que el contador aumento a ',this.contadorCarrito);
  }

  disminuirContador(){
    this.contadorCarrito = --this.contadorCarrito;
    console.log('EL INTERNAL dice que el contador disminuyo a ',this.contadorCarrito);
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
