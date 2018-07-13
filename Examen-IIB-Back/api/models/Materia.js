/**
 * Materia.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    idMateria : {
      type: 'number',
      autoIncrement: true
    },
    nombreMateria : {
      type: 'string',
      required: true
    },
    codigoMateria : {
      type: 'string',
      required: false
    },
    descripcionMateria : {
      type: 'string',
      required: false
    },
    esDisponible : {
      type: 'boolean',
      required: true
    },
    fechaCreacion : {
      type: 'string',
      required: false
    },
    numHorasXSemana : {
      type: 'number',
      required: false
    },
    // estudianteFK: {
    //   model: 'Estudiante'
    // }
  },

};

