
import Button from "./Button"
import logo from "../assets/images/netflix_logo_icon_170919.webp"
import {Info, Play, VolumeX, Volume2} from 'lucide-react'
import { FastAverageColor } from 'fast-average-color';
import { useEffect, useState } from "react";
import useHover from "../hooks/useHover";
import IconButton from "./IconButton";
import {getHeroItem} from "../services/tmdb"
import Teaser from "./Teaser";
import { useSearchParams } from "react-router-dom";
import { HeroSkeleton } from "./HeroSkeleton";
const HeroSection = ({type})=>{



    const [mute, setMute]=useState(true)
    const [searchParams,setSearchParams]=useSearchParams()
    const[isHovered,hoverHandlers]=useHover({onLeave:()=>setMute(true)})
   const [trailerKey,setTrailerKey]=useState(null)
    const [mainColor, setMainColor]=useState("#FFFFFF")
    const fac= new FastAverageColor()
const [movie, setMovie]=useState(null)
  const [loading, setLoading] =useState(true)
  const [error,setError] =useState(false)

   useEffect( ()=>{

 const fetchHero = async () => {
  try {
    const hero = await getHeroItem(type)
    setMovie(hero)
    setTrailerKey(hero.key)
  }
  catch (e) { setError(true); console.log(e) }
  finally { setLoading(false) }
}

  fetchHero()
    }
,[type])

useEffect(()=>{
  if (!movie?.backdrop_path) return
  const getColor = async()=>{
    const color= await fac.getColorAsync(`https://image.tmdb.org/t/p/w500${movie?.backdrop_path})`)
    setMainColor(color.hex)

   }
  getColor()
},[movie])
      const typeMedia = movie?.media_type ?? (movie?.first_air_date ? "tv" : "movie")
const onDetail = (id, type) => {
  setSearchParams(prev => {
    prev.set("item", id)
    prev.set("type", type)
    return prev
  })
}
      if (loading){
  return  (
    <HeroSkeleton/>
  )
}
if (error){
    return <p>Something went wrong :( </p>
}

    return (
   <div style={{ background: `linear-gradient(to bottom, ${mainColor} 0%, transparent 40%)` }}
>
 <section className="flex shadow-2xl shadow-black/50 items-end h-[85vh] bg-cover rounded-xl mt-2 mr-10 ml-10 bg-center relative"
   {...hoverHandlers}
   style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`} }>
 {isHovered &&

 <div className="absolute inset-0 z-20 overflow-hidden rounded-xl">
 <IconButton
icon={mute ? <VolumeX/> :<Volume2 />}
style={"rounded-full cursor-pointer absolute z-20 right-20 top-10 transition-colors  duration-300 bg-[#b3b3b3]/50 hover:bg-[#b3b3b3]/30 p-2 "}
onClick={()=>setMute(prev=>!prev)}
/>
 <div className={`absolute inset-0 scale-115  ${isHovered ? "opacity-100" : "opacity-0"}`}>
<Teaser
videoKey={trailerKey}
mute={mute}

/>


</div>
</div>
 }
  <div className="absolute flex w-full justify-between top-4 left-4"><img src={logo} className="h-10 " alt="" />  </div>

  <div className="flex flex-col p-10 w-100 mb-30 gap-4 absolute z-20">
     <h1 className="text-5xl font-bold ">{movie?.title ?? movie?.name}</h1>
 <div className="flex gap-8">
<p>{Math.round(movie?.vote_average * 10)}% match</p>


<p>{movie?.release_date?.slice(0, 4)}</p>

 </div>
 <p className="">{movie?.overview}</p>
   <div className="flex gap-4">
<div className=""><Button
icon={<Play/>}
text={"Play"}
style={"hover:bg-gray/90 transition-colors duration-300 cursor-pointer bg-white font-bold text-black rounded-3xl px-6 py-2"}
></Button></div>
<div><Button
onClick={()=>onDetail(movie.id,typeMedia)}
icon={<Info/>}
text={"Learn More"}
style={"hover:bg-[#b3b3b3]/30 cursor-pointer transition-colors duration-300 bg-[#b3b3b3]/50 text-white rounded-3xl rounded px-6 py-2"}></Button>
</div> </div>
</div>

    <div className="bg-black/30 absolute right-0 top-1/2 border-l-4 py-1 pl-3 pr-8  border-white ">
<p>{movie?.adult ? "18+" : "13+"}</p></div>
 <div className="absolute  rounded-xl bottom-0 left-0 w-full h-32 bg-linear-to-t from-black to-transparent"></div>
</section>

</div>

)
}
export default HeroSection
