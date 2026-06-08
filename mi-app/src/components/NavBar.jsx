import Button from "./Button"
import { useState } from "react"
import logo from "../assets/images/logo.svg" 

import {Search, Bell,ChevronDown} from "lucide-react"
import avatar from "../assets/images/Avatar.jpg"

const NavBar=({})=>{
 
    
    return (
    
    
            <nav className="flex flex-col md:flex-row justify-between w-full p-5 gap-4 md:absolute bg-linear-to-b from-black/80 z-20 to-transparent " >
 <div className="flex flex-col md:flex-row items-center gap-6  ">
               <img src={logo} className="h-8 cursor-pointer" alt="" />
              <Button
              text={"Home"}
              style={"text-white cursor-pointer  hover:bg-white hover:text-black rounded"}
              ></Button>
              <Button
              text={"Shows"}
              style={"text-white cursor-pointer  hover:bg-white hover:text-black rounded"}
              ></Button>
              <Button
              text={"Movies"}
              style={"text-white cursor-pointer  hover:bg-white hover:text-black rounded"}
              ></Button>
              <Button
              text={"Games"}
              style={"text-white cursor-pointer  hover:bg-white hover:text-black rounded"}
              ></Button>
              <Button
              text={"New & popular"}
              style={"text-white cursor-pointer  hover:bg-white hover:text-black rounded"}
              ></Button>
               <Button
              text={"My List"}
              style={"text-white cursor-pointer  hover:bg-white hover:text-black rounded"}
              ></Button>
                 </div>
            <div className="flex flex-col md:flex-row items-center gap-4    ">
                  <Search className="cursor-pointer hover:bg-white hover:text-black rounded "></Search>
                  <Bell className="cursor-pointer  hover:bg-white hover:text-black rounded"></Bell>
                    <Button
              text={"Kids"}
              style={"text-white cursor-pointer   hover:bg-white hover:text-black rounded"}
              >


              </Button>
              <div className="flex cursor-pointer">
          
           <img src={avatar} className="h-8 " alt="" />
               <ChevronDown
        
               />
              </div>               
            </div>
            </nav>


    )
}
export default NavBar