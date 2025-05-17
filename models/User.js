// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   username: String,
//   email: String,
//   phone: String,
//   password: String
// // },{
// //   timestamps: true  // Adds createdAt and updatedAt
// });

// module.exports = mongoose.model("User", userSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, required: true, unique: true },
  phone: String,
  password: { type: String, required: true }, 
});

module.exports = mongoose.model("User", userSchema);
