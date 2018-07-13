/**
 * EstudianteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  estudiantes:( (req,res) => {
    let estudiantes = [
      {
        "idEstudiante": 1,
        "nombreEstudiante": "Andres",
        "apellidoEstudiante": "Salazar",
        "fechaNacimiento": "17/10/1995",
        "esGraduado": false,
        "semestreActual": 8,
        "fotoEstudiante": "https://material.angular.io/assets/img/examples/shiba2.jpg"
      },
      {
        "idEstudiante": 2,
        "nombreEstudiante": "William",
        "apellidoEstudiante": "Rawlins",
        "fechaNacimiento": "07/01/1998",
        "esGraduado": false,
        "semestreActual": 3,
        "fotoEstudiante": "https://material.angular.io/assets/img/examples/shiba2.jpg"
      },
      {
        "idEstudiante": 3,
        "nombreEstudiante": "David",
        "apellidoEstudiante": "Liberman",
        "fechaNacimiento": "04/08/1990",
        "esGraduado": false,
        "semestreActual": 6,
        "fotoEstudiante": "https://material.angular.io/assets/img/examples/shiba2.jpg"
      },
      {
        "idEstudiante": 4,
        "nombreEstudiante": "Bill",
        "apellidoEstudiante": "Russo",
        "fechaNacimiento": "04/08/1994",
        "esGraduado": false,
        "semestreActual": 9,
        "fotoEstudiante": "https://material.angular.io/assets/img/examples/shiba2.jpg"
      },
      {
        "idEstudiante": 5,
        "nombreEstudiante": "Dina",
        "apellidoEstudiante": "Madani",
        "fechaNacimiento": "05/09/1998",
        "esGraduado": false,
        "semestreActual": 2,
        "fotoEstudiante": "https://material.angular.io/assets/img/examples/shiba2.jpg"
      },
      {
        "idEstudiante": 6,
        "nombreEstudiante": "Lewis",
        "apellidoEstudiante": "Wilson",
        "fechaNacimiento": "01/02/1993",
        "esGraduado": true,
        "semestreActual": 9,
        "fotoEstudiante": "https://material.angular.io/assets/img/examples/shiba2.jpg"
      },
      {
        "idEstudiante": 7,
        "nombreEstudiante": "Maria",
        "apellidoEstudiante": "Castle",
        "fechaNacimiento": "12/08/1993",
        "esGraduado": true,
        "semestreActual": 9,
        "fotoEstudiante": "https://material.angular.io/assets/img/examples/shiba2.jpg"
      },
      {
        "idEstudiante": 8,
        "nombreEstudiante": "Karl",
        "apellidoEstudiante": "Lucas",
        "fechaNacimiento": "12/08/1995",
        "esGraduado": true,
        "semestreActual": 9,
        "fotoEstudiante": "https://material.angular.io/assets/img/examples/shiba2.jpg"
      },
      {
        "idEstudiante": 9,
        "nombreEstudiante": "Foggy",
        "apellidoEstudiante": "Nelson",
        "fechaNacimiento": "08/09/1996",
        "esGraduado": false,
        "semestreActual": 4,
        "fotoEstudiante": "https://material.angular.io/assets/img/examples/shiba2.jpg"
      },
      {
        "idEstudiante": 10,
        "nombreEstudiante": "Dave",
        "apellidoEstudiante": "Mustaine",
        "fechaNacimiento": "10/10/1999",
        "esGraduado": false,
        "semestreActual": 1,
        "fotoEstudiante": "https://material.angular.io/assets/img/examples/shiba2.jpg"
      }
    ]
    res.json(estudiantes)
})


};

