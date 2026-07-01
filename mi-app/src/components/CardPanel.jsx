import { Play, Plus, ThumbsUp,Check, ChevronDown, Dot } from 'lucide-react';
import Badge from './Badge';
import { useContext } from 'react';
import { MyListContext } from './MyListContext';
import IconButton from './IconButton';

const CardPanel = ({ movie }) => {
  
const { toggleItem, myList } = useContext(MyListContext)
const isAdded = myList.some(m => m.id === movie.id)

  const genres = movie.genres ?? [];
  const age = movie.adult ? "18+" : "13+";
  const rating = movie.vote_average;
  const year = (movie.release_date ?? movie.first_air_date)?.slice(0, 4) ?? "?";

  return (
    <div className='flex '>
      <div className=' hidden  px-3 flex-col absolute top-full left-0 right-0 justify-between  group-hover/movie:flex shadow-white rounded-b-lg bg-[#181818]'>
        <div className='flex w-full  justify-between cursor-pointer'>
          <div className='flex gap-2 py-5 '>

            <IconButton
              icon={<Play size={15} />}
              tooltip={"Play"}
              style={"cursor-pointer rounded-full  p-2 hover:bg-white/90 bg-white text-black"}
            />
            <div className='group/plus relative'>
              <IconButton
                icon={isAdded ? <Check size={15} /> : <Plus size={15} />}
                tooltip={"Add to my list"}
              style={`cursor-pointer rounded-full border p-2 transition-all duration-300 active:scale-75 ${
  isAdded
    ? "bg-white text-black scale-110 border-white"
    : "bg-[#181818] text-white border-gray-400 scale-100"
}`}


                onClick={() => toggleItem(movie)}
              />
            </div>

            <div className='group/thumbsup relative'>
              <IconButton
                icon={<ThumbsUp size={15} />}
                tooltip={"Like"}
                style={"cursor-pointer rounded-full border border-gray-400 p-2 hover:bg-white/10 bg-[#181818] text-white"}
              />
            </div>
          </div>

          <div className='py-5'>
            <div className='relative group/chev'>
              <IconButton
                icon={<ChevronDown size={15} />}
                tooltip={"Info"} style={"cursor-pointer rounded-full border border-gray-400 p-2 hover:bg-white/10 bg-[#181818] text-white"} />
            </div>
          </div>
        </div>

        <div className='flex cursor-pointer gap-4 text-sm '>
          <Badge text={age} />
          <Badge text={`${Math.round(rating * 10)}%`} />
          <Badge text={year} />
        </div>

        <div className='flex cursor-pointer py-5 text-white text-sm'>
          {genres.slice(0, 3).map((g, index, arr) => (
            <span key={g} className="flex items-center">
              {g}
              {index < arr.length - 1 && <Dot className="text-gray" />}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardPanel;
