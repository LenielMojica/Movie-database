import { useState } from "react"
import Button from "./Button"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
const NavLinks =({style,nav, links,text,containerStyle, children})=>{

    return(
        
        links.map((l)=>(
            
<div className={containerStyle}
key={l.to}
><Link to={l.to}><Button   style={style} text={l.label}

 
 ></Button></Link>  
 </div>
        ))
 
    

)
}

export default NavLinks