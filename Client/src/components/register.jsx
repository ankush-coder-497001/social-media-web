import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const Register = ()=>{
const navigate = useNavigate()
  const [UserData,setUserData] = useState({
    name:" ",
    username: " ",
    email: "",
    password:"",
  })

const onInputHandle = (e)=>{
const {name,value} = e.target
setUserData({
  ...UserData,
  [name]:value
})
}

const onsubmit = async (event)=>{
  event.preventDefault()
  try {
    const res = await axios.post("http://localhost:4000/User/register",UserData)
navigate("/login")
  } catch (error) {
    console.log(error);
  }
 
}

  return(
    <>
<div class="flex flex-col min-h-screen bg-[#000814] text-[#a9def9]">
  <header class="py-4 px-6 bg-[#000814] shadow">
    <div class="container mx-auto flex items-center justify-between">
      <Link to="/">
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
          class="h-8 w-8"
        >
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
          <polyline points="10 17 15 12 10 7"></polyline>
          <line x1="15" x2="3" y1="12" y2="12"></line>
        </svg>
        <span class="sr-only">Social </span>
      </Link>
      <div class="flex items-center space-x-4">
        <Link class="hover:underline" to="/login">
          Login
        </Link>
        <a class="hover:underline" href="#">
          Register
        </a>
      </div>
    </div>
  </header>
  <main class="flex-1 flex items-center justify-center py-2 px-2 sm:px-2 lg:px-4">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold">Welcome to Our Social Media Website</h2>
        <p class="mt-2 text-center text-sm text-[#a9def9]">Connect with friends and share your life.</p>
      </div>
      <div class="bg-[#000814] py-0 px-4 shadow sm:rounded-lg sm:px-10">



        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium">
               name
            </label>
            <div class="mt-1">
              <input
                id="name"
                autocomplete="name"
                required=""
                class="appearance-none block w-full px-3 py-2 border border-[#a9def9] rounded-md shadow-sm placeholder-[#a9def9] focus:outline-none focus:ring-[#a9def9] focus:border-[#a9def9] sm:text-sm"
                type="text"
                name="name"
                onChange={onInputHandle}
              />
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium">
               Username
            </label>
            <div class="mt-1">
              <input
                id="username"
                autocomplete="username"
                required=""
                class="appearance-none block w-full px-3 py-2 border border-[#a9def9] rounded-md shadow-sm placeholder-[#a9def9] focus:outline-none focus:ring-[#a9def9] focus:border-[#a9def9] sm:text-sm"
                type="text"
                name="username"
                onChange={onInputHandle}

              />
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium">
              Email 
            </label>
            <div class="mt-1">
              <input
                id="email"
                autocomplete="email"
                required=""
                class="appearance-none block w-full px-3 py-2 border border-[#a9def9] rounded-md shadow-sm placeholder-[#a9def9] focus:outline-none focus:ring-[#a9def9] focus:border-[#a9def9] sm:text-sm"
                type="text"
                name="email"
                onChange={onInputHandle}

              />
            </div>
          </div>
          <div>
            <label for="password" class="block text-sm font-medium">
              Password
            </label>
            <div class="mt-1">
              <input
                id="password"
                autocomplete="current-password"
                required=""
                type="password"
                name="password"
                class="appearance-none block w-full px-3 py-2 border border-[#a9def9] rounded-md shadow-sm placeholder-[#a9def9] focus:outline-none focus:ring-[#a9def9] focus:border-[#a9def9] sm:text-sm"
                onChange={onInputHandle}

              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-[#a9def9] text-[#000814] hover:bg-[#a9def9]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a9def9]"
              onClick={onsubmit}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
  <footer class="bg-[#000814] py-6 px-4 sm:px-6 lg:px-8">
    <div class="container mx-auto flex items-center justify-between">
      @2024 created by ankush kumar gupta
    </div>
  </footer>
</div>
    </>
  )
}

export default Register;