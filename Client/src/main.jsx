import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Mainpage from './mainpage.jsx'
import ProfilePage from './Profile.jsx'
import Login from './components/login.jsx'
import Register from './components/register.jsx'
import NotificationBar from './components/notification.jsx'
import CreatePostPage from './components/createPostPage.jsx'
import Loader from './components/loader.jsx'
import EditProfile from './components/EditProfile.jsx'
import Myprovider from './components/contex.jsx'
import ShowProfile from './components/ShowProfile.jsx'

const router = createBrowserRouter([
  {
  path:"/", element:<App/>
  },
        {
      path:"/mainpage" , element:<Mainpage/> ,children:[
        {
          path:"/mainpage/notification" , element:<NotificationBar/>
        },
      ],
      },
    
    {
      path:"/profile" , element:<ProfilePage/>
    },
    {
      path:"/login" , element:<Login/>
    },
    {
      path:"/register" , element:<Register/>
    },
    {
      path:"/CreatePostPage" , element:<CreatePostPage/>
    },
    {
      path:"/EditProfile" , element:<EditProfile/>
    },
    {
      path:"/ShowProflie" , element:<ShowProfile/>
    },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Myprovider>
<RouterProvider router={router}></RouterProvider>
    </Myprovider>
  </React.StrictMode>
)
