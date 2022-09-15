const pyscho = require("../models/psycho");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../config/secret");
const psycho = require("../models/psycho");

const authController = {
  login: async (req, res) => {
    try {
      const { email_psycho, pass } = req.body;
      const psychoLogin = await psycho.findOne({ where: { email_psycho } });

      if (!psychoLogin || !bcrypt.compareSync(pass, psychoLogin.pass)) {
        return res
          .status(401)
          .json({
            error: "e-mail ou senha invalido, verifique e tente novamente",
          });
      }

      const token = jwt.sign(
        {
          id: psycho.id,
          name_psycho: psycho.name_psycho,
          email_psycho: psycho.email_pyscho,
        },
        secret.key
      );
      await jwt.verify(token, secret.key);

      return res.json(token);
    } catch (error) {
      res.status(500).json({ error: "deu ruim ein!" });
    }
  },
};
