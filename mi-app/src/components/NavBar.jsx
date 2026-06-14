import Button from "./Button"
import { useState } from "react"
import logo from "../assets/images/logo.svg" 

import {Search, Bell,ChevronDown} from "lucide-react"
import avatar from "../assets/images/Avatar.jpg"

const NavBar=({})=>{
 
    
    return (
    
    
            <nav className=" flex fixed flex-row   justify-between w-full p-5 gap-4 md:sticky top-0 bg-black z-20 " >
 <div className="flex flex-col md:flex-row items-center gap-6  ">
               <img src={logo} className="h-8 cursor-pointer" alt="" />
               <div className=" flex md:hidden"><Button
               text={"Explore"}
               style={""}
               ></Button><ChevronDown
        
               />
               </div>
             <div className="hidden md:flex  md:flex-row items-center gap-6"> <Button
              text={"Home"}
              style={"text-white text-sm cursor-pointer transition hover:text-gray hover:text-black rounded"}
              ></Button>
              <Button
              text={"Shows"}
              style={"text-white text-sm cursor-pointer  transition hover:text-gray hover:text-black rounded"}
              ></Button>
              <Button
              text={"Movies"}
              style={"text-white text-sm cursor-pointer transition hover:text-gray hover:text-black rounded"}
              ></Button>
              <Button
              text={"Games"}
              style={"text-white text-sm cursor-pointer transition hover:text-gray hover:text-black rounded"}
              ></Button>
              <Button
              text={"New & popular"}
              style={"text-white text-sm cursor-pointer transition hover:text-gray hover:text-black rounded"}
              ></Button>
               <Button
              text={"My List"}
              style={"text-white text-sm cursor-pointer transition hover:text-gray hover:text-black rounded"}
              ></Button>
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