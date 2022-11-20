const { isAuthenticatedAccount } = require('../middlewares/authHandler');
const BlogController = require("../controller/blog.controller");

const router = require('express').Router();

router.use(isAuthenticatedAccount);

router.post("/blogs", BlogController.createBlog);
router.patch("/blogs/:blog_id", BlogController.updateBlog);

module.exports = router;
