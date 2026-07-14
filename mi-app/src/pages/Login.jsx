import Button from "../components/Button"
import { useState } from "react"
import logo from "../assets/images/logo.svg" 
import bg from "../assets/images/hero-img.jpg"
import { Link } from "react-router-dom"
import {login as goIn} from "../services/auth"
import { AuthContext } from "../components/AuthContext"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
const Login =({})=>{
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

try {
  const data =await goIn(form)
localStorage.setItem("token",data.token)
login(localStorage.getItem("token"))
  navigate("/home")

}
catch(e){
    setLoginStatus("Credenciales invalidas")
  }
  }
  
  console.log(form)
 
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
            placeholder="Email or mobile"
            value={form.user}
            onChange={onLogin}
            name="user"
            />
            
                        <input 
                        type="password" 
                        className="w-full px-4 py-3 rounded  text-white placeholder-zinc-400 focus:outline-none ring-1 ring-zinc-400  focus:ring-red-600" 
                        placeholder="Password"
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
<h2 className="text-[#b3b3b3]">OR</h2>
  <Button
       text={"Use a sign in code"}
        style={" bg-[#221f1f]  cursor-pointer w-full px-3 py-2 rounded  font-semibold text-white"}
        >

        </Button>
        <a href="#" className="underline text-lg">Forgot Password?</a>
        <div className="flex flex-col gap-4 items-start">
          <div className="flex flex-row items-center gap-2">  <input type="checkbox"/>
        <p className="text-lg">Remember me</p></div>
         <p className="text-lg font-normal">New to netflix? <span className="font-bold ">Sign up now</span></p>
        <p>
            This page is protected by Google reCAPTCHA to ensure you are not a bot</p>
    <p className="p-3">  <a href="" className="text-blue-500 underline"> Learn more</a>
        </p>
        </div>
       
        </div>
    </form>
</div>
</div>
    </div>
  )  
} 

export default Login