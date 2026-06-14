
import Button from "./Button"
import {Info, Play} from 'lucide-react'
import hero from "../assets/images/hero.webp"
const HeroSection = ({})=>{
return (
   <section className="flex items-end h-[85vh] bg-cover rounded-xl mt-1 mr-10 ml-10 from-black bg-linear-to-r to-transparent bg-center relative" 
    style={{backgroundImage:`url(${hero})`}}>
 
 
  <div className="flex flex-col p-10 w-100 mb-30 gap-4">
       <h1 className="text-5xl font-bold ">Squid Game</h1>
 <div className="flex gap-8">  
     <p className="h-13 text-md w-10 text-center bg-netflix rounded font-bold ">Top <span className="text-sm ">10</span></p>

 <p className="font-bold text-lg">#2 in TV Shows today</p>
 </div>
   <div className="flex gap-4">
<div className=""><Button
icon={<Play/>}
text={"Play"}
style={"hover:bg-gray/90 cursor-pointer bg-white font-bold text-black rounded px-6 py-2"}
></Button></div>
<div><Button 
icon={<Info/>}
text={"Learn More"}
style={"hover:bg-[#b3b3b3]/30 cursor-pointer bg-[#b3b3b3]/50 text-white rounded px-6 py-2"}></Button> 
</div> </div> 
</div>

    <div className="bg-black/30 absolute right-0 top-1/2 border-l-4 py-1 pl-3 pr-8  border-white ">
<p>13+</p></div>
 <div className="absolute  rounded-xl bottom-0 left-0 w-full h-32 bg-linear-to-t from-black to-transparent"></div>
</section>

)
}
export default HeroSection