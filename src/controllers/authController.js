const psycho = require("../models/psycho");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../config/secret");
const { services } = require("../models");

const authController = {
  login: async (req, res) => {
    try {
      const { email_psycho, pass } = req.body;
      const psychoLogin = await psycho.findOne({ where: { email_psycho } });

      if (!psychoLogin || !bcrypt.compareSync(pass, psychoLogin.pass)) {
        return res.status(401).json({
          error: "E-mail ou senha inválido, verifique e tente novamente.",
        });
      }

      const token = jwt.sign(
        {
          id: psycho.id,
          name_psycho: psycho.name_psycho,
          email_psycho: psycho.email_psycho,
        },
        secret.key
      );
      await jwt.verify(token, secret.key);

      return res.status(200).json(token);
    } catch (error) {
      res.status(500).json({ error: "Código de erro interno." });
    }
  },
};

module.exports = authController;
