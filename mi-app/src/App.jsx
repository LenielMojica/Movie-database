const API_URL = "http://www.omdbapi.com/";

import Header from './components/Header'
import MovieCard from './components/MovieCard';
import { useState, useEffect } from 'react'



const App = () => {
       const [movies, setMovies]= useState([])
       const [favorites, setFavorites]= useState([])
const [showFavorite,setShowFavorite]= useState(false)
const toggleShowFavorite = () =>{
setShowFavorite(!showFavorite)
}
 const toggleFavorite = (p)=>{
  const isFavorite = favorites.some(f=>f.imdbID===p.imdbID)
  if (isFavorite){
   

    
     setFavorites(favorites.filter(f=>f.imdbID !== p.imdbID))
  
  }
else{
setFavorites([...favorites, p])

}
 
 }
 const clearFavorites =()=>{
  setFavorites([])
 }
console.log("favoritos",favorites)
const  fetchMovies = async (title)=> {
  
  try {
const res=  await fetch(`${API_URL}?apikey=${import.meta.env.VITE_API_KEY}&s=${title}`)
const data = await res.json()
setMovies(data.Search)

if (data.Response==='False'){
  console.log("Error al buscar")
  setMovies([])
}

 

 
  }
  catch (error){
console.log(error)
  }
  

}
console.log(movies)
const lista = showFavorite ? favorites : movies

return (
  <div>
    <Header onBuscar={fetchMovies} onShowFav={toggleShowFavorite}  onClearFavorites={clearFavorites}/>
    {lista.map((p) => (
      <MovieCard
        title={p.Title}
        year={p.Year}
        id={p.imdbID}
        poster={p.Poster}
        type={p.Type}
        key={p.imdbID}
        onToggleFavorite={toggleFavorite}
       
      />
    ))}
  </div>
)

}


export default App
