import {Injectable} from "@angular/core";

@Injectable()
export class InternalService {
  idEstudianteEscogido: number;
  constructor(){}

  cargarIdEstudianteEscogido(id:number){
    this.idEstudianteEscogido = id;
    console.log('en el internal service el id es: ',this.idEstudianteEscogido);
  }

  retornarIdEstudianteEscogido(){
    return this.idEstudianteEscogido;
  }
}
