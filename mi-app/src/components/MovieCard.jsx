import CardPanel from './CardPanel';

const MovieCard = ({ id, img, title, origin, width="w-70" }) => {
  return (
   <div className='group relative hover:z-20 '>
   <div className={`  relative transition rounded-xl hover:drop-shadow-2xl hover:drop-shadow-black hover:scale-150 ${origin}`}> <div className={`  shrink-0 cursor-pointer ${width} `}  >
     <img src={img} className="w-full rounded-xl group-hover:rounded-b-none aspect-video object-cover" />

    </div>
    <CardPanel />
    </div>
    </div>
  );
};

export default MovieCard;
