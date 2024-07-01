const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Post Schema
const postSchema = new Schema({
  title:{type:String,default:''},
  content: { type: String},
  image: { type: String, default: '' },
  likes: [{ type: Schema.Types.ObjectId, ref: 'USER' }],
  Uid: { type: Schema.Types.ObjectId, ref: 'USER' },
  comments: [{ type: Schema.Types.ObjectId, ref: 'COMMENT' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('POST',postSchema);