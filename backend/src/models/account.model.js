const { model, Schema } = require('mongoose');

const MODEL_NAME = 'Account';
const schema = new Schema(
  {
    email: String,
    password: String,
    lastSeen: Date,
    role: [String],
    active: Boolean,
    passwordResetCount: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true },
);


module.exports = model(MODEL_NAME, schema);