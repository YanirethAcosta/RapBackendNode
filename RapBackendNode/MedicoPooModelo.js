class MedicoPooModelo {
  constructor() {
    if (!MedicoService.instance) {
      this.medicos = [];
      MedicoService.instance = this;
    }

    return MedicoService.instance;
  }

  getAllMedicos() {
    return this.medicos;
  }

  getMedicoById(idMedico) {
    return this.medicos.find(m => m.idMedico === idMedico);
  }

  addMedico(medico) {
    this.medicos.push(medico);
    return medico;
  }

  updateMedico(idMedico, data) {
    const index = this.medicos.findIndex(m => m.idMedico === idMedico);
    if (index === -1) return null;

    this.medicos[index] = { ...this.medicos[index], ...data };
    return this.medicos[index];
  }

  deleteMedico(idMedico) {
    const index = this.medicos.findIndex(m => m.idMedico === idMedico);
    if (index === -1) return null;

    const eliminado = this.medicos.splice(index, 1);
    return eliminado[0];
  }
}

// Exportar la única instancia del servicio (Singleton)
const instance = new MedicoPooModelo();
Object.freeze(instance); // Opcional: evita que se modifique la instancia

module.exports = instance;
