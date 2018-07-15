import {Injectable} from "@angular/core";
import {Materia} from "./Materia";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";


@Injectable(
  {providedIn: 'root'}
)
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

  arregloConEstudianteBuscado(id):Observable<Materia[]>{
    return this._http.get<Materia[]>(this.URLMateriaEspecifica+id);
  }

  actualizarDisponibilidadDeLaMateria(idMateria: number, idEstudiante:number): Observable<Materia[]>{
    let nuevoID= idMateria+10;
    let nuevoURL = this.URLListaMaterias+'/'+nuevoID;
    let cuerpoDeCambios = {
      esDisponible: true,
      estudianteFK : idEstudiante
    };
    return this._http.put<Materia[]>(nuevoURL,JSON.stringify(cuerpoDeCambios));
  }

}

