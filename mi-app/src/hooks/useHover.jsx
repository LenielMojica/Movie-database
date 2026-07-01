import { useState } from "react"

const useHover=({onEnter, onLeave}={})=>{
    const [isHovered,setIsHovered]= useState(false)
    const handlers={
        onMouseEnter: ()=>{setIsHovered(true);onEnter?.()},
        onMouseLeave: ()=>{setIsHovered(false);onLeave?.()}
    }
    return [isHovered,handlers]
}
export default useHover