const { isAuthenticatedAccount } = require('../middlewares/authHandler');
const authorController = require("../controller/author.controller");

const router = require('express').Router();


//router.post("/author", authorController.createAuthor);

module.exports = router;