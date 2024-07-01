const express =require('express');
const router  = express.Router();
const PostModel = require('../Models/PostModel');
const UserModel = require('../Models/UserModel');
const upload = require('../multer');

router.post('/createPost/:userid',upload.single('file'),async (req,res)=>{
  if(!req.file) return res.status(404).json("Somthing Went Wrong!")
const Uid = req.params.userid;
try {
  const user = await UserModel.findById(Uid);
  const post = new PostModel({
    title:req.body.title,
    content:req.body.content,
    Uid:user._id,
    image:req.file.filename
  })
  const savepost = await post.save();
  user.posts.push(savepost);
  await user.save();
  res.json(savepost);
} catch (error) {
  res.status(404).json({'error':'Somthing Went Wromg'})
}
})


router.get("/AllPost" , async (req,res)=>{
  try {
    const AllPost = await PostModel.find().populate("Uid")
   res.json(AllPost)
  } catch (error) {
  res.status(404).json({'error':'Somthing Went Wromg'})
  }
})


router.post('/like',async (req,res)=>{
  try {
    console.log(req.body)
    const post  = await PostModel.findById(req.body.postID)
    post.likes.push(req.body.Liker);
     await post.save()
  } catch (error) {
  res.status(404).json({'error':'Somthing Went Wromg'})
  }
})
module.exports = router;