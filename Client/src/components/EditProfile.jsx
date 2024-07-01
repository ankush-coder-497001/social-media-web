import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const EditProfile = ()=>{
  const [uid , setuid] = useState({})

useEffect(()=>{
const User = JSON.parse(localStorage.getItem("MyData"))
setuid(User._id)
},[])
const Navigate = useNavigate()
  const [DP , setDP] =useState("");
  const [name , setname] = useState("");
  const [username , setusername] = useState("")

  const onsave = async(e)=>{
    e.preventDefault();
  
   try {
    const formdata = new FormData();
   DP && formdata.append("file", DP);
   name &&  formdata.append("name", name);
   username &&  formdata.append("username", username);
    Navigate("/profile")
    const res = await axios.put(`http://localhost:4000/User/UpdateUser/${uid}`,formdata)
   } catch (error) {
    console.log(error)
   }

  }


  return(
    <>
<div class="flex flex-col min-h-dvh bg-[#000814] text-[#a9def9]">
  <header class="flex h-20 w-full shrink-0 items-center px-4 md:px-6 border-b border-[#a9def9]/20">
    <a class="flex items-center justify-center" href="#">
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
        <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
      </svg>
      <span class="sr-only">Social Media</span>
    </a>
    <nav class="ml-auto flex gap-4 sm:gap-6">
      <Link class="text-sm font-medium hover:underline underline-offset-4" to="/mainpage">
        Home
      </Link>
      < Link to="/profile" class="text-sm font-medium hover:underline underline-offset-4">
        Profile
      </Link>
    </nav>
  </header>
  <main class="flex-1 py-12 md:py-24 lg:py-32">
    <div class="container px-4 md:px-6">
      <div class="mx-auto max-w-xl space-y-8">
        <div class="flex flex-col items-center justify-center space-y-4">
          <span class="relative flex shrink-0 overflow-hidden rounded-full h-24 w-24 border-[3px] border-[#a9def9]">
            <img class="aspect-square h-full w-full" alt="@shadcn" src="/placeholder-user.jpg" />
          </span>
          <div class="flex items-center gap-2">
            <label
              for="profile-pic"
              class="inline-flex items-center rounded-md border border-[#a9def9] bg-[#000814] px-4 py-2 text-sm font-medium text-[#a9def9] shadow transition-colors hover:bg-[#a9def9]/10 focus:outline-none focus:ring-2 focus:ring-[#a9def9] focus:ring-offset-2"
            >
              Profile Pic
            </label>
            <input id="profile-pic" class="hidden" type="file" onChange={(e)=>setDP(e.target.files[0])}  />
          </div>
        </div>
        <div class="space-y-4">
          <div class="space-y-2">
            <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium" for="name">
              Name
            </label>
            <input
              class="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#000814] border-[#a9def9] focus:border-[#a9def9] focus:ring-[#a9def9]"
              id="name"
              placeholder="Enter your name"
              fdprocessedid="aj8oqr"
              name="name"
              onChange={(e)=>setname(e.target.value)}
            />
          </div>
          <div class="space-y-2">
            <label
              class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium"
              for="username"
            >
              Username
            </label>
            <input
              class="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#000814] border-[#a9def9] focus:border-[#a9def9] focus:ring-[#a9def9]"
              id="username"
              placeholder="Enter your username"
              name="username"
              onChange={(e)=>setusername(e.target.value)}
            />
          </div>
        </div>
        <div >

        <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background h-10 px-4 py-2 text-[#a9def9] border-[#a9def9] hover:bg-[#a9def9] hover:text-[#000814] w-full" type="submit"
        onClick={onsave}
        >
   Save
    </button>
    
          
    </div>
      </div>
    </div>
  </main>
</div>
    </>
  )
}

export default EditProfile;