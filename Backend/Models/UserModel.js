const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema({
    name:{type:String,require:true},
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String, default: '' },
    DP:{type:String,default:'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg'},
    posts:[{type: Schema.Types.ObjectId, ref: 'POST'}],
    followers: [{ type: Schema.Types.ObjectId, ref: 'USER' }],
    following: [{ type: Schema.Types.ObjectId, ref: 'USER' }],
    createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('USER',userSchema);