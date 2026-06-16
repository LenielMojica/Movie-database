import { useState } from "react"
import Button from "./Button"
const NavLinks =({style,text,containerStyle})=>{
    const [links, setLinks]= useState(["Home", "Shows", "Movies", "Games", "New & popular", "My List"])
    return(
        links.map((l)=>(
<div className={containerStyle}><Button style={style}
 text={l}
 
 ></Button>
 </div>
        ))
 
    

)
}

export default NavLinks