const Validator = require("fastest-validator");
const validator = new Validator();

const {
  ValidationError
} = require("../../lib/errors");

const serviceWrapper = (action) => {
  const validate = action.params
    ? validator.compile(action.params)
    : null;

  return async function (params = {}) {
    if (validate) {
      const errors = validate(params);
      if (Array.isArray(errors)) {
        throw new ValidationError(errors);
      }
    }
    return action.handler(params);
  };
};

module.exports = serviceWrapper;