
import hero from "./assets/images/hero.webp"
import Home from './pages/Home'
import MovieCard from './components/MovieCard';
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Details from './pages/Details'
import Login from './pages/Login'
import { Search } from "lucide-react";
import ErrorBoundary from "./components/ErrorBoundaryTree";
const App = () => {
       const [movies, setMovies]= useState([])
       const [favorites, setFavorites]= useState([])
const [showFavorite,setShowFavorite]= useState(false)
const [showAll,setShowAll]= useState(false)
const [view,setView]=useState("All")
const [loading, setLoading]=useState(false)
const [selected, setSelected]=useState()
const [isSelected,setIsSelected]=useState(false)
const [notFound, setNotFound]= useState(false)

const getAll=()=>{
setView("All")
}

const getFavorite = () =>{
  setView("Favorites")


}
const toggleView= ()=>{
setIsSelected(true)
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
setNotFound(false)
  }
  else if(l==="favorites"){
  setFavorites([])
  }
 }
console.log("favoritos",favorites)
 const fetchCards =async (genre) =>{
try {
  setLoading(true)
const res=await fetch (`${API_URL}?apikey=${import.meta.env.VITE_API_KEY}&s=${title}`)
const data =await res.json()
setRow(data.Search)
}
catch{

}
 }
const  fetchMovies = async (title)=> {
  
  try {
    setNotFound(false)
    setLoading(true)
const res=  await fetch(`${API_URL}?apikey=${import.meta.env.VITE_API_KEY}&s=${title}`)
const data = await res.json()
setMovies(data.Search)
setView("All")

if (data.Response==='False'){
  console.log("Error al buscar")
  setMovies([])
  setNotFound(true)
  

}

 

 
 }
  catch (error){
console.log(error)
  }
  finally {
    setLoading(false)
    
  }
  

}


console.log(movies)
 
const lista = view==="Favorites" ? favorites : view==="All" ? movies: movies
const noFavorites = view==="Favorites" && favorites.length===0 
useEffect (()=>{
  if (notFound){
    setTimeout(() => setView("All"), 3000)
  }
},[notFound])
useEffect(() => {
  if (noFavorites) {
    setTimeout(() => setView("All"), 3000)
  }
}, [noFavorites])



if (loading) return (
  <ErrorBoundary fallback={<p>Fallo</p>}>
<div>  <Home 
    onBuscar={fetchMovies} 
    onShowFav={getFavorite}  
     onShowAll={getAll} 
    onClearList={clearList}
    theresFavorites={favorites.length>0}
    theresSearch={movies.length >0}
    
    />
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      <p className="text-xl animate-pulse">Loading search</p>
    </div>
    </div></ErrorBoundary>
  )
return (
  
  <div>
    
  <ErrorBoundary fallback={<p>Fallo</p>}>   
     <Routes>

       
        <Route path="/" element={<Login></Login>} />
        <Route path="/home" element ={<Home 
        
        heroImg={hero}
        rowImg={hero}
     

    /> }/>
    <Route path="/search/:?q" element ={<Search 
     

    /> }/>

        <Route path="/details/:movieId" element={<Details


        />} />
       
      </Routes>

    </ErrorBoundary>  
    
   
  </div>
  
)



}


export default App
