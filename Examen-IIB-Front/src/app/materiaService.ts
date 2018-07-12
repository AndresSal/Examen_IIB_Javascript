import {Injectable} from "@angular/core";
import {Materia} from "./Materia";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MateriaService {
  constructor(private _http:HttpClient){}

  obtenerMaterias() {
    return this._http.get<any>('http://localhost:1337/Materia')
      .toPromise()
      .then(res => <Materia[]>res)
      .then(data => { return data; });
  }
}

