import { useState, useEffect,useRef } from "react"
import MovieCard from "./MovieCard"
import { ChevronRight,ChevronLeft } from "lucide-react";
import Button from "./Button";
import { getList,getTrailer, withTrailerKeys,getGenres, getAll } from "../services/tmdb";
import GridSkeleton from "./GridSkeleton";
const API_URL = "https://api.themoviedb.org/3";


const Row =({rowTitle, endpoint,type})=>{
    const rowRef=useRef(null)
    const [videos,setVideos]=useState([])
    const [offset, setOffSet]= useState(0)
    const [items, setItems]=useState([])
    const [loading, setLoading]= useState(true)
 const [error, setError]= useState(false)
 const [trailerKey,setTrailerKey]=useState(null)
    const move = (distance) => {
  setOffSet(prev => {
    const min = -(rowRef.current.scrollWidth - rowRef.current.clientWidth)
    const next = prev + distance
   return Math.max(min, Math.min(0, next))

  })
}

    useEffect (()=>{
        
     const  fetchRow = async()=>{
     try{
            setLoading(true)  

       
         const items =await getAll(endpoint)
         setItems(items)
       

    
}
        catch (e){
            setError(true)
            console.log(e)
        }
        finally{
            setLoading(false)
        }
    }
fetchRow()
},[endpoint])
  
if (loading){
    return <GridSkeleton
    count={5}
    />
}
  if (error){
    

   return <p>Algo salio mal</p>
  }


    return(

   <div className="group/row pl-10 mt-10 relative hover:z-20">

        

<Button 
style={"opacity-0 group-hover/row:opacity-100 z-30 flex items-center justify-center hover:scale-200 p-0 transition duration-500  absolute cursor-pointer left-0 top-10 bottom-0"} icon={<ChevronLeft></ChevronLeft>}
onClick={()=>move(500)}

></Button>
<h1 className=" font-bold text-2xl">{rowTitle}</h1>
<div 
style={{transform: `translateX(${offset}px)`}}
ref={rowRef} className="flex gap-2 py-5 transition-transform duration-800 ease-out  rounded-xl">

    {items.map((i, index)=> (
      <MovieCard
        key={i.id}
        movie={i}
        origin={index === 0 ? "origin-left" : index === items.length - 1 ? "origin-right" : "origin-up"}
      />
    ))}


</div>
<Button 
style={"opacity-0 group-hover/row:opacity-100 hover:scale-200 transition duration-500 shadow-xl absolute cursor-pointer right-8 top-10 bottom-0"} icon={<ChevronRight></ChevronRight>}
onClick={()=>move(-500)}
></Button>

</div>

)
}


export default Row