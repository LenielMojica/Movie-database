import CardPanel from './CardPanel';
import useHover from '../hooks/useHover';
import ReactPlayer from 'react-player'

const MovieCard = ({ id, videoKey, img, title, origin, width="w-70",trailerKey }) => {
  const [isHovered,hoverHandlers]=useHover()
 const YOUTUBE_URL = "https://www.youtube.com/watch?v=";
  return (
   <div className='group relative hover:z-20 
   
   '
     {...hoverHandlers}
   >
  
   <div className={`  relative group/movie transition rounded-xl hover:drop-shadow-2xl hover:drop-shadow-black hover:scale-150 ${origin}`}> <div className={`  shrink-0 cursor-pointer ${width} `}  >
 {isHovered &&
 <div className="absolute inset-0 z-0 overflow-hidden rounded-t-xl pointer-events-none">

       <ReactPlayer
  src={`${YOUTUBE_URL}${videoKey}`}
  playing={true} 
  muted ={false}            
  loop
  controls={false}
  width="100%"
  height="100%"
  
/>

   </div>
 } 
   
     <img src={img} className="w-full rounded-xl group-hover:rounded-b-none aspect-video object-cover" />

    </div>
    <CardPanel />
    </div>
    </div>
  );
};

export default MovieCard;
