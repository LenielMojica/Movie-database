import { Play, Plus,ThumbsUp, ChevronDown, Dot } from 'lucide-react';
import Badge from './Badge';
import IconButton from './IconButton';
const CardPanel=({})=>{
    return (
    <div className='flex '>
    <div className=' flex  px-3 flex-col absolute top-full left-0 right-0 justify-between opacity-0 group-hover:opacity-100 shadow-white rounded-b-lg bg-[#181818]'> 
  <div className='flex w-full  justify-between cursor-pointer'>
   <div className='flex gap-2 py-5 '>
     
 <IconButton
 icon={<Play size={15}/>}
 tooltip={"Play"}
 />
    <div className='group/plus relative'>     <IconButton
 icon={<Plus size={15}/>}
  tooltip={"Add to my list"}
 />
     

    
    </div>
   
    <div className='group/thumbsup relative'>   <IconButton
 icon={<ThumbsUp size={15}/>}
  tooltip={"Like"}
 />
     
  
    </div>
   </div>
    
<div className='py-5'>  
    <div className='relative group/chev'> <IconButton
 icon={<ChevronDown size={15}/>}
  tooltip={"Info"}/>
     </div>
</div>
  </div>

  <div className='flex cursor-pointer gap-4 text-sm '>
<Badge 
text={"16+"}/>
 <div className=''><p> Temporadas</p></div>
 <Badge 
text={"HD"}/>
  </div>
<div className='flex cursor-pointer py-5 text-white text-sm'>
<p>Logrado</p>
<Dot className='text-gray'/>
<p>De misterio</p>
<Dot className='text-gray'/>
<p>Asesinatos</p>
</div>
</div>
</div>
    )
}
export default CardPanel