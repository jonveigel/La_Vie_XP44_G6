const { request } = require("express");
const { psycho } = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../config/secret");

const psychoController = {
  listPsycho: async (req, res) => {
    try {
      const listallPsycho = await psycho.findAll();

      res.json(listallPsycho).status(200);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: "Código de erro interno." });
    }
  },

  listbyId: async (req, res) => {
    //Trazer todas as informações, menos a senha

    const { id } = req.params;

    try {
      const psychobyId = await psycho.findByPk(id);

      if (!psychobyId) {
        return res.json("Id não encontrado.");
      }

      res.status(200).json(psychobyId);
      //erro 404
    } catch (error) {
      res.status(500).json("Código de erro interno.");
    }
  },

  createPsycho: async (req, res) => {
    try {
      const { name_psycho, email_psycho, pass, presentation } = req.body;
      const newPass = bcrypt.hashSync(pass, 10);
      const newPsycho = await psycho.create({
        name_psycho,
        email_psycho,
        pass: newPass,
        presentation,
      });

      return res.status(201).json(newPsycho);
      //erro 400
    } catch (error) {
      res.status(500).json("Código de erro interno.");
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name_psycho, email_psycho, pass, presentation } = req.body;
      const newPass = bcrypt.hashSync(pass, 10);
      const updatePsycho = await psycho.findByPk(id);

      if (!updatePsycho) {
        return res.status(404).json("Id não encontrado.");
      } else {
        await updatePsycho.update({
          name_psycho,
          email_psycho,
          pass: newPass,
          presentation,
        });
        res.status(200).json(updatePsycho);
      }
    } catch (error) {
      res.status(500).json("Código de erro interno.");
    }
  },

  destroy: async (req, res) => {
    try {
      const { id } = req.params;

      const psychoId = await psycho.destroy({ where: { id } });

      if (!psychoId) {
        return res.status(404).json("Id não encontrado.");
      } else {
        return await res.sendStatus(204);
      }
    } catch (error) {
      res.status(500).json("Código de erro interno.");
    }
  },
};

module.exports = psychoController;
