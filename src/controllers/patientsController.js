const { patients, psycho, services } = require('../models/index');

const patientsController = {
    listPatients: async (req, res) => {
        const listPatients = await patients.findAll();
        res.json(listPatients);
    }
}



module.exports = patientsController;