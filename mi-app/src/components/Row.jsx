import { useState, useEffect,useRef } from "react"
import MovieCard from "./MovieCard"
import { ChevronRight,ChevronLeft } from "lucide-react";
import Button from "./Button";
const API_URL = "https://api.themoviedb.org/3";


const Row =({rowTitle, endpoint})=>{
    const rowRef=useRef(null)
    const [items, setItems]=useState([])
    useEffect (()=>{
     const  fetchRow = async()=>{
        const res =await fetch(`${API_URL}${endpoint}?api_key=${import.meta.env.VITE_API_KEY}`)
    const data =await res.json()
    setItems(data.results)
}
fetchRow()
},[endpoint])

return (

    <div className="  ml-5  mt-10 relative ">
        

<Button 
style={"opacity-0 hover:opacity-100 hover:scale-200 p-0 transition duration-500  absolute cursor-pointer left-0 top-10 bottom-0"} icon={<ChevronLeft></ChevronLeft>}
onClick={()=>{rowRef.current.scrollBy({ left: -1500, behavior: "smooth" })}}

></Button>
<h1 className=" font-bold text-2xl">{rowTitle}</h1>
<div ref={rowRef} className="flex gap-2 scrollbar-hide py-10  overflow-x-auto rounded-xl">

    {items.map((i, index)=> (<MovieCard
img={`https://image.tmdb.org/t/p/w500${i.backdrop_path}`}
title={i.title}
key={i.id}
origin={index===0?"origin-left":index===items.length-1? "origin-right" :"origin-center"}

>

</MovieCard>))}


</div>
<Button 
style={"opacity-0 hover:opacity-100 hover:scale-200 transition duration-500 shadow-xl absolute cursor-pointer right-8 top-10 bottom-0"} icon={<ChevronRight></ChevronRight>}
onClick={()=>{rowRef.current.scrollBy({ left: 1500, behavior: "smooth" })}}
></Button>

</div>

)
}
export default Row