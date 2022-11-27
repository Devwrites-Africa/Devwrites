const config = require("../config");
const logger = require("../lib/logger");

module.exports.notFoundHandler = (req, res) => {
  return res.status(404).send({
    status: "error",
    message: "endpoint not found"
  });
};

module.exports.errorHandler = (err, req, res, next) => {
  console.log(err)
  if (res.headersSent) return next(err);
  switch (err.name) {
    case "ServiceError":
      logger.error("error processing request", {
        url: req.url, 
        body: req.body, 
        error: err.message 
      });
      return res.status(400).send({
        status: "error",
        message: err.message
      });
    case "NotFoundError":
      return res.status(404).send({
        status: "error",
        message: err.message
      });
    case "ValidationError":
      return res.status(422).send({
        status: "error",
        message: err.message,
        errors: err.errors
      });
    case "AuthenticationError":
      return res.status(401).send({
        status: "error",
        message: err.message
      });
    case "AuthorizationError":
      return res.status(403).send({
        status: "error",
        message: err.message
      });
    default:
      logger.error(err);
      return res.status(500).send({
        status: "error",
        message: "an error occurred",
        ...(
          config.env.isProduction
            ? {}
            : { error: err.message || err.toString() }
        )
      });
  }
};
