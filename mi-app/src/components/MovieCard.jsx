import { Link } from 'react-router-dom';
import hero from "../assets/images/hero.webp"
const MovieCard = ({ id, img, title,origin }) => {
  return (
    <div className={`w-70 shrink-0 cursor-pointer rounded-xl hover:shadow-xl shadow-black overflow-hidden transition hover:scale-150 ${origin}` }  >
     <img src={img} className="w-full aspect-video object-cover" />

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
