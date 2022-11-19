const Blog = require('../service/blog.service');

module.exports.createBlog = async (req, res, next) => {
  try {
    const response = await Blog.createBlog({
      ...req.body,
      ...req.params,
    });

    return res.status(200).json({
      data: response,
      status: "ok"
    });

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