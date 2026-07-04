import Button from "./Button"
import { Play, Plus,ThumbsUp, ChevronDown, Dot,  } from 'lucide-react';
const IconButton =({icon,tooltip, style,onClick})=>{
    return(
<div className='group/thumbsup relative'>  <Button style={style}
    icon={icon }
    onClick={onClick}
    ></Button> 
   {tooltip && <span className='opacity-0 pointer-events-none group-hover/thumbsup:opacity-100  font-semibold
                 px-3 py-1 rounded shadow-lg   whitespace-nowrap bg-white absolute bottom-full left-1/2 -translate-x-1/2 text-black text-[10px]'>
   {tooltip}
     </span>
  
   }
    </div>
    )
}
export default IconButton