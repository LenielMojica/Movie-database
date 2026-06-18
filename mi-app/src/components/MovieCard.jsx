import { Link } from 'react-router-dom';
import hero from "../assets/images/hero.webp"
import { Play, Plus,ThumbsUp, ChevronDown } from 'lucide-react';
import Button from './Button';
const MovieCard = ({ id, img, title,origin }) => {
  return (
   <div className='group'>
   <div className={` group-hove:shadow-black  transition hover:scale-110 ${origin}`}> <div className={`w-70 relative  shrink-0 cursor-pointer rounded-xl ` }  >
     <img src={img} className="w-full aspect-video object-cover" />

    </div>
    <div className=' flex flex-col justify-between opacity-0 group-hover:opacity-100 shadow-white rounded-b-lg bg-[#181818]'> 
  <div className='flex absolute top-full justify-between'>
   <div className='flex gap-2'> <Button style={"cursor-pointer rounded-full  p-1  bg-white text-black hover:bg-gray"}
    icon={<Play />}
    ></Button>
      <Button style={"cursor-pointer rounded-full border border-gray-400 p-1  bg-[#181818] text-white"}
    icon={<Plus/>}
    ></Button>
      <Button style={"cursor-pointer rounded-full border border-gray-400 p-1  bg-[#181818] text-white"}
    icon={<ThumbsUp/>}
    ></Button>
    </div>
<div>    <Button
style={"cursor-pointer flex-end rounded-full border border-gray-400 p-1  bg-[#181818] text-white"}
icon={<ChevronDown></ChevronDown>}
></Button></div>
  </div>
  <div>

  </div>
<div>

</div>
</div>
    </div>
    </div>
  );
};

export default MovieCard;


/* ==========================================================================
   VERSIÓN ANTERIOR (movie database) — guardada como referencia.
   Borra este bloque cuando ya no la necesites.
   ==========================================================================

import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const MovieCard = ({ title, id, type, year, poster, onToggleFavorite, isFavorite }) => {

  const saveFavorites = () => {
    onToggleFavorite({ imdbID: id, Title: title, Type: type, Year: year, Poster: poster })
  }

  const favoriteColor = isFavorite ? "text-yellow-400" : "text-zinc-200"

  return (
    <div>
      <div className="relative">
        <img
          src={poster}
          alt=""
          className="w-full h-full object-cover"
        ></img>
        <button
          className={`favorite-button absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 ${favoriteColor} shadow-md backdrop-blur-sm transition hover:scale-110 hover:bg-black/80 hover:text-yellow-400`}
          aria-label="Toggle favorite"
          data-id={id}
          onClick={saveFavorites}
        >
          (icono SVG de la estrella aquí)
        </button>
      </div>
      <div className="p-3">
        <p className="text-white font-semibold text-sm truncate">{title}</p>
        <p className="text-sm text-gray-400 mb-3">{year} | {type}</p>
        <Link to={`/details/${id}`}>
          <p className="text-amber-400 font-medium text-sm">View details</p>
        </Link>
      </div>
    </div>
  )
}

========================================================================== */
