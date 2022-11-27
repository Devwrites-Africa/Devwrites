const serviceWrapper = require('./core/serverWrapper');
const models = require("../models");
const utils = require("../utils");
const { NotFoundError } = require('../lib/errors');

module.exports.createBlog = serviceWrapper({
  params: {
    title: {
      type: "string",
      max: 255,
      min: 3,
    },
    description: {
      type: "string",
      max: 255,
      min: 3,
    },
    content: {
      type: "string",
    },
    keywords: {
      type: "array",
      items: "string"
    },
    cover: {
      type: "string"
    },
  },
  async handler ({ accountId, ...blogData }) {

    const author = await models.Author.findOne({
      accountId: utils.$id(accountId)
    });

    blogData.authorId = author._id;

    blogData.slug = utils.sluggify(blogData.title);

    const newBlog = await models.Blog.create(blogData);

    return newBlog;
  }
})


module.exports.updateBlog = serviceWrapper({
  params: {
    title: {
      type: "string",
      max: 255,
      min: 3,
    },
    description: {
      type: "string",
      max: 255,
      min: 3,
    },
    content: {
      type: "string",
    },
    keywords: {
      type: "array",
      items: "string"
    },
    cover: {
      type: "string"
    },
  },
  async handler ({ accountId, ...blogUpdates }) {
    const author = await models.Author.findOne({ accountId: utils.$id(accountId) });

    const blogPost = await models.Blog.findOne({ authorId: author._id, blogId });

    if (!blogPost) {
      throw new NotFoundError("no blog post belonging to your account has been found")
    }

    await models.Blog.updateOne({ _id: blogPost._id }, blogUpdates);

    const updatedBlog = await models.Blog.findOne({ _id: blogPost._id });

    return updatedBlog;
  }
})