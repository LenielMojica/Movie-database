import ReactPlayer from 'react-player'
import { useState } from 'react';
const Teaser=({videoKey,mute,onReady })=> {
     const [ready, setReady] = useState(false)
     const YOUTUBE_URL = "https://www.youtube.com/watch?v=";
    return (

      <div className={`w-full h-full transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}>

       <ReactPlayer
  src={`${YOUTUBE_URL}${videoKey}`}
  playing={true} 
  muted ={mute}            
  loop={false}
  controls={false}
  width="100%"
  height="100%"
  onReady={() => setReady(true)
    
  }

  
 
  
/>
</div>
  
    )
}
export default Teaser