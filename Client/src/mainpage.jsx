import { Link, Outlet, useNavigate } from 'react-router-dom';
import PostCard from './components/PostCard'
import { useContext, useEffect, useRef, useState } from 'react';
import axios, { all } from 'axios'
import './App.css'
import Nopost from './components/Nopost';
import Loader from './components/loader';
import { MYcontext } from './components/contex';
const Mainpage = ()=>{
  const [Inputref,setInputref ]= useState("")
  const [loader,setloader] = useState(false)
  const [onlike,setonlike] = useState(false)
const Navigate = useNavigate()
  const OnLogOut = ()=>{
    localStorage.removeItem('MyData');
   Navigate("/login")
  }



const[loginUser,setloginUser] = useState({})
  const [User,setUser] = useState({})

  useEffect(()=>{
const Data = JSON.parse(localStorage.getItem("MyData"))
setloginUser(Data);
  },[])

  useEffect(()=>{
    axios.get(`http://localhost:4000/User/findLoginUser/${loginUser._id}`).then(res=>setUser(res.data.user))
   },[loginUser])
 

const [allpost , setallpost] =useState([]);

useEffect(()=>{
  setloader(true)
axios.get("http://localhost:4000/Post/AllPost").then((res)=>{

const filtedData = res.data.filter(post=>post.Uid.name.toLowerCase().includes(Inputref.toLowerCase()))
  setallpost(filtedData.reverse())
  setloader(false)
})
},[Inputref,User,onlike])




  return(
    <>
    <div class="flex flex-col min-h-screen  text-[#000814]">
  <header class="sticky top-0 z-50 flex h-14 items-center justify-between bg-[#000814] px-4 md:px-6">
    <Link class="flex items-center gap-2 text-white" to="/profile" >
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
        class="h-6 w-6"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
      </svg>
      <span class="text-lg font-bold">@{User.username}</span>
    </Link>
    <div class="relative flex-1  max-w-md">
    <div class="wrap-input-17 float-end"><div class="search-box">
  <button class="btn-search">🔍</button>
  <input onChange={e=>setInputref(e.target.value)} type="text" class="input-search" placeholder="Type to Search..."/>
</div>
</div>
    </div>
    <nav class="flex items-center gap-4">
      <a class="flex items-center gap-2 text-[#a9def9]"  >
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
          class="h-5 w-5 text-white"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span class="hidden md:inline hover:text-lime-300 font-bold text-white">Home</span>
      </a>
      <a class="flex items-center gap-2 text-[#a9def9]" onClick={OnLogOut}>
        
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
          class="h-5 w-5 text-white"
        >
          <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
        <span class="hidden md:inline cursor-pointer hover:text-lime-300 font-bold text-white">Logout</span>
      </a>
      <Link class="flex items-center gap-2 text-[#a9def9]" to="/mainpage/notification">
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
          class="h-5 w-5 text-white"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
        <span class="hidden md:inline hover:text-lime-300 font-bold text-white">Notifications</span>
      </Link>
      <Link class="flex items-center gap-2 text-[#a9def9]" to="/profile">
        <span class="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
          <img class="aspect-square h-full w-full" alt="@shadcn" src={User.DP} />
        </span>
        <span class="hidden md:inline hover:text-lime-300 font-bold text-white">Profile</span>
      </Link>
    </nav>
  </header>
  <main class="flex-1 overflow-auto py-6">
    <div class="container mx-auto grid gap-6 px-4 md:px-6">
      <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
     {
     allpost?.map((post)=>(
       <PostCard setonlike={setonlike} onlike={onlike} key={post._id} post={post}  />
     ))}
     {allpost.length===0 && <Nopost/> }
<Outlet  ></Outlet>
      </div>
    </div>
  </main>

</div>
{loader && <Loader></Loader>}
    </>
  )
}

export default Mainpage;