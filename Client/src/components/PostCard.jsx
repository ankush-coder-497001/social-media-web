import { useContext, useEffect, useState } from "react"
import "./loader.css"
import axios from "axios"
import { FaHeart } from "react-icons/fa";
import { MYcontext } from "./contex";
import { useNavigate } from "react-router-dom";

const PostCard = ({post,setonlike,onlike})=>{

const [showfollow , setshowfollow] = useState(true)
const [User,setUser] = useState({})
const [loginUser,setloginUser] = useState({})
const {profileData,setProfileData} = useContext(MYcontext)
const Navigate = useNavigate()


useEffect(()=>{
  const Data = JSON.parse(localStorage.getItem("MyData"))
  setloginUser(Data);
  },[])
  

useEffect(()=>{
  axios.get(`http://localhost:4000/User/findLoginUser/${loginUser?._id}`).then(res=>setUser(res.data.user))

 },[loginUser])


useEffect(()=>{
  setshowfollow(findFollower(User.following,post?.Uid?._id))
  function findFollower(arr,target){
    for(let i =0;i<arr?.length;i++){
      if(arr[i]._id === target){
        return true
      }
    }
    return false
    }
  
},[User])


  const onfollow = async (e)=>{
            try {
              location.reload()
    const res = await axios.post(` http://localhost:4000/User/follow/${post.Uid._id}`,User)
  } catch (error) {
    console.log(error)
  }
}

const HandleonLike =async (e)=>{
  e.preventDefault();
  try {
    location.reload()
    await axios.post('http://localhost:4000/Post/like',{'postID':post._id,'Liker':User._id})
} catch (error) {
  console.log(error.message)
}

}


const showPostProfile = ()=>{
  if(post?.Uid?._id === loginUser?._id){
   Navigate('/profile')
   return ;
  }
    
  setProfileData(post?.Uid)
  Navigate('/ShowProflie')
}

  return(
    <>
            <div class="rounded-lg h-45 w-50  border text-white text-card-foreground bg-[#000814] shadow-lg" data-v0-t="card">
          <img
            src={post.image}
            alt="Post Image"
            width="400"
            height="400"
            class="aspect-square object-contain pt-4 pb-4"
          />
          <div class="p-4">
            <div onClick={showPostProfile} class="flex items-center gap-3 cursor-pointer">
              <span class="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10">
                <img class="aspect-square h-full w-full" alt="@shadcn" src={post.Uid.DP} />
              </span>
              <div>
                <div class="font-medium">{post.Uid.name}</div>
                <div class="text-sm text-[#a9def9]">@{post.Uid.username}</div>
              </div>
            </div>
            <p class="mt-4 text-lg  leading-relaxed">
             {post.title}
            </p>
            <p class="mt-2 text-sm leading-relaxed">
             {post.content}
            </p>
          </div>
          <div class="flex items-center justify-between bg-[#a9def9] p-4">
          <div class="flex items-center gap-3">
            {post?.likes?.some(like=>like===User._id) ?  <FaHeart className="text-red-500" />  : <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 transition ease-in-out delay-100 hover:scale-125"
              
              onClick={HandleonLike}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-5 w-5"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
                <span class="sr-only">Like</span>
              </button>
            }
            {post?.likes?.length}
            </div>

            { User._id!=post.Uid._id && showfollow===false   ? <button class="glow-on-hover" onClick={onfollow}>Follow</button>:<button class="glow-on-hover " disabled >Followed</button> }
          
          </div>
        </div>
    </>
  )
}

export default PostCard;

