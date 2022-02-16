const bcrypt = require("bcrypt");
const authConfig = require("../config/auth");
const httpMessage = require("../helpers/httpMessage");

module.exports = {
  // Encriptamos la contraseña por razones de seguridad
  encrypt(password) {
    return bcrypt.hashSync(password, Number.parseInt(authConfig.rounds));
  },

  // Comparamos la clave
  comparePassword(passwordEncrypt, passwordBase) {
    try {
      return bcrypt.compareSync(passwordEncrypt, passwordBase);
    } catch (error) {
      httpMessage.Error(req, res, error);
    }
  },
};
