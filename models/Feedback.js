const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  productQuality1: Number,
  overallSatisfaction: Number,
  storeCollection: Number,
  productQuality2: Number,
  comments: String,
  name: String,
  email: String,
  number: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
