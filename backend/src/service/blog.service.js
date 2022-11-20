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

    // TODO 
    /*
      1. Fetch Account Author Details
      2. Update the blogData
    */
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

    // TODO 
    /*
      1. Fetch Account Author Details
      2. Update the blogData based on if account owner matches blog owner
    */
    const blogPost = await models.Blog.findOne({ authorId, blogId });

    if (!blogPost) {
      throw new NotFoundError("No blog post belonging to your account has been found")
    }

    await models.Blog.updateOne({ _id: blogPost._id }, blogUpdates);

    const updatedBlog = await models.Blog.findOne({ _id: blogPost._id });
    return updatedBlog;
  }
})