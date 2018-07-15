import {Injectable} from "@angular/core";
import {Materia} from "./Materia";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Estudiante} from "./Estudiante";

@Injectable()
export class MateriaService {

  private URLListaMaterias = 'http://localhost:1337/Materia';
  private URLMateriaEspecifica = 'http://localhost:1337/Materia/?idMateria=';
  constructor(private _http:HttpClient){}

  consultarListaMaterias():Observable<Materia[]>{
    return this._http.get<Materia[]>(this.URLListaMaterias);
  }

  consultarMateriaEspecifica(id):Observable<Materia>{
    return this._http.get<Materia>(this.URLMateriaEspecifica+id);
  }

}

