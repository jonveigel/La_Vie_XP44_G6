const { request } = require('express');
const { psycho } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = require('../config/secret');


const psychoController = {

    listPsycho: async (req, res) => {

        try {
            
            const listallPsycho = await psycho.findAll();

            res.json(listallPsycho);

            //res.status(200).json({message:"Sucess"}); duas resposta na mesma logica

        } catch (error) {
            
            console.error(error.message);
            res.status(500).json({message:"deu ruim!"})

        }
    },

    listbyId: async (req, res) => { // sem senha aqui

        const { id } = req.params;

        try {

            const psychobyId = await psycho.findByPk(id);

            if (!psychobyId) {
                return res.json("não existe esse id");
            }

            res.status(200).json(psychobyId)

        } catch (error) {

            res.status(500).json({error: "deu ruim!"})

        }
    },

    createPsycho: async (req, res) => {
        
        try {
            
            const { name_psycho, email_psycho, pass, presentation } = req.body;
            
            const newPass = bcrypt.hashSync(pass, 10);

            const newPsycho = await psycho.create( { name_psycho, email_psycho, pass: newPass, presentation } );

            return res.status(201).json(newPsycho);

            
        } catch (error) {
            
            console.error(error.message);

            res.status(500).json({error: "deu ruim!"});
            
        }
    },

    update: async (req, res) => {

        try {

            const { id } = req.params;

            const { name_psycho, email_psycho, pass, presentation } = req.body;
            
            if (pass) {

                const newPass = bcrypt.hashSync(pass, 10);
                await psycho.update( { name_psycho, email_psycho, pass: newPass, presentation }, {where: {id}});

                return res.status(200).json("Psycho att!");
            } else {

                await psycho.update( { name_psycho, email_psycho, pass, presentation }, {where: {id}});

                return res.status(200).json("Psycho att!");
            }

        } catch (error) {

            res.status(400).json("deu erro!");

        }
    },

    destroy: async (req, res) => {

        try {
            
            const { id } = req.params;

            const psychoId = await psycho.destroy({where: {id}});

            

            if (!psychoId) {

                return res.status(404).json("não existe psycho com esse id")

            } else {

                return await res.status(204).json("")

            }

            

        } catch (error) {

            res.status(400).json("deu erro ao deletar!");

        }
    }
}


module.exports = psychoController;