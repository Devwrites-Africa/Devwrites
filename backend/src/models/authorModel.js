const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        unique: true,
    },
    bio: {
        type: String,
        required: true,
    },
    email: {
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

module.exports = mongoose.model("Author", AuthorSchema)