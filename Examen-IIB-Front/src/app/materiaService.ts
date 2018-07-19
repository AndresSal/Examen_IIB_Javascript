import {Injectable} from "@angular/core";
import {Materia} from "./Materia";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";


@Injectable(
  {providedIn: 'root'}
)
export class MateriaService {

  private URLListaMaterias = 'http://localhost:1337/Materia';
  private URLMateriasDisponibles = 'http://localhost:1337/Materia/?esDisponible=true';
  private URLMateriaEspecifica = 'http://localhost:1337/Materia/?idMateria=';
  private URLMateriasDeUnEstudiante = 'http://localhost:1337/Materia/?estudianteFK=';
  constructor(private _http:HttpClient){}

  consultarMateriasDisponibles():Observable <any>{
    return this._http.get<any>(this.URLMateriasDisponibles);
  }

  consultarMateriaEspecifica(id):Observable<any>{
    return this._http.get<Materia>(this.URLMateriaEspecifica+id);
  }

  vincularMateriaConEstudiante(idRegistroMateria: number, idRegistroEstudiante: number): Observable<any>{
    let nuevoURL = this.URLListaMaterias + '/'+idRegistroMateria;
    let cuerpoDeCambios = {
      esDisponible: false,
      estudianteFK : idRegistroEstudiante
    };
    return this._http.put<any>(nuevoURL,JSON.stringify(cuerpoDeCambios));
  }




  arregloConEstudianteBuscado(id):Observable<Materia[]>{
    return this._http.get<Materia[]>(this.URLMateriaEspecifica+id);
  }





  quitarMateriaDelEstudiante(idMateria: number): Observable<Materia[]>{
    let nuevoID= idMateria+10;
    let nuevoURL = this.URLListaMaterias+'/'+nuevoID;
    let cuerpoDeCambios = {
      esDisponible: true,
      estudianteFK : null
    };
    return this._http.put<Materia[]>(nuevoURL,JSON.stringify(cuerpoDeCambios));
  }


  eliminarMateriasDelEstudiante(materia):Observable<any>{
    let nuevoUrl = this.URLListaMaterias;
    let cuerpoDeCambios = {
      esDisponible: true,
      estudianteFK : null
    };
    let id = materia.id;
    console.log('el id de la materia es: ',id);
    nuevoUrl = nuevoUrl+'/'+id;
    return this._http.put<any>(nuevoUrl,JSON.stringify(cuerpoDeCambios));
  }



  consultarMateriasDeMiEstudiante(fkEstudiante: number): Observable<Materia[]>{
    let nuevoURL = this.URLMateriasDeUnEstudiante+fkEstudiante;
    return this._http.get<Materia[]>(nuevoURL);
  }

  MateriasDeMiEstudiante(fkEstudiante: number): Observable<any>{
    let nuevoURL = this.URLMateriasDeUnEstudiante+fkEstudiante;
    return this._http.get<any>(nuevoURL);
  }





}

