const citasController = require('../modules/citas/controller/citas.controller');
const farmaciaController = require('../modules/citas/controller/citas.controller');

const rutas = function(app) {
    app.use('/domicilio', citasController)
    app.use('/virtual', farmaciaController)
}

module.exports = rutas;