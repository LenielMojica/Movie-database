import { useState,useEffect } from 'react';
const API_URL = "http://www.omdbapi.com/";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Details =() =>{
const {movieId}=useParams();
const [movie, setMovie] = useState(null);

useEffect(()=>{
const fetchDetails = async (id)=>{
try {
  const res = await fetch(`${API_URL}?apikey=${import.meta.env.VITE_API_KEY}&i=${movieId}`);
const data =await res.json()
setMovie(data)
}
catch (e){
  console.log(e)
}
}
fetchDetails()
},[movieId])
if (!movie){
    return <p>CARGANDO</p>
}
return (
    <div>
        <nav className="bg-zinc-950 px-8 py-4 border-b border-zinc-800">
        <Link to= {`/`}><p className="text-red-600 font-bold text-2xl tracking-widest">MOVIE SEARCH</p></Link>
    </nav>


    <main id="details" className="px-8 py-10 max-w-4xl mx-auto flex gap-10">

        <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-64 rounded shadow-lg shrink-0"
        />

       
        <div className="flex flex-col  gap-4">
            <h1 className="text-white text-4xl font-bold">{movie.Title}</h1>

            <div className="flex gap-3 text-sm flex-wrap">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full">{movie.Type}</span>
                <span className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">{movie.Year}</span>
                <span className="bg-zinc-800 text-yellow-400 px-3 py-1 rounded-full">IMDb {movie.Rating}</span>
            </div>

            <p className="text-zinc-400 leading-relaxed">{movie.Plot}</p>
        </div>
    </main>
    </div>
)
}
export default Details