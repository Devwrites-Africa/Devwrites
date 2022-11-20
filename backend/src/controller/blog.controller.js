const Blog = require('../service/blog.service');
const utils = require("../utils");

module.exports.createBlog = async (req, res, next) => {
  try {
    const response = await Blog.createBlog({
      ...req.body,
      ...req.params,
      ...req.session
    });

    return utils.success(res).send(response)

  } catch (err) {
    next(err);
  }
}

module.exports.updateBlog = async (req, res, next) => {
  try {
    const response = await Blog.updateBlog({
      ...req.body,
      ...req.params,
      ...req.session
    });

    return utils.success(res).send(response)

  } catch (err) {
    next(err);
  }
}

module.exports.deleteBlog = async (req, res, next) => {
  try {

  } catch (err) {
    next(err);
  }
}

module.exports.getBlogs = async (req, res, next) => {
  try {

  } catch (err) {
    next(err);
  }
}

module.exports.getBlog = async (req, res, next) => {
  try {

  } catch (err) {
    next(err);
  }
}