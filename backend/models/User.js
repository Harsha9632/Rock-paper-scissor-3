const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  scores: {
    yourScore: { type: Number, default: 0 },
    computerScore: { type: Number, default: 0 }
  }
});

module.exports = mongoose.model('User', userSchema);
