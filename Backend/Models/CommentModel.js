const mongoose = require('mongoose');
const Schema = mongoose.Schema

// Comment Schema
const commentSchema = new Schema({
  post: { type: Schema.Types.ObjectId, ref: 'POST', required: true },
  com: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('COMMENT',commentSchema);