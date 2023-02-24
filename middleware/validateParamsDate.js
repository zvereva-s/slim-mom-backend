const { requestError } = require("../utils");

function validateParamsDate(template) {
  function func(req, _, next) {
    const { error } = template.validate(req.params.date);
    if (error) {
      next(requestError(400, error.message));
    }
    next();
  }
  return func;
}

module.exports = validateParamsDate;
