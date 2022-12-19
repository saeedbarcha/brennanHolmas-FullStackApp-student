const mongoose = require('mongoose');
const { Schema } = mongoose; // destructuring

const userSchema = new Schema({
  firstName: {
    type: String,
    max: 100,
  },
  lastName: {
    type: String,
    max: 100,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    max: 255,
  },
});

module.exports = mongoose.model('User', userSchema);
