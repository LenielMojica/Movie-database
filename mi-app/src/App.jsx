const API_URL = "http://www.omdbapi.com/";

import Header from './components/Header'
import MovieCard from './components/MovieCard';
import { useState, useEffect } from 'react'



const App = () => {
       const [movies, setMovies]= useState([])

 
const  fetchMovies = async (title)=> {
  
  try {
const res=  await fetch(`${API_URL}?apikey=${import.meta.env.VITE_API_KEY}&s=${title}`)
const data = await res.json()
setMovies(data.Search)

if (data.Response==='false'){
  console.log("No existe la pelicula")
}

 

console.log(data)
  }
  catch (error){
console.log(error)
  }
  

}

 return (
<div>


  <Header onBuscar={fetchMovies}/>
{movies.map((p)=>{
  return
 <MovieCard
  title={movies.Title}
  year={movies.Year}
  id={movies.imdbID}
  poster={movies.Poster}
  type={movies.Type}
  />
})}
  

</div>
  )
}

export default App
