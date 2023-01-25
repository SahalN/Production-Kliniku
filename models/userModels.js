/** @format */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nama Perlu Diisi"],
  },
  email: {
    type: String,
    required: [true, "Email Perlu Disi"],
  },
  password: {
    type: String,
    required: [true, "Kata Sandi Perlu Diisi"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isDoctor: {
    type: Boolean,
    default: false,
  },
  notification: {
    type: Array,
    default: [],
  },
  seennotification: {
    type: Array,
    default: [],
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
