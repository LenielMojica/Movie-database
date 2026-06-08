import Button from "../components/Button"
import { useState } from "react"
import logo from "../assets/images/logo.svg" 
import bg from "../assets/images/hero-img.jpg"
import { Link } from "react-router-dom"
const Login =({})=>{
  
  return (
    <div style={{backgroundImage:`url(${bg})`}}
    className="min-h-screen bg-cover bg-center bg-black/50">
    <div className="min-h-screen bg-black/60">
    <nav className="flex-col  p-10 fixed " >
         <a href="#"><img src={logo} alt="logo" className="h-10"></img></a>
   
    </nav>
<div className="flex min-h-screen justify-center items-center text-white ">
    <form action="Sign in" className="w-full max-w-md bg-black/70 p-12 rounded">
        <div className=" flex flex-col justify-center gap-4 items-center">
            <h1 className="font-bold text-3xl self-start    ">Sign in</h1>
     
            <input type="text" className="w-full px-4 py-3 rounded  text-white placeholder-zinc-400 focus:outline-none ring-1 ring-zinc-400  focus:ring-red-600" placeholder="Email or mobile" />
            
                        <input type="password" className="w-full px-4 py-3 rounded  text-white placeholder-zinc-400 focus:outline-none ring-1 ring-zinc-400  focus:ring-red-600" placeholder="Password" />
      

     <Link to={"/home/"} className="w-full block">
     <Button
       text={"Sign in"}
       style={" hover:bg-red-hover bg-netflix cursor-pointer w-full px-3 py-2 rounded  font-semibold text-white text-center"}
        >

        </Button></Link>     
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
            This page is protected by Google reCAPTCHA to ensure you are not a bot
    <p className="p-3">  <a href="" className="text-blue-500 underline"> Learn more</a></p>
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