/*const express = require('express');
const router = express.Router();
const medicocontrolador = require('../controlador/MedicoControlador');

router.get('/', medicocontrolador.obtenerMedicos);
router.post('/guardar', medicocontrolador.crearMedico);
router.put('/:id', medicocontrolador.actualizarMedico);
router.delete('/:idMedico', medicocontrolador.eliminarMedico);

module.exports = router;*/

const express = require('express');
const router = express.Router();
const medicoControlador = require('../controlador/MedicoControlador');

// Obtener todos los médicos
router.get('/', medicoControlador.obtenerMedicos);

// Crear un nuevo médico
router.post('/guardar', medicoControlador.crearMedico);

// Actualizar un médico existente
router.put('/:id', medicoControlador.actualizarMedico);

// Eliminar un médico
router.delete('/:idMedico', medicoControlador.eliminarMedico);

module.exports = router;
