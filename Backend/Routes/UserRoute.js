const express = require('express');
const router = express.Router();
const UserModel = require('../Models/UserModel');
const Multer = require("../multer");
router.post('/register',async (req,res)=>{
try {
  const UserData = new UserModel({
    name:req.body.name,
    username:req.body.username,
    email: req.body.email,
    password:req.body.password
  })

  const DataSave = await UserData.save();
  res.json(DataSave);
} catch (error) {
  res.status(404).json({'error' : 'error'});
}
})


router.post('/login',async (req,res)=>{
  const email = req.body.email;
  const password = req.body.password;
  try {
  const user = await UserModel.findOne({email});
  if(!user){
    res.json({'msg':'Incorrect Email or Password!','code':'404'})
  }else{
    if(await password==user.password){
      res.json({'msg':'login successfull','code' : '200',user})
    }else{
      res.json({'msg':'Incorrect Email or Password!','code' : '404'})
    }
  }
    
  } catch (error) {
  res.status(404).json("somthing went wrong")
  }
})

//find user by username

router.get('/findUser/:username',async (req,res)=>{
const username = req.params.username;
  try {
    const user = await UserModel.find({username});
    if(user){
      res.json(user)
    }else{
      res.json({'msg':'User Not Found!'})
    }
  } catch (error) {
  res.status(404).json("somthing went wrong");
  }
})

//find user by username

router.get('/findLoginUser/:loginuser',async (req,res)=>{
const UserId = req.params.loginuser;
  try {
    const user = await UserModel.findOne({_id:UserId}).populate("followers").populate("posts").populate("following")
      res.json({'msg':'User Found!','code' : '200',user})
  } catch (error) {
  res.status(404).json("somthing went wrong");
  }
})


//followers

router.post("/follow/:uid",async (req,res)=>{
const uid = req.params.uid
console.log(req.body._id)
try {
  const follower = await UserModel.findOne({_id:req.body._id})
  const user = await UserModel.findOne({_id:uid})
 user.followers.push(req.body._id)
 await user.save()
 follower.following.push(uid)
 await  follower.save()
} catch (error) {
  res.status(404).json("somthing went wrong");
}
})

router.put("/UpdateUser/:userid",Multer.single("file"), async (req,res)=>{
  const userid = req.params.userid
  try {
    const user = await UserModel.findByIdAndUpdate(
      userid
    )
    if(req.file) user.DP = req.file.filename
  if(req.body.name) user.name=req.body.name
  if(req.body.username) user.username=req.body.username

   await user.save();
  } catch (error) {
  res.status(404).json("somthing went wrong");
  }
})



module.exports = router;