const router = require("express").Router();

const ingresarUsuario = require('../ingresarUsuario/ingresarUsuario.controller')


router.use('/', ingresarUsuario);

module.exports = router;