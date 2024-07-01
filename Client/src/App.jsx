
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
const Navigate = useNavigate()
  const [User,setUser] = useState({})

  useEffect(()=>{
const Data = JSON.parse(localStorage.getItem("MyData"))
setUser(Data);
if(Data){
  Navigate("/mainpage")
}
  },[])

  return (
    <>
<div class="bg-[#000814] text-[#a9def9] min-h-[100dvh] flex flex-col">
  <header class="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
    <a class="flex items-center gap-2" href="#">
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
      <span class="font-bold text-xl">Ankush</span>
    </a>
    <div class="flex items-center gap-4">
      <Link
        class="inline-flex h-9 items-center justify-center rounded-md bg-[#a9def9] px-4 py-2 text-sm font-medium text-[#000814] shadow transition-colors hover:bg-[#a9def9]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#000814] disabled:pointer-events-none disabled:opacity-50 animate-bounce"
        to="/login"
      >
        Login
      </Link>
      <Link
        class="inline-flex h-9 items-center justify-center rounded-md border border-[#a9def9] bg-transparent px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-[#a9def9]/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#000814] disabled:pointer-events-none disabled:opacity-50 animate-bounce"
        to="/register"
      >
        Register
      </Link>
    </div>
  </header>
  <main class="flex-1 container mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center gap-6">
    <h1 class="text-4xl md:text-6xl font-bold tracking-tight animate-pulse">Welcome to My Website </h1>
    <p class="max-w-[600px] text-lg md:text-xl">
      Thank you for visiting our website. We're excited to have you here and can't wait to show you what we have to
      offer.
    </p>
    <p class="max-w-[600px] text-lg md:text-xl text-emerald-300 underline animate-pulse">
     Please Register or if have an account Login
    </p>

  </main>
  <footer class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
    <p class="text-xs text-[#a9def9]/80">© 2024 Created By Ankush Kumar Gupta</p>
    <nav class="sm:ml-auto flex gap-4 sm:gap-6">
      <a class="text-xs hover:underline underline-offset-4 text-[#a9def9]/80" href="#">
        Terms of Service
      </a>
      <a class="text-xs hover:underline underline-offset-4 text-[#a9def9]/80" href="#">
        Privacy
      </a>
    </nav>
  </footer>
</div>
    </>
  )
}

export default App
