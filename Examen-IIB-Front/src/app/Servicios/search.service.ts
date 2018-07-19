import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs/index";
import {Estudiante} from "../Estudiante";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  URLEstudiantes = 'http://localhost:1337/Estudiante';
  URLMaterias = 'http://localhost:1337/Materia';

  constructor(private _httpClient: HttpClient) { }


  buscador(consulta: string): Observable<any> {
    if(!consulta.trim()){
      return of ([]);
    }
    try{
      return this._httpClient.get<any>(this.URLEstudiantes+'/?nombreEstudiante='+consulta);
    }catch(e){
      console.log('recibi esto, ',e);
      return this._httpClient.get<any>(this.URLMaterias+'/?nombreMateria='+consulta);
    }
  }


}
