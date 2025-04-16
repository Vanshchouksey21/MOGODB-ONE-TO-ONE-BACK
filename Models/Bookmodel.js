const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  bookName: String,
  price: Number,
  description: String,
  authid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author'
  }
});

module.exports = mongoose.model('Book', BookSchema);
