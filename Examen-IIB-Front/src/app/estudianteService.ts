import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Estudiante} from "./Estudiante";


@Injectable()
export class EstudianteService{
  url =  'http://localhost:1337/Estudiante';

  constructor (private _http:HttpClient){
  }


  obtenerListaEstudiantes(){
    return this._http.get<any>('http://localhost:1337/Estudiante')
      .toPromise()
      .then(res => <Estudiante[]>res)
      .then(data => { return data; });
  }

}
