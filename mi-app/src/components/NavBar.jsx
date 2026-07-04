import NavLinks from "./NavLinks"
import Button from "./Button"
import { useState, useRef, useEffect } from "react"
import logo from "../assets/images/logo.svg"
import { Link } from 'react-router-dom'
import DeployableMenu from "./DeployableMenu"
import { Search, Bell, ChevronDown, X } from "lucide-react"
import avatar from "../assets/images/Avatar.jpg"

const NavBar=({value, onSearch})=>{
const inputRef=useRef(null)
const [exploreOpen,setExploreOpen]= useState(true)
 const [avatarOpen,setAvatarOpen]= useState(true)
 const [inputOpen,setInputOpen]= useState(false)


const toggleInput = () => {
  if (inputOpen) {
    onSearch("")
  }
  setInputOpen(!inputOpen)
}

 const clearSearch = ()=>{
 onSearch("")
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
         <Link to="/home">      <img src={logo} onClick={()=>setInputOpen(false)} className="h-7 px-10 cursor-pointer" alt="" /></Link>
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
              nav={["/","/shows","/movies"]}
              style={"text-white cursor-pointer text-sm   hover:text-gray transition-colors duration-300 hover:text-black rounded"}
              links={[
              {label: "Home", to: "/home"},
              {label: "Shows", to: "/shows"},
              {label: "Movies", to: "/movies"},
              {label: "My List", to: "/mylist"},]}
              ></NavLinks>
              </div>
                 </div>
            <div className="flex flex-row items-center gap-4    ">
                 <div className="flex items-center relative">
                 <Button
    icon={<Search/>}
    onClick={toggleInput}
    style={inputOpen ? "left-1 cursor-pointer hover:text-gray absolute rounded shrink-0 ":" right-0 cursor-pointer hover:text-gray absolute rounded shrink-0 " } />
            <div className={!inputOpen ? "transition-all duration-1000 w-0 overflow-hidden":" border border-white overflow-hidden transition-all duration-1000 w-25 md:w-50 lg:w-64"}>
                   <input className={" w-full  px-8 py-2 "}type="text"
                 placeholder="Titles, people, genres"
                 value={value}
                 ref={inputRef}
                 onChange={(e)=>onSearch(e.target.value)}

                 />

               {value &&
               <Button
                 style={"text-white cursor-pointer right-1 top-1/2 -translate-y-1/2 absolute"}
                 onClick={clearSearch}
                 icon={<X/>}/>
               }
                 </div>
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
style="w-30"
             isUp={avatarOpen}
             >
<div className="flex flex-col gap-2">
 <Link to={"/"} className="w-full"> <Button
              text={"Sign out"}
               style={"cursor-pointer w-full"}
               ></Button></Link>
        <Button
        text={"Help"}

               style={"cursor-pointer w-full"}
               ></Button>
               </div>
             </DeployableMenu>


</div>
               </div>


            </nav>

    )
  }
export default NavBar
