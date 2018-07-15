import {Injectable} from "@angular/core";
import {Estudiante} from "./Estudiante";
import {Materia} from "./Materia";

@Injectable()
export class InternalService {

  estudianteEscogido: Estudiante;
  materiaEscogida: Materia;
  IDComponentePadre: number;
  contadorCarrito: number;

  constructor(){}

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
    this.contadorCarrito = 0;
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
    return ++this.contadorCarrito;
  }

  disminuirContador(){
    return --this.contadorCarrito;
  }

  retornarContador(){
    return this.contadorCarrito;
  }




}
