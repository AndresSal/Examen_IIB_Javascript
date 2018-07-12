export class Materia {
  constructor ( public idMateria?: number,
                public nombreMateria?: string,
                public codigoMateria?: string,
                public descripcionMateria?: string,
                public fechaCreacion?: Date,
                public numeroHorasPorSemana?: number,
                public esDisponible?: boolean,
                public idEstudiante?: number) {}
}
