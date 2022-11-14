const { model, Schema } = require('mongoose');
const Author = require('./Author');

const MODEL_NAME = 'Blog';

const schema = new Schema(
  {
    title: String,
    description: String,
    content: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: Author,
      required: true,
    },
    keywords: [String],
    cover: String,
    views: {
      type: Number,
      default: 0,
    },
    slug: String,
  },
  { timestamps: true },
);


module.exports = model(MODEL_NAME, schema);