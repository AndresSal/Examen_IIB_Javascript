import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Estudiante} from "./Estudiante";
import {Observable} from "rxjs/index";


@Injectable(
  {providedIn: 'root'}
)
export class EstudianteService{

  private URLListaEstudiantes = 'http://localhost:1337/Estudiante';
  private URLEstudianteEspecifico = 'http://localhost:1337/Estudiante/?idEstudiante=';

  constructor (private _http:HttpClient){}

  consultarListaEstudiantes():Observable<Estudiante[]>{
    return this._http.get<Estudiante[]>(this.URLListaEstudiantes);
  }

  arregloConEstudianteBuscado(id):Observable<Estudiante[]>{
    return this._http.get<Estudiante[]>(this.URLEstudianteEspecifico+id);
  }

  actualizarDetalleEstudiante(id, body):Observable<Estudiante[]>{
    let nuevoURL = this.URLListaEstudiantes+'/'+id;
    return this._http.put<Estudiante[]>(nuevoURL,JSON.stringify(body));
  }


}
