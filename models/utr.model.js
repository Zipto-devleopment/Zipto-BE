const mongoose = require("mongoose");

const utrSchema = new mongoose.Schema({
  utr: Number,
});

module.exports = mongoose.model("Utr", utrSchema);
