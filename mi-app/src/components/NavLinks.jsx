import { useState } from "react"
import Button from "./Button"
const NavLinks =({style, links,text,containerStyle, children})=>{

    return(
        links.map((l)=>(
<div className={containerStyle}><Button key={l} style={style} text={l}
 text={l}
 
 ></Button>
 </div>
        ))
 
    

)
}

export default NavLinks