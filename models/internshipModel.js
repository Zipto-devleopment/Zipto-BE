const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  phone: String,
  domain: String,
  duration: String,
  signature: String, // Base64 encoded signature
});

module.exports = mongoose.model("Internship", internshipSchema);
