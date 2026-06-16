import NavLinks from "./NavLinks"
import Button from "./Button"
import { useState } from "react"
import logo from "../assets/images/logo.svg" 

import {Search, Bell,ChevronDown, ChevronUp} from "lucide-react"
import avatar from "../assets/images/Avatar.jpg"

const NavBar=({})=>{

const [isUp,setIsUp]= useState(true)
 
 const toggleMenu =()=>{
  if (isUp|| !isUp){
    setIsUp(!isUp)
  }
 }
    
    return (
    
  
            <nav className=" flex  flex-row sticky h-15 justify-between w-full p-5 gap-4 md:sticky top-0  z-20 "
            style={{background:"linear-gradient(to bottom, #141410 99%, transparent 100%)"}} >
 <div className="flex flex-row  items-center gap-6  ">
               <img src={logo} className="h-7 px-10 cursor-pointer" alt="" />
               <div className=" flex md:hidden relative group">
               <Button
               text={"Explore"}
               style={"cursor-pointer "}
               deploy={toggleMenu}
          
             
               ></Button><ChevronDown className={`transition-transform duration-200 ${isUp ? "" : "rotate-180"}`}

        
               />
             
                <div className={`absolute mt-2 top-full left-1/2 -translate-x-1/2 flex-col transition duration-400 ${isUp ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`}
>
               {console.log(isUp)}
             <div className=""></div> <div className=" pt-6 border-b border-white flex justify-center"></div>
            <div className="bg-black/95">  <NavLinks
              style={"text-white whitespace-nowrap  cursor-pointer text-sm       rounded"}
              containerStyle={"hover:bg-gray/10 text-center w-full px-20 transition-colors duration-400  py-3 cursor-pointer"}
              ></NavLinks>
</div>
               </div>
               </div>
              
             <div className="hidden md:flex  md:flex-row items-center gap-6"> 
              <NavLinks
              style={"text-white cursor-pointer text-sm   hover:text-gray transition-colors duration-300 hover:text-black rounded"}
              ></NavLinks>
              </div>
                 </div>
            <div className="flex flex-row items-center gap-4    ">
                  <Search className="cursor-pointer hover:text-gray hover:text-black rounded "></Search>
                 <div className="relative">
  <Bell className="cursor-pointer" />
  <span className="absolute -top-1 -right-1 bg-red-600 text-xs rounded-full px-1.5">3</span>
</div>
                    <Button
              text={"Kids"}
              style={"text-white cursor-pointer text-sm   hover:text-gray hover:text-black rounded"}
              >


              </Button>
              <div className="flex cursor-pointer">
          
           <img src={avatar} className="h-8 rounded-sm " alt="" />
               <ChevronDown
        
               />
              </div>               
            </div>
            </nav>

    )
  }
export default NavBar