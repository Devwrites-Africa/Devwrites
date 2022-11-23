const router = require('express').Router();
const blogRouter = require('./blog.route');
const authorRouter = require('./author.route');

router.use('/blogs', blogRouter);
//router.use('/authors', authorRouter);
module.exports = router;
