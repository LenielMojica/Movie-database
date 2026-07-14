import Row from "./Row"
import HeroSection from "./HeroSection"
import { goToPage } from "../services/auth"
import { MyListContext } from "./MyListContext"
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import { useEffect } from "react"
const Browse = ({ rows,heroType }) => {
  const entries = Object.entries(rows)
  const {logout}=useContext(AuthContext)
 useEffect(()=>{
  
     const browse =async()=>{
          
                await goToPage()
              
           
                
            
           
                             
    
              
            }
            browse()
  },[])
  return (
    <><HeroSection
    type={heroType}
    />
  <div className='flex flex-col gap-10'>
      {entries.map(([title, { endpoint, type }]) => (
        <Row key={endpoint} rowTitle={title} endpoint={endpoint} type={type} />
      ))}
    </div></>
    
  )
}
export default Browse