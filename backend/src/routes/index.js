const router = require('express').Router();
const blogRouter = require('./blog.route');
const authorRouter = require('./author.route');
const authRouter = require('./auth.route');

router.use('/auth', authRouter);
router.use('/blogs', blogRouter);

module.exports = router;
