import { useState } from "react"

const useHover=()=>{
    const [isHovered,setIsHovered]= useState(false)
    const handlers={
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
    }
    return [isHovered,handlers]
}
export default useHover