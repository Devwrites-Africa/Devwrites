const serviceWrapper = require('./core/serverWrapper');
const models = require('../models');


module.exports.createAuthor = serviceWrapper({
    params: {
        name: {
            type: "string",
            min: 3,
            max: 50
        },
        bio: {
            type: "string",
            min: 25,
            max: 255
        },
        twitter: {
            type: "string"
        },
        facebook: {
            type: "string"
        },
        linkedin: {
            type: "string"
        },
        github: {
            type: "string"
        },
        profilePicture: {
            type: "string"
        },
    },
    async handler ({ ...authorDetails }) {
        
        const newAuthor = await models.Author.save(authorDetails);
        return newAuthor;
      }
})