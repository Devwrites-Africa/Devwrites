const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    bio: {
        type: String,
        required: true,
    },
    twitter: String,
    facebook: String,
    linkedin: String,
    profilePicture: Buffer,
},
{timestamps: true}
);

module.exports = mongoose.model('Author', AuthorSchema)