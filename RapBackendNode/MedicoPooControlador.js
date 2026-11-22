const medicoService = require('../modelo/MedicoPooModelo');

class MedicoPooControlador {
  obtenerMedicos(req, res) {
    const medicos = medicoService.getAllMedicos();
    res.json(medicos);
  }

  crearMedico(req, res) {
    const { t1: idMedico, t2: identificacion, t3: nombres, t4: telefono, t5: correo } = req.body;

    if (medicoService.getMedicoById(idMedico)) {
      return res.status(400).json({ error: 'El médico ya existe' });
    }

    const nuevo = {
      idMedico,
      identificacion,
      nombres,
      telefono,
      correo
    };

    const medicoCreado = medicoService.addMedico(nuevo);
    res.status(201).json(medicoCreado);
  }

  actualizarMedico(req, res) {
    const id = req.params.id;
    const data = req.body;

    const actualizado = medicoService.updateMedico(id, data);
    if (!actualizado) {
      return res.status(404).json({ error: 'Médico no encontrado' });
    }

    res.json(actualizado);
  }

  eliminarMedico(req, res) {
    const id = req.params.idMedico;

    const eliminado = medicoService.deleteMedico(id);
    if (!eliminado) {
      return res.status(404).json({ error: 'Médico no encontrado' });
    }

    res.json({ mensaje: 'Médico eliminado', medico: eliminado });
  }
}

// Exportar una instancia (para que funcione igual que antes)
module.exports = new MedicoPooControlador();
