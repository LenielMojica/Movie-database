import Button from "./Button"
import { Play, Plus,ThumbsUp, ChevronDown, Dot } from 'lucide-react';
const IconButton =({icon,tooltip})=>{
    return(
<div className='group/thumbsup relative'>  <Button style={"cursor-pointer rounded-full border border-gray-400 p-2 hover:bg-white/10 bg-[#181818] text-white"}
    icon={icon }
    ></Button> 
     <span className='opacity-0 pointer-events-none group-hover/thumbsup:opacity-100  ont-semibold
                 px-3 py-1 rounded shadow-lg   whitespace-nowrap bg-white absolute bottom-full left-1/2 -translate-x-1/2 text-black text-[10px]'>
   {tooltip}
     </span>
  
    </div>
    )
}
export default IconButton