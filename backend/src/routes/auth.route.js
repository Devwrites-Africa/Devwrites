const { isAuthenticatedAccount } = require('../middlewares/authHandler');
const AuthController = require("../controller/auth.controller");

const router = require('express').Router();

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);

module.exports = router;