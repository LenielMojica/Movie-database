import Button from "../components/ui/Button"
import { useState } from "react"
import logo from "../assets/images/logo.svg" 
import bg from "../assets/images/hero-img.jpg"
import {signIn} from "../services/auth"
import { AuthContext } from "../components/auth/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
const Register =({})=>{
  const [loginStatus, setLoginStatus]=useState()
  const [form, setForm]= useState({user:"",password:""})
  const navigate=useNavigate()
  const { login  } = useContext(AuthContext)
  const onLogin =(e)=>{
   
   
   setForm(prev=>(
    
    {...prev,
    [e.target.name]: e.target.value}))
    
    }
    const handleSubmit= async(e)=>{
e.preventDefault()
if (!form.password || !form.user){
  setLoginStatus("Debes introducir tus credenciales")
return
}
if (/\d/.test(form.user)) {
  setLoginStatus("El usuario no puede contener números")
  return
}

try {
  const data =await signIn(form)


  navigate("/")

}
catch(e){
  if(e.status===409)
    setLoginStatus("User already taken")
  }
  }
  

 
  return (
   
    <div style={{backgroundImage:`url(${bg})`}}
    className="min-h-screen bg-cover bg-center bg-black/50">
    <div className="min-h-screen bg-black/60">
    <nav className="flex-col  p-10 fixed " >
         <a href="#"><img src={logo} alt="logo" className="h-5 -mt-4 md:h-10"></img></a>
   
    </nav>
<div className="flex min-h-screen justify-center items-center text-white ">
    <form action="Sign in" className="w-full max-w-md bg-black/70 p-12 rounded"
    onSubmit={handleSubmit}
    >
        <div className=" flex flex-col justify-center gap-4 items-center">
            <h1 className="font-bold text-3xl self-start    ">Sign in</h1>
     
            <input 
            type="text" 
            className="w-full px-4 py-3 rounded  text-white placeholder-zinc-400 focus:outline-none ring-1 ring-zinc-400  focus:ring-red-600" 
            placeholder="Username"
            value={form.user}
            onChange={onLogin}
            name="user"
            />
            
                        <input 
                        type="password" 
                        className="w-full px-4 py-3 rounded  text-white placeholder-zinc-400 focus:outline-none ring-1 ring-zinc-400  focus:ring-red-600" 
                        placeholder="Set a password"
                        value={form.password}
                        onChange={onLogin}
                          name="password"
                        />
                      
       {loginStatus && <p>{loginStatus}</p>}

     <Button
    
       text={"Sign in"}
       style={" hover:bg-red-hover bg-netflix cursor-pointer w-full px-3 py-2 rounded  font-semibold text-white "}
        >

        </Button> 

  
        <div className="flex flex-col gap-4 items-start">
         

        <p>
            This page is protected by Google reCAPTCHA to ensure you are not a bot</p>
   
        </div>
       
        </div>
    </form>
</div>
</div>
    </div>
  )  
} 

export default Register