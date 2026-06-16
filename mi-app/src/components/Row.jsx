import { useState, useEffect } from "react"
import MovieCard from "./MovieCard"
const API_URL = "https://api.themoviedb.org/3";


const Row =({rowTitle, endpoint})=>{
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

    <div className=" ml-10 mr-20 mt-10 ">
<h1 className="mb-5 font-bold text-2xl">{rowTitle}</h1>
<div className="flex gap-2 overflow-auto">
    {items.map((i)=> (<MovieCard
img={`https://image.tmdb.org/t/p/w500${i.backdrop_path}`}
title={i.title}
key={i.id}

>

</MovieCard>))}


</div>
</div>

)
}
export default Row