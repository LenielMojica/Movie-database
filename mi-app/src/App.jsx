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

 return (
<div>


  <Header onBuscar={fetchMovies}/>
  
{

movies.map((p)=>{
  return(
 <MovieCard
  title={p.Title}
  year={p.Year}
  id={p.imdbID}
  poster={p.Poster}
  type={p.Type}
  key={p.imdbID}
  />)
})}
  

</div>
  )
}

export default App
