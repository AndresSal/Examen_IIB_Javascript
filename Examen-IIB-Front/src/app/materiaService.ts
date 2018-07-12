import {Injectable} from "@angular/core";
import {Materia} from "./Materia";
import {HttpClient} from "@angular/common/http";
import { HttpModule } from '@angular/http';

@Injectable()
export class MateriaService {
  constructor(private _http:HttpClient){}

  obtenerListaMaterias(){
    return this._http.get<any>('http://localhost:1337/Materia')
      .toPromise()
      .then(res => <Materia[]>res.data)
      .then(data => { return data; });
  }
}
