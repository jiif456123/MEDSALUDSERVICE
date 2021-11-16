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
const especialController = require('../../citas/especial/especial.controller');

router.use('/paciente', pacienteController);
router.use('/motivo', motivoController);
router.use('/caja', cajaController);
router.use('/movimientoCaja', movimientoController);
router.use('/cita', citaController);
router.use('/historia', historiaController);
router.use('/user', userController);
router.use('/gestionar-especialidad', especialidadController);
router.use('/receta-medica', receMedicaController);
router.use('/especial', especialController);

module.exports = router;