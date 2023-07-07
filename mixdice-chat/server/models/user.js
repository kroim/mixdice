const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      min: 8,
      max: 32
    }
  },
  { timestamps: true }
);
userSchema.statics.findByToken = async function search(token) {
  if (!token) return null;
  const decoded = jwt.verify(token, process.env.SECRET);
  return this.findOne({ _id: decoded.id });
};
module.exports = mongoose.model('User', userSchema);
