const mongoose = require('mongoose');
const Schema = mongoose.Schema

// Like Schema
const likeSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'USER', required: true },
  post: { type: Schema.Types.ObjectId, ref: 'POST' },
  createdAt: { type: Date, default: Date.now }
});

module.exports=mongoose.model('LIKES',likeSchema);