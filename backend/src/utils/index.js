const snakeCase = require("snakecase-keys");
const camelCase = require("camelcase-keys-deep");
const config = require("../config");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const { Types } = require("mongoose");


async function bcryptHash(password) {
  return bcrypt.hash(password, config.app.bcryptRounds);
}

async function bcryptCompare(password, hash) {
  return bcrypt.compare(password, hash);
}

function $id(id) {
  return Types.ObjectId(id);
}

function toCamelCase(data = {}) {
  return camelCase(data, { deep: true })
}

async function generateJWTToken(payload, secret = config.app.secret) {
  return new Promise((resolve, reject) => {
    jwt.sign({
      ...payload,
    }, secret, { expiresIn: "720h" }, (err, token) => {
      if (err) {
        reject(err);
      }
      resolve(token);
    });
  });
}

async function decodeToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.app.secret, (err, decoded) => {
      if (err) {
        reject(err);
      }
      resolve(decoded);
    });
  });
}

function sluggify (str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function success (res) {
  return {
    send: (data, others = {}) => {
      return res.status(200).json({
        data: snakeCase(data, { deep: true }),
        ...snakeCase(others, { deep: true }),
        status: "ok"
      });
    }
  }
}

module.exports = {
  bcryptHash,
  bcryptCompare,
  generateJWTToken,
  decodeToken,
  success,
  toCamelCase,
  sluggify,
  $id
};