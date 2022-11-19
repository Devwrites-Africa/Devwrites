const { model, Schema } = require('mongoose');

const MODEL_NAME = 'Author';

const schema = new Schema({
  name: String,
  bio: String,
}, { timestamps: true });


module.exports = model(MODEL_NAME, schema);