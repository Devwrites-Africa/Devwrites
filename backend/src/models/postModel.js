const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    descr: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
      },
},
{timestamps: true}
);

module.exports = mongoose.model("Post", PostSchema)