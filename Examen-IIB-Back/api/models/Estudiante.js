/**
 * Estudiante.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    idEstudiante: {
      type: 'number',
      required: true
    },
    nombreEstudiante: {
      type: 'string',
      required: true
    },
    apellidoEstudiante: {
      type: 'string',
      required: true
    },
    fechaNacimiento: {
      type: 'string',
      required: false
    },
    esGraduado: {
      type: 'boolean',
      required: false
    },
    semestreActual: {
      type: 'number',
      required: false
    },
    fotoEstudiante: {
      type: 'string',
      required: false
    },
    // materiasEstudiante: {
    //   collection: 'Materia',
    //   via: 'estudianteFK'
    // }

  },

};

