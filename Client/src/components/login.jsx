import axios from "axios";
import { useEffect, useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";

const Login = ()=>{

  const [error , seterror] = useState("");

const Navigate = useNavigate();
const [localst , setlocalst] = useState({})

useEffect(()=>{
const LocalData = JSON.parse(localStorage.getItem("MyData"))
setlocalst(LocalData);
},[])

if(localst){
  Navigate('/mainpage');
}


const [User,setUser]=useState({
  email:"",
  password:""
})

const OnLogin =async (e)=>{
  e.preventDefault();

  try {
    const res = await axios.post("http://localhost:4000/User/login",User)
    if(res.data.code==="200"){
      setlocalst(res.data.user)
    localStorage.setItem("MyData",JSON.stringify(res.data.user));
    Navigate("/mainpage")
    }else{
      seterror(res.data.msg)
    }
  } catch (error) {
    console.log(error);
  }
}


const oninput = (e)=>{
  const {name,value} = e.target;
  setUser({
    ...User,
    [name]:value
  })
 
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
        <a class="hover:underline" href="#">
          Login
        </a>
        <Link class="hover:underline" to="/register">
          Register
        </Link>
      </div>
    </div>
  </header>
  <main class="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold">Welcome to Our Social Media Website</h2>
        <p class="mt-2 text-center text-sm text-[#a9def9]">{error? error:"Connect with friends and share your life."}</p>
      </div>
      <div class="bg-[#000814] py-8 px-4 shadow sm:rounded-lg sm:px-10">


        <form class="space-y-6" action="#" method="POST">
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
                onChange={oninput}
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
                onChange={oninput}

              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-[#a9def9] text-[#000814] hover:bg-[#a9def9]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a9def9]"
              onClick={OnLogin}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
  <footer class="bg-[#000814] py-6 px-4 sm:px-6 lg:px-8">
    <div class="container mx-auto flex items-center justify-between">
      @2024 Created By Ankush Kumar Gupta
    </div>
  </footer>
</div>
    </>
  )
}

export default Login;