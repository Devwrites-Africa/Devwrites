const serviceWrapper = require('./core/serverWrapper');
const models = require("../models");
const utils = require("../utils");
const { TOKEN_FLAG } = require("../config/constants");
const { NotFoundError, ServiceError } = require('../lib/errors');

module.exports.register = serviceWrapper({
  params: {
    email: {
      type: "email",
    },
    password: {
      type: "string",
      min: 4,
    },
  },
  async handler ({ email, password }) {
    const existingAccount = await models.Account.findOne({
      email
    });

    if (existingAccount) throw new ServiceError("account already exists");

    const newAccount = await models.Account.create({
      password: await utils.bcryptHash(password),
      email,
    });

    await models.Author.create({
      accountId: newAccount._id
    });

    const authToken = await utils.generateJWTToken({
      id: newAccount.id,
      flag: TOKEN_FLAG.AUTH
    })

    return {
      account: newAccount.toJSON(),
      token: authToken,
    }
  }
})

module.exports.login = serviceWrapper({
  params: {
    email: {
      type: "email",
    },
    password: {
      type: "string",
      min: 4,
    },
  },
  async handler ({ email, password }) {
    const account = await models.Account.findOne({
      email
    });

    if (!account) throw new ServiceError("account doesn't exists");

    const passwordMatch = await utils.bcryptCompare(password, account.password);

    if (!passwordMatch) throw new ServiceError("password does not match");

    await models.Account.updateOne({ _id: account._id }, { lastSeen: new Date() });

    const authToken = await utils.generateJWTToken({
      id: account.id,
      flag: TOKEN_FLAG.AUTH
    })

    return {
      account: account.toJSON(),
      token: authToken,
    }
  }
})
