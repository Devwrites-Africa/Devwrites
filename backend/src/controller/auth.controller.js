const Auth = require('../service/auth.service');
const utils = require("../utils");

module.exports.login = async (req, res, next) => {
  try {
    const response = await Auth.login({
      ...req.body,
    });

    return utils.success(res).send(response)

  } catch (err) {
    next(err);
  }
}

module.exports.register = async (req, res, next) => {
  try {
    const response = await Auth.register({
      ...req.body,
    });

    return utils.success(res).send(response)

  } catch (err) {
    next(err);
  }
}