const router = require('express').Router();
const pacienteController = require('../paciente/paciente.controller')
const historiaController = require('../historia/historia.controller')
const motivoController = require('../motivo/motivo.controller')
const cajaController = require('../caja/caja.controller')
const movimientoController = require('../movimientoCaja/movimientoCaja.controller')
const citaController = require('../cita/cita.controller');
const userController = require('../user/user.controller')
const especialidadController = require('../../citas/Especialidad/gestespecialidad.controller');
const receMedicaController = require('../../citas/recetaMedica/recetaMedica.controller');
jwt = require('jsonwebtoken');

router.use('/paciente', pacienteController);
router.use('/motivo', motivoController);
router.use('/caja', cajaController);
router.use('/movimientoCaja', movimientoController);
router.use('/cita', verifyToken, citaController);
router.use('/historia', historiaController);
router.use('/user', userController);
router.use('/gestionar-especialidad', especialidadController);
router.use('/receta-medica', receMedicaController);

function verifyToken(req, res, next) {

    const auth = req.headers.authorization;
    console.log(auth);

    if (!req.headers.authorization) {
        return res.status(401).send('Unthorize Request')
    }

    const token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        return res.status(401).send('Unthorize Request')
    }
    console.log(token);

    const payload = jwt.verify(token, 'sign-api')
    console.log(payload);
    req.userId = payload._id;
    next();

}


module.exports = router;