export interface Estudiante {
  idEstudiante: number;
  nombreEstudiante: string;
  apellidoEstudiante: string;
  fechaNacimiento: string;
  esGraduado: boolean;
  semestreActual: number;
  fotoEstudiante: string;

}

// export class Estudiante {
//   constructor (
//     public idEstudiante?: number,
//     public nombreEstudiante?: string,
//     public apellidoEstudiante?: string,
//     public fechaNacimiento?: string,
//     public esGraduado?: boolean,
//     public semestreActual?: number,
//     public materiasEstudiante?: Array<any>,
//     public fotoEstudiante?: string
//   ) { }
// }
