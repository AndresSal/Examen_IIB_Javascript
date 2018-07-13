/**
 * MateriaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  materias:( (req,res) => {
    let materias = [
      {
        "idMateria": 1,
        "nombreMateria": "Matemáticas",
        "codigoMateria": "MAT001",
        "descripcionMateria": "Algebra Lineal",
        "esDisponible": false,
        "fechaCreacion": "12/02/2015",
        "numHorasXSemana": 8
      },
      {
        "idMateria": 2,
        "nombreMateria": "Geometría",
        "codigoMateria": "GEO001",
        "descripcionMateria": "Geometría Plana y Trigonométrica",
        "esDisponible": true,
        "fechaCreacion": "12/02/2015",
        "numHorasXSemana": 6
      },
      {
        "idMateria": 3,
        "nombreMateria": "Fisica",
        "codigoMateria": "FIS001",
        "descripcionMateria": "Fisica Vectorial y del Espacio",
        "esDisponible": true,
        "fechaCreacion": "12/02/2015",
        "numHorasXSemana": 10
      },
      {
        "idMateria": 4,
        "nombreMateria": "Quimica",
        "codigoMateria": "QUI001",
        "descripcionMateria": "Quimica organica y molecular",
        "esDisponible": true,
        "fechaCreacion": "12/02/2015",
        "numHorasXSemana": 4
      },
      {
        "idMateria": 5,
        "nombreMateria": "Ingles",
        "codigoMateria": "ING001",
        "descripcionMateria": "Ingles nivel básico",
        "esDisponible": true,
        "fechaCreacion": "13/01/2015",
        "numHorasXSemana": 10
      },
      {
        "idMateria": 6,
        "nombreMateria": "Lenguaje",
        "codigoMateria": "LEG001",
        "descripcionMateria": "Expresión Oral y Escrita",
        "esDisponible": true,
        "fechaCreacion": "12/02/2015",
        "numHorasXSemana": 4
      },
      {
        "idMateria": 7,
        "nombreMateria": "Geometría Analítica",
        "codigoMateria": "GEA001",
        "descripcionMateria": "Geometría análitica y plana",
        "esDisponible": true,
        "fechaCreacion": "12/02/2015",
        "numHorasXSemana": 4
      },
      {
        "idMateria": 8,
        "nombreMateria": "Estadística",
        "codigoMateria": "EST001",
        "descripcionMateria": "Estadistica y probabilidades",
        "esDisponible": true,
        "fechaCreacion": "12/02/2015",
        "numHorasXSemana": 6
      },
      {
        "idMateria": 9,
        "nombreMateria": "Programación",
        "codigoMateria": "PRO001",
        "descripcionMateria": "Programación orientada a objetos",
        "esDisponible": true,
        "fechaCreacion": "12/02/2015",
        "numHorasXSemana": 8
      },
      {
        "idMateria": 10,
        "nombreMateria": "Algoritmos",
        "codigoMateria": "ALG001",
        "descripcionMateria": "Algoritmos de ordenamiento y busqueda",
        "esDisponible": true,
        "fechaCreacion": "12/02/2015",
        "numHorasXSemana": 6
      }
    ]
    res.json(materias)
})

};

