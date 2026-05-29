const API_URL = "http://www.omdbapi.com/";

import Header from './components/Header'
import MovieCard from './components/MovieCard';
import { useState, useEffect } from 'react'



const App = () => {
       const [movies, setMovies]= useState([])
       const [favorites, setFavorites]= useState([])
const [showFavorite,setShowFavorite]= useState(false)
const [showAll,setShowAll]= useState(false)
const [view,setView]=useState("All")
const getAll=()=>{
setView("All")
}

const getFavorite = () =>{
  setView("Favorites")
setMovies([])

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
 const clearList =(l)=>{
  if (l==="all"){
setMovies([])
  }
  else if(l==="favorites"){
  setFavorites([])
  }
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
const lista = view==="Favorites" ? favorites : view==="All" ? movies: movies
const noFavorites = view==="Favorites" && favorites.length===0 

useEffect(() => {
  if (noFavorites) {
    setTimeout(() => setView("All"), 3000)
  }
}, [noFavorites])

return (
  
  <div>
     
        
    <Header 
    onBuscar={fetchMovies} 
    onShowFav={getFavorite}  
     onShowAll={getAll} 
    onClearList={clearList}
    theresFavorites={favorites.length>0}
    theresSearch={movies.length >0}
    
    />
   <main className="px-8 py-4 results-container">
      <p id="results-message" className="text-zinc-500 font-mono mb-4"></p>
        {noFavorites ?(

              <div className="flex items-center justify-center py-20">
      <p className="text-red-500 font-mono text-lg">
        No tienes películas en favoritos  
      </p>
    </div>
        ) :(
        <div id="movies-grid" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
           
    {
    
    lista.map((p) => (
      <MovieCard
        title={p.Title}
        year={p.Year}
        id={p.imdbID}
        poster={p.Poster}
        type={p.Type}
        key={p.imdbID}
        onToggleFavorite={toggleFavorite}
        isFavorite={favorites.some(f=>f.imdbID===p.imdbID)}
       
       
      />
    ))}
    </div>)}
    </main>
  </div>
)

}


export default App
