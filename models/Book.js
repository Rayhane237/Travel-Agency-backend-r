const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  passenger: { type: String, required: true },
  date: {
    type: Date,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);
