import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Estudiante} from "./Estudiante";
import {Observable, of} from "rxjs/index";
import {MessageService} from "./message.service";
import { catchError, map, tap } from 'rxjs/operators';
import {Materia} from "./Materia";


@Injectable()
export class EstudianteService{

  constructor (private _http:HttpClient,
               private _messageService: MessageService){}

  private log(message: string){
    this._messageService.add(`EstudianteService: ${message}`);
  }
  private listaEstudiantesUrl = 'http://localhost:1337/Estudiante';
  private estudianteUrl = 'http://localhost:1337/Estudiante/?idEstudiante=';

  private handlerError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  verListaEstudiantes (){
    return this._http.get(this.listaEstudiantesUrl)
      .subscribe(response=>
        console.log('esto responde el servidor: ',response)
      );
  }

  obtenerListaEstudiantes() {
    return this._http.get<Estudiante>(this.listaEstudiantesUrl)
      .toPromise()
      .then(res => res as Estudiante[]);
  }



  // consultarEstudianteEspecifico(id:number){
  //   const URL = `${this.listaEstudiantesUrl}/${id}`;
  //   return this._http.get<Estudiante>(URL)
  //     .pipe(
  //       tap( _=> this.log(`estudiante conseguido id=${id}`)),
  //       catchError(this.handlerError<Estudiante>(`getEstudiante id=${id}`))
  //     );
  // }

  consultarEstudianteEspecifico(id:number){
    return this._http.get<Estudiante>(`${this.listaEstudiantesUrl}/${id}`)
      .toPromise()
      .then(res => (<Estudiante[]>res))
      .then(data => { return data; });
  }

}
