const { request } = require('express');
const { patients, psycho, services } = require('../models/index');

const patientsController = {

    listPatients: async (req, res) => {

    try {

        const listPatients = await patients.findAll();
        res.json(listPatients);

    } catch (error) {

        console.error(error.message);
        res.json({error: "vish deu ruim!"});

    }
},

    createPatients: async (req, res) => {

        try {
            
            const { name_patient, born, email } = req.body;
            const newPatient = await patients.create({name_patient, born, email});

            res.json(newPatient);

        } catch (error) {

            console.error('deu erro ein!');

        }
},
     
    listbyId: async (req, res) => {

        const { id } = req.params;

        try {
            const findbyId = await patients.findByPk(id);
            if (findbyId) {
                return res.json(findbyId);
            } else {
                console.error("id não encontrado!")
            }
        } catch (error) {
            console.error("deu ruim :(");
        }
    },

    update: async (req, res) => {
        const { id } = req.params;

        try {
            
            const { name_patient, born, email } = req.body;

            await patients.update({name_patient, born, email}, {where: {id}})

            return res.status(200).json("Patient att!")

        } catch (error) {

            res.status(400).json("Não foi possivel atualizar :(")

        }
    },

    destroy: async (req, res) => {
        const { id } = req.params;

        try {
            const patientId = await patients.destroy( {where: {id} } );
            res.status(204).json('');

            if(!patientId) {
                return res.status(404).json("Não existe esse id!")
            }
        } catch (error) {
            res.json("Não foi possivel deletar!")
        }
    }
}


module.exports = patientsController;







