const citasController = require('../modules/citas/controller/citas.controller');
const farmaciaController = require('../modules/citas/controller/citas.controller');
const loginController = require('../components/User/controller/login.controller')
const rutas = function(app) {
    app.use('/domicilio', citasController)
    app.use('/virtual', farmaciaController)
    app.use('/login', loginController)
}

module.exports = rutas;