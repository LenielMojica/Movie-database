
import Button from "./Button"
import logo from "../assets/images/netflix_logo_icon_170919.webp"
import {Info, Play} from 'lucide-react'
 const API_URL = "https://api.themoviedb.org/3";
import { FastAverageColor } from 'fast-average-color';
import { useEffect, useState } from "react";
const HeroSection = ({})=>{
   
    const [mainColor, setMainColor]=useState("#FFFFFF")
    const fac= new FastAverageColor()
const [movie, setMovie]=useState(null)
  const [loading, setLoading] =useState(true)
  const [error,setError] =useState(false)
   useEffect(()=>{
     const fetchHero= async()=>{
        try {
            setLoading(true)
const res= await fetch(`${API_URL}/trending/movie/week?api_key=${import.meta.env.VITE_API_KEY}`)


const data =await res.json()  


setMovie(data.results[Math.floor(Math.random() * data.results.length)]
)
        }
        catch (e){
            setError(true)
        }
        finally{
            setLoading(false)
        }



}

   fetchHero()
  
   
    }
,[])
useEffect(()=>{
    const getColor  = async()=>{ 
    const color= await fac.getColorAsync(`https://image.tmdb.org/t/p/w500${movie?.backdrop_path})`)
    setMainColor(color.hex)
   }
    getColor()
},[movie])
   
if (loading){
  return  <p>Loading...</p>
}
if (error){
    return <p>Algo salio mal :( </p>
}

    return (
   <div style={{ background: `linear-gradient(to bottom, ${mainColor} 0%, transparent 40%)` }}
><section className="flex shadow-2xl shadow-black/50 items-end h-[85vh] bg-cover rounded-xl mt-2 mr-10 ml-10 bg-center relative" 
    style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${movie?.backdrop_path})`} }>
<div className="absolute top-4 left-4"><img src={logo} className="h-10 " alt="" /></div>
 
  <div className="flex flex-col p-10 w-100 mb-30 gap-4">
       <h1 className="text-5xl font-bold ">{movie?.title}</h1>
 <div className="flex gap-8">  
     <p className="h-13 text-md w-10 text-center bg-netflix rounded font-bold ">Top <span className="text-sm ">10</span></p>

 <p className="font-bold text-lg">#2 in TV Shows today</p>
 </div>
   <div className="flex gap-4">
<div className=""><Button
icon={<Play/>}
text={"Play"}
style={"hover:bg-gray/90 transition-colors duration-300 cursor-pointer bg-white font-bold text-black rounded px-6 py-2"}
></Button></div>
<div><Button 
icon={<Info/>}
text={"Learn More"}
style={"hover:bg-[#b3b3b3]/30 cursor-pointer transition-colors duration-300 bg-[#b3b3b3]/50 text-white rounded px-6 py-2"}></Button> 
</div> </div> 
</div>

    <div className="bg-black/30 absolute right-0 top-1/2 border-l-4 py-1 pl-3 pr-8  border-white ">
<p>13+</p></div>
 <div className="absolute  rounded-xl bottom-0 left-0 w-full h-32 bg-linear-to-t from-black to-transparent"></div>
</section>
</div>

)
}
export default HeroSection