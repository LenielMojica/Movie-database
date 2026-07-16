
import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { jwtDecode} from 'jwt-decode'
import { useNavigate } from "react-router-dom"
const AuthProvider=({children})=>{
  
     const [isAuth,setIsAuth]= useState(null)
 

 const login=(token)=>{
    localStorage.setItem("token",token)
    setIsAuth(true)
 }
 const logout=()=>{
    localStorage.removeItem("token")
    setIsAuth(false)
 }
    const verifyToken=(token)=>{
         if (!token){
setIsAuth(false)
return
         }
         
       
    const payload = jwtDecode(token)
 

 const time=  Date.now()
if(payload.exp*1000<time) 
{
 logout()
}
else{
    setIsAuth(true)
}
    }
    useEffect(()=>{
         const token= localStorage.getItem("token")
verifyToken(token)

    },[])
  
   
 
return (
    <AuthContext.Provider value={{isAuth,login,logout}}>
  {children}
    </AuthContext.Provider>
)
}
export default AuthProvider