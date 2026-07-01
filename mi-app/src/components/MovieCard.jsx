import CardPanel from './CardPanel';
import useHover from '../hooks/useHover';
import Teaser from './Teaser';

const MovieCard = ({ movie, origin = "", width = "w-70" }) => {
  const [isHovered, hoverHandlers] = useHover();
  const img = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;

  return (
    <div className='group relative hover:z-20' {...hoverHandlers}>
      <div className={`relative group/movie transition rounded-xl hover:drop-shadow-2xl hover:drop-shadow-black hover:scale-150 ${origin}`}>
        <div className={`shrink-0 cursor-pointer ${width}`}>
          {isHovered && movie.key &&
            <div className="absolute inset-0 z-0 overflow-hidden rounded-t-xl pointer-events-none">
              <Teaser videoKey={movie.key} mute={true} />
            </div>
          }
          <img src={img} className="w-full rounded-xl group-hover:rounded-b-none aspect-video object-cover" />
        </div>
        <CardPanel movie={movie} />
      </div>
    </div>
  );
};

export default MovieCard;
