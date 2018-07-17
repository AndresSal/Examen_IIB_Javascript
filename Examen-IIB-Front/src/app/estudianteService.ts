import {EventEmitter, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Estudiante} from "./Estudiante";
import {Observable, of} from "rxjs/index";


@Injectable(
  {providedIn: 'root'}
)
export class EstudianteService{

  private URLListaEstudiantes = 'http://localhost:1337/Estudiante';
  private URLEstudianteEspecifico = 'http://localhost:1337/Estudiante/?idEstudiante=';
  contadorCarrito : EventEmitter<number> = new EventEmitter();

  constructor (private _http:HttpClient){}

  consultarListaEstudiantes():Observable<Estudiante[]>{
    return this._http.get<Estudiante[]>(this.URLListaEstudiantes);
  }

  arregloConEstudianteBuscado(id):Observable<Estudiante[]>{
    return this._http.get<Estudiante[]>(this.URLEstudianteEspecifico+id);
  }

  consulta(id):Observable<any>{
    return this._http.get<any>(this.URLEstudianteEspecifico+id);
  }

  eliminarEstudianteEscogido(idRegistro):Observable<any>{
    return this._http.delete(this.URLListaEstudiantes+'/'+idRegistro);
  }

  actualizarDetalleEstudiante(id, body):Observable<Estudiante[]>{
    let nuevoURL = this.URLListaEstudiantes+'/'+id;
    return this._http.put<Estudiante[]>(nuevoURL,JSON.stringify(body));
  }

  registrarNuevoEstudiante(body):Observable<Estudiante[]>{
    return this._http.post<Estudiante[]>(this.URLListaEstudiantes,JSON.stringify(body));
  }

  consultarEstudiantePorNombre(consulta:string):Observable<Estudiante[]>{
    if(!consulta.trim()){
      return of ([]);
    }
    return this._http.get<Estudiante[]>(this.URLListaEstudiantes+'/?nombreEstudiante='+consulta);
  }





}
