const router = require('express').Router();
const blogRouter = require('./blog.route');

router.use('/blogs', blogRouter);
module.exports = router;
