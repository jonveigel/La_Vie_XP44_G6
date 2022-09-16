const { patients, psycho, services } = require("../models/index");

const patientsController = {
  listPatients: async (req, res) => {
    try {
      const listPatients = await patients.findAll();
      res.status(200).json(listPatients);
    } catch (error) {
      res.status(500).json("Código de erro interno.");
    }
  },

  listbyId: async (req, res) => {
    const { id } = req.params;

    try {
      const findbyId = await patients.findByPk(id);
      if (findbyId) {
        return res.status(200).json(findbyId);
      } else {
        res.status(404).json("Id não encontrado.");
      }
    } catch (error) {
      res.status(500).json("Código de erro interno.");
    }
  },

  createPatients: async (req, res) => {
    try {
      const { name_patient, born, email } = req.body;
      const newPatient = await patients.create({ name_patient, born, email });

      res.status(201).json(newPatient);
    } catch (error) {
      res.status(400).json("Não foi possivel cadastrar.");
    }
  },

  update: async (req, res) => {
    

    try {
      const { id } = req.params;

      const { name_patient, born, email } = req.body;

      const updatePatient = await patients.findByPk(id);

      if(!updatePatient) {
        return res.status(404).json("Id não encontrado.");
      }

      await updatePatient.update({ name_patient, born, email }, { where: { id } });

      res.status(200).json(updatePatient);
    } catch (error) {
      res.status(400).json("Não foi possivel atualizar!");
    }
  },

  destroy: async (req, res) => {
    const { id } = req.params;

    try {
      const patientId = await patients.destroy({ where: { id } });
      if (!patientId) {
        return res.status(404).json("Id não encontrado.");
      }
      res.sendStatus(204);      
    } catch (error) {
      res.status(500).json("Código de erro interno.");
    }
  },
};

module.exports = patientsController;
