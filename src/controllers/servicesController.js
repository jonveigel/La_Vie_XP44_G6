const { services, psycho, patients } = require("../models/index");

const servicesController = {
  listServices: async (req, res) => {
    try {
      const listallServices = await services.findAll({ include: patients });

      res.status(200).json(listallServices);
    } catch (error) {
      res.status(500).json("Código de erro interno.");
    }
  },

  listbyId: async (req, res) => {
    try {
      const { id } = req.params;

      const listService = await services.findByPk(id);

      if (listService) {
        return res.status(200).json(listService);
      }

      res.status(404).json("Id não encontrado.");
    } catch (error) {
      res.status(500).json("Código de erro interno.");
    }
  },

  createService: async (req, res) => {
    const { patient_id, psycho_id, service_date, note } = req.body;

    try {
      const newService = await services.create({
        patient_id,
        psycho_id,
        service_date,
        note,
      });
      //Verificar token JWT
      //Verificar erro 400
      return res.status(201).json(newService);
    } catch (error) {
      res.status(500).json("Código de erro interno.");
    }
  },
};

module.exports = servicesController;
