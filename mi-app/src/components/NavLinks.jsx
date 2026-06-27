import { useState } from "react"
import Button from "./Button"
const NavLinks =({style, links,text,containerStyle, children})=>{

    return(
        links.map((l)=>(
<div className={containerStyle}><Button  style={style} text={l}

 
 ></Button>
 </div>
        ))
 
    

)
}

export default NavLinks