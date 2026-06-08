import hero from "../assets/images/hero.webp"
import Button from "./Button"
import {Info, Play} from 'lucide-react'
const HeroSection = ({})=>{
return (
    <section className="flex items-end h-[85vh]   bg-cover bg-center relative" 
    style={{backgroundImage:`url(${hero})`}}>
 <div className="flex flex-col p-10 w-100 mb-52 gap-4"> 
    <h1 className="text-5xl font-bold ">Squid Game</h1>
 <div className="flex gap-8">   <p className="h-10 text-sm w-10 bg-netflix rounded font-bold "><center>Top 10</center></p>
 <p className="font-bold text-lg">#2 in TV Shows today</p>
 </div>
  <p className="text-justify">Squid Game (El juego del calamar) es una exitosa serie surcoreana de suspense y supervivencia creada por Hwang Dong-hyuk para Netflix. La historia sigue a cientos de personas ahogadas en deudas que aceptan una misteriosa invitación para competir en juegos infantiles tradicionales coreanos a cambio de un premio millonario, descubriendo que los perdedores son eliminados de forma letal.</p>
  <div className="flex gap-4">
<Button
icon={<Play/>}
text={"Play"}
style={"cursor-pointer bg-white font-bold text-black rounded px-6 py-2"}
></Button>
<Button 
icon={<Info/>}
text={"Learn More"}
style={"cursor-pointer bg-[#b3b3b3]/50 text-white rounded px-6 py-2"}></Button> 
</div>  
</div>

    <div className="bg-black/30 absolute right-0 top-1/2 border-l-4 py-1 pl-3 pr-8  border-white ">
<p>13+</p></div>
</section>
)
}
export default HeroSection