export interface Materia {
  idMateria: number;
  nombreMateria: string;
  codigoMateria: string;
  descripcionMateria: string;
  esDisponible: boolean;
  fechaCreacion: string;
  numeroHorasXSemana: number;
}

// export class Materia {
//   constructor ( public idMateria?: number,
//                 public nombreMateria?: string,
//                 public codigoMateria?: string,
//                 public descripcionMateria?: string,
//                 public esDisponible?: boolean,
//                 public fechaCreacion?: Date,
//                 public numeroHorasXSemana?: number,
//                 public idEstudiante?: number) {}
// }
