import NavLinks from "./NavLinks"
import Button from "./Button"
import { useState, useRef, useEffect } from "react"
import logo from "../assets/images/logo.svg" 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import DeployableMenu from "./DeployableMenu"
import {Search, Bell,ChevronDown, ChevronUp, Form} from "lucide-react"
import avatar from "../assets/images/Avatar.jpg"
const API_URL = "https://api.themoviedb.org/3";

const NavBar=({value, onSearch})=>{
const inputRef=useRef(null)
const [exploreOpen,setExploreOpen]= useState(true)
 const [avatarOpen,setAvatarOpen]= useState(true)
 const [inputOpen,setInputOpen]= useState(false)
 
   const [search,setSearch]= useState(false)
 

  const toggleInput =()=>{
if (inputOpen || !inputOpen) {
  setInputOpen(!inputOpen)
}
 }
 const toggleMenu =()=>{
  if (exploreOpen|| !exploreOpen ){
    setExploreOpen(!exploreOpen)
  }
 }
 const toggleAvatar=()=>{
  if (avatarOpen|| !avatarOpen ){
    setAvatarOpen(!avatarOpen)
  }
 }
 useEffect(() => {
  if (inputOpen=>prev) {
    inputRef.current.focus()
  }
}, [inputOpen])
    
    return (
    
  
            <nav className=" flex  flex-row sticky h-15 justify-between w-full p-5 gap-4 md:sticky top-0  z-40 "
            style={{background:"linear-gradient(to bottom, #141410 99%, transparent 100%)"}} >
 <div className="flex flex-row  items-center gap-6  ">
         <Link to="/home">      <img src={logo} className="h-7 px-10 cursor-pointer" alt="" /></Link>
               <div className=" flex md:hidden relative group">
             
               <Button
               text={"Explore"}
               style={"cursor-pointer "}
               onClick={toggleMenu}
          icon={<ChevronDown className={`transition-transform duration-200 ${exploreOpen ? "" : "rotate-180"}`}

        
               />}
             
               ></Button>
             
             <DeployableMenu
           isUp={exploreOpen}
             ><NavLinks
             links={["Home", "Shows", "Movies", "Games", "New & popular", "My List"]}
              style={"text-white whitespace-nowrap  cursor-pointer text-sm       rounded"}
              containerStyle={"hover:bg-gray/10 text-center w-full px-20 transition-colors duration-400  py-3 cursor-pointer"}
              ></NavLinks>
       
              </DeployableMenu>
               </div>
              
             <div className="hidden md:flex  md:flex-row items-center gap-6"> 
              <NavLinks
              style={"text-white cursor-pointer text-sm   hover:text-gray transition-colors duration-300 hover:text-black rounded"}
              links={["Home", "Shows", "Movies", "Games", "New & popular", "My List"]}
              ></NavLinks>
              </div>
                 </div>
            <div className="flex flex-row items-center gap-4    ">
                 <div className="relative">
                  <Button
                   icon={<Search></Search>}
                   onClick={toggleInput}
                   style={!inputOpen ? "cursor-pointer hover:text-gray  rounded  ":"cursor-pointer hover:text-gray  rounded  absolute left-1 top-1/2 -translate-y-1/2"}></Button>
                 <input className={!inputOpen ? "w-0 transition-all duration-1000":"flex transition-all duration-1000 w-25 md:w-50 lg:w-64 border border-white pl-8 py-2 "}type="text" 
                 placeholder="Titulos,Personas, generos"
                 value={value} 
                 ref={inputRef}
                 onChange={(e)=>onSearch(e.target.value)} />
                 
                 </div>
                 <div className="relative">
  <Bell className="cursor-pointer" />
  <span className="absolute -top-1 -right-1 bg-red-600 text-xs rounded-full px-1.5">3</span>
</div>
 
                    <Button
              text={"Kids"}
              style={"text-white cursor-pointer text-sm   hover:text-gray hover:text-black rounded"}
              >


              </Button>
              <div className="flex relative ">
          
       <img src={avatar} className="h-8 rounded-sm cursor-pointer" alt="" />
           <Button
           icon={ <ChevronDown className={`transition-transform duration-200 ${avatarOpen ? "" : "rotate-180"}`}
/>}
           onClick={toggleAvatar}
           style={"cursor-pointer"}></Button>
           <DeployableMenu
          
             isUp={avatarOpen}
             >
  
 <Link to={"/"}> <NavLinks
               links={["Cerrar sesión"]}
               style={"cursor-pointer"}
               ></NavLinks></Link>
        <NavLinks
               links={[ "Ayuda"]}
               style={"cursor-pointer"}
               ></NavLinks>
             </DeployableMenu>
         

</div>
               </div>
                         
    
            </nav>

    )
  }
export default NavBar