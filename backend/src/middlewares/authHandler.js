const {
  AuthenticationError
} = require("../lib/errors");
const models = require("../models");
const utils = require("../utils");

module.exports.isAuthenticatedAccount = (tokenFlag = "AUTH") => {
  return async (req, res, next) => {
    try {
      req.session = req.session || {};
      const authorization = req.header("authorization") || "";
      const token = authorization.split(" ")[1];
      if (!token) {
        return next(new AuthenticationError("you need to be authenticated to access this endpoint"));
      }

      const { id, flag } = await utils.decodeToken(token);

      if (!id) {
        return next(new AuthenticationError("unable to verify token"));
      }

      if (flag !== tokenFlag) {
        return next(new AuthenticationError("token is not valid for " + tokenFlag));
      }

      const account = await models.Account.findOne({id})

      if (!account || tokenFlag === "AUTH") {
        return next(new AuthenticationError("token is invalid"));
      }

      req.session.account = account.toJSON();
      next();
    } catch (e) {
      switch (e.name) {
        case "TokenExpiredError":
          return next(new AuthenticationError("token has expired"));
        case "JsonWebTokenError":
          return next(new AuthenticationError(e.message));
        case "NotBeforeError":
          return next(new AuthenticationError(e.message));
        default:
          return next(e);
      }
    }
  };
};
