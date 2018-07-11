export class Estudiante {
  constructor (
    public idEstudiante?: number,
    public nombre?: string,
    public apellido?: string,
    public fechaNacimiento?: Date,
    public graduado?: boolean,
    public semestreActual?: number,
    public misMaterias?: Array<any>
  ) { }
}
