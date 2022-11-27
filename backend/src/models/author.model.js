const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
    },
    bio: {
        type: String,
    },
    accountId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account",
    },
    twitter: String,
    facebook: String,
    linkedin: String,
    profilePicture: Buffer,
},
{timestamps: true}
);

module.exports = mongoose.model('Author', AuthorSchema)