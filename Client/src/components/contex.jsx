import { createContext, useEffect, useRef, useState } from "react";

export const MYcontext = createContext(null)
const Myprovider = ({children})=>{

  const Socket = useRef()
  const [isfollow,setisfollow] = useState(false)
  const [Fdata,setFdata] = useState([])
  const [profileData , setProfileData] = useState()

  return(
<MYcontext.Provider value={{
// pass the stats here 
isfollow,
setisfollow,
Fdata,
setFdata,
profileData,
setProfileData
}}>
{children}
</MYcontext.Provider>

  )
}

export default Myprovider;