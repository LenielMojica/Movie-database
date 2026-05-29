import { useState } from "react";
const movie={}
const MovieCard =({title,id,type,year,poster, onToggleFavorite,isFavorite}) => {

   const saveFavorites = ()=>{
    onToggleFavorite({imdbID:id,Title:title,Type:type,Year:year,Poster:poster})

}

   const toggleFavButton= ()=>{


   }
   const favoriteColor= isFavorite ? "text-yellow-400": "text-zinc-200"
return (
    <div>
        <div className="relative">
            <img
                src={poster}
                alt=""
                className="w-full h-72 object-cover"
            ></img>
            <button
                className={`favorite-button absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 ${favoriteColor} shadow-md backdrop-blur-sm transition hover:scale-110 hover:bg-black/80 hover:text-yellow-400`}
                aria-label="Toggle favorite"
                data-id={id}
               onClick={saveFavorites}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                    <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321 1.01l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.386a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.98 20.562a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557L3.04 10.407a.562.562 0 01.321-1.01l5.518-.442a.563.563 0 00.475-.345l2.125-5.111z"/>
                </svg>
            </button>
        </div>
        <div className="p-3">
            <p className="text-white font-semibold text-sm truncate">{title}</p>
            <p className="text-sm text-gray-400 mb-3">{year} | {type}</p>
            <p className="text-amber-400 font-medium text-sm">View details</p>
        </div></div>
  
)

}
export default MovieCard