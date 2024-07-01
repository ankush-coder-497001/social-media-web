import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const CreatePostPage = () =>{
const Navigate = useNavigate()
  const [uid , setuid] = useState({})

useEffect(()=>{
const User = JSON.parse(localStorage.getItem("MyData"))
setuid(User._id)
},[])

const[title , settitle] = useState("")
const[content , setcontent] = useState("")
const[image , setimage] = useState("")

const OnSubmit = async (e)=>{
  e.preventDefault();
  try {
  
    const formData = new FormData()
    formData.append('title', title)
    formData.append('content', content)
    formData.append('file', image)
  

    const res = await axios.post(`http://localhost:4000/Post/createPost/${uid}`,formData)
    Navigate('/profile')
  } catch (error) {
    console.log(error)
  }
}
  return(
  <>

<div class="flex flex-col min-h-[100dvh] bg-[#000814] text-[#a9def9] ">
  <header class="px-4 lg:px-6 h-14 flex items-center border-b border-[#a9def9]/20">
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
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
        <path d="m15 5 4 4"></path>
      </svg>
      <span class="sr-only">Create Post</span>
    </a>
    <nav class="ml-auto flex gap-4 sm:gap-6">
      <Link class="text-sm font-medium hover:underline underline-offset-4 font-bold" to="/mainpage" >
        Posts
      </Link>
      <Link to="/profile" class="text-sm font-medium hover:underline underline-offset-4 font-bold">
        Profile
      </Link>
    </nav>
  </header>
  <main class="flex-1 flex justify-center items-center px-4 md:px-6">




    <form class="w-full max-w-md space-y-6">
      <div class="grid gap-2">
        <label
          class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium"
          for="image"
        >
          Upload Image
        </label>
        <div class="flex items-center justify-center w-full">
          <label
            for="image"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-[#a9def9] border-dashed rounded-lg cursor-pointer bg-[#000814]/50 hover:bg-[#000814]/70 transition-colors"
          >
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
              class="h-12 w-12"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" x2="12" y1="3" y2="15"></line>
            </svg>
            <p class="mt-2 text-sm text-[#a9def9]">Drag and drop your image here, or click to select a file</p>
            <input
              class="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 hidden"
              id="image"
              required=""
              type="file"
              name="file"
              onChange={(e)=>setimage(e.target.files[0])}
            />
          </label>
        </div>
      </div>
      <div class="grid gap-2">
        <label
          class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium"
          for="title"
        >
          Title
        </label>
        <input
          class="flex h-10 w-full text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#000814]/50 border border-[#a9def9] rounded-lg p-3 text-[#a9def9] placeholder-[#a9def9]/70 focus:outline-none focus:ring-2 focus:ring-[#a9def9] focus:border-transparent"
          id="title"
          placeholder="Enter a title"
          required=""
          type="text"
          name="title"
          onChange={(e)=>settitle(e.target.value)}
        />
      </div>
      <div class="grid gap-2">
        <label
          class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium"
          for="description"
        >
          Add HashTag#
        </label>
        <textarea
          class="flex min-h-[80px] w-full text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#000814]/50 border border-[#a9def9] rounded-lg p-3 text-[#a9def9] placeholder-[#a9def9]/70 focus:outline-none focus:ring-2 focus:ring-[#a9def9] focus:border-transparent resize-none"
          id="description"
          name="description"
          placeholder="#newpost...."
          rows="5"
          required=""
          onChange={(e)=>setcontent(e.target.value)}
        ></textarea>
      </div>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 w-full bg-[#a9def9] text-[#000814] font-medium rounded-lg py-3 hover:bg-[#a9def9]/80 transition-colors animate-pulse text-white"
        type="submit"
        onClick={OnSubmit}
      >
        Create Post
      </button>
    </form>
  </main>
  <footer class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#a9def9]/20 ">
    <p class="text-xs text-[#a9def9]/70">© 2024 Created By Ankush Kumar Gupta</p>
    <nav class="sm:ml-auto flex gap-4 sm:gap-6">
      <a href="#"></a>
    </nav>
  </footer>
</div>
  
  </>

  )
}

export default CreatePostPage;