import { Link, Outlet } from "react-router-dom";
import PostCard from "./components/PostCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Nopost from "./components/Nopost";
import Loader from "./components/loader";

const ProfilePage = ()=>{
  const [allpost , setallpost] =useState([]);
const [loginUser,setloginUser] = useState({})
  const [User,setUser] = useState({})
  const [loader,setloader] = useState(false)


  useEffect(()=>{
const Data = JSON.parse(localStorage.getItem("MyData"))
setloginUser(Data);
},[])

useEffect(()=>{
   axios.get(`http://localhost:4000/User/findLoginUser/${loginUser._id}`).then(res=>setUser(res.data.user))
  },[loginUser])


useEffect(()=>{
  setloader(true)
axios.get("http://localhost:4000/Post/AllPost").then((res)=>{
  setallpost(res.data.reverse())
  setloader(false)
})
},[loginUser])
  return(
    <>
<div class="w-full min-h-[100dvh] bg-[#000814] text-white">
  <header class="flex items-center justify-between px-6 py-4 border-b border-[#a9def9]">
    <div class="flex items-center gap-4">
      <span class="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12">
        <img src={User.DP} alt="@shadcn" />
        <span class="flex h-full w-full items-center justify-center rounded-full bg-muted"></span>
      </span>
      <div class="grid gap-0.5">
        <div class="text-lg font-semibold">{User.name}</div>
        <div class="text-sm text-[#a9def9]">@{User.username}</div>
      </div>
    </div>
    <div class="flex gap-3">


    <Link class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 px-4 py-2 bg-[#a9def9] text-[#000814] hover:bg-[#a9def9]/90 focus-visible:ring-[#a9def9] animate-bounce text-white font-bold " 
    to="/EditProfile"
    >
     Edit Profile
    </Link>
    <Link class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 px-4 py-2 bg-[#a9def9] text-[#000814] hover:bg-[#a9def9]/90 focus-visible:ring-[#a9def9] animate-bounce text-white font-bold " 
    to="/mainpage"
    >
     Home
    </Link>
    <Link class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 px-4 py-2 bg-[#a9def9] text-[#000814] hover:bg-[#a9def9]/90 focus-visible:ring-[#a9def9] animate-bounce text-white font-bold" 
    to="/CreatePostPage"
    >
      Create Post
    </Link>
    </div>
  </header>
  <main class="px-6 py-8 grid gap-8">
    <div class="grid gap-2">
      <div class="text-2xl font-bold">{User.name}</div>
      <div class="text-[#a9def9]">@{User.username}</div>
    </div>
    <div class="grid gap-4">
      <div>
        <div class="text-lg font-semibold">About</div>
        <p class="text-sm text-[#a9def9]">
        {User.bio}
        </p>
      </div>
      <div class="flex items-center gap-4 text-sm cursor-pointer ">
            <div class="flex items-center gap-1">
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
                class="h-4 w-4"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span>{User?.followers?.length} Followers</span>
            </div>
            <div class="flex items-center gap-1 cursor-pointer">
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
                class="h-4 w-4"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span>{User?.following?.length} Following</span>
            </div>
          </div>
    </div>
    <div class="grid gap-4">
      <div class="text-lg font-semibold">Posts</div>
      <div class="   grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {
     allpost?.filter((item,index,arr)=> item.Uid._id===User._id).map((post)=>(
       <PostCard key={post._id} post={post}  />
     ))}
{ allpost?.filter((item,index,arr)=> item.Uid._id===User._id).length===0 && <Nopost/>}
<Outlet></Outlet>
      </div>
    </div>
  </main>
</div>
{loader && <Loader/>}
    </>
  )
}

export default ProfilePage;