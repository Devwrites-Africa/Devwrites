const serviceWrapper = require('./core/serverWrapper');

module.exports.createBlog = serviceWrapper({
  params: {
    title: {
      type: "string",
      max: 255,
      min: 3,
    },
    // ...
  },
  async handler (params) {

  }
})