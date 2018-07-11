import {Injectable} from "@angular/core";
import {Materia} from "./Materia";
import {Car} from "./Car";
import {HttpClient} from "@angular/common/http";
import { HttpModule } from '@angular/http';

@Injectable()
export class MateriaService {
  constructor(private _http:HttpClient){}

  obtenerListaMaterias(){
    return this._http.get<any>('/primeui/showcase/resources/data/cars-large.json')
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => { return data; });
  }
}
