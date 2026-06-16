import { useState } from 'react';
import MovieCard from '../components/MovieCard';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection'
import Row from '../components/Row';
const Home = ({heroImg,rowImg}) => {
  const [rowTitle, setTitle]= useState([])
const END_POINTS ={
    Trending:"/trending/movie/week",
    Popular:"/movie/popular",
    TopRated:"/movie/top_rated"   
}


  return (
    <div className="flex flex-col min-h-screen md:relative    text-white"
   >
  <NavBar></NavBar>
  <HeroSection 
  img={heroImg}
  ></HeroSection>
  <div className='flex flex-col gap-10'>
  <Row
 
  rowTitle={"Tendencias"}
  endpoint={END_POINTS.Trending}></Row>
    <Row
 
  rowTitle={"Populares"}
  endpoint={END_POINTS.Popular}></Row>
  <Row

  rowTitle={"Tendencias"}></Row>
    <Row

  rowTitle={"Tendencias"}></Row>
  <Row

  rowTitle={"Tendencias"}></Row><Row

  rowTitle={"Tendencias"}></Row><Row

  rowTitle={"Tendencias"}></Row><Row
 
  rowTitle={"Tendencias"}></Row><Row
 
  rowTitle={"Tendencias"}></Row><Row
 
  rowTitle={"Tendencias"}></Row><Row

  rowTitle={"Tendencias"}></Row><Row

  rowTitle={"Tendencias"}></Row><Row

  rowTitle={"Tendencias"}></Row><Row
 rowTitle={"Tendencias"}></Row><Row

  rowTitle={"Tendencias"}></Row><Row
 
  rowTitle={"Tendencias"}></Row><Row

  rowTitle={"Tendencias"}></Row>
   <Row
 
  rowTitle={"Tendencias"}></Row><Row
  rowTitle={"Tendencias"}></Row><Row
rowTitle={"Tendencias"}></Row><Row

  rowTitle={"Tendencias"}></Row><Row
 
  rowTitle={"Tendencias"}></Row><Row

  rowTitle={"Tendencias"}></Row><Row
 
  rowTitle={"Tendencias"}></Row><Row

  rowTitle={"Tendencias"}></Row><Row

  rowTitle={"Tendencias"}></Row><Row

  rowTitle={"Tendencias"}></Row><Row

  rowTitle={"Tendencias"}></Row><Row

  rowTitle={"Tendencias"}></Row><Row

  rowTitle={"Tendencias"}></Row><Row

  rowTitle={"Tendencias"}></Row>
   </div>
    </div>
  );
};

export default Home;


/* ==========================================================================
   VERSIÓN ANTERIOR (movie database) — guardada como referencia.
   Borra este bloque cuando ya no la necesites.
   ==========================================================================

const Home = ({ onBuscar, onShowFav, onClearList, onShowAll, theresFavorites, theresSearch, lista = [], noFavorites, favorites, toggleFavorite, notFound, view }) => {
  const [input, setInput] = useState("")

  console.log(input)

  const handleInputChange = (e) => { setInput(e.target.value); }
  const clearInput = () => {
    setInput("")
  }

  const clearList = (l) => {
    onClearList(l)
  }

  const handleSubmit = () => {
    if (input != "") {
      onBuscar(input.trim())
      clearInput();
    }
    else {
      return
    }
  }
  const getFavorites = () => {
    onShowFav()
  }
  const getAll = () => {
    onShowAll()
  }

  return (
    <div>
      <nav className="bg-zinc-950 px-8 py-4 flex-col text-sm md:text-lg lg:flex-row flex items-center justify-between border-b border-zinc-800">
        <h1 className="text-red-600 font-bold text-sm lg:text-2xl md:text-lg tracking-widest ">FIND A MOVIE, SERIES, OR WHATEVER YOU WANT</h1>

        <div className="flex flex-wrap lg:flex-nowrap items-center gap-2">

          <div className="relative">
            <input
              id="search-input"
              type="text"
              placeholder="Search movies, series..."
              className="w-full md:w-72 bg-zinc-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-red-600 placeholder-zinc-500 pr-8"
              onChange={handleInputChange}
              value={input}
            />
            <button id="clear-button"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-black hidden"
              onClick={clearInput}
            >x</button>
          </div>

          <button
            id="search-button"
            className=" cursor-pointer bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
            onClick={handleSubmit}
          >
            Search
          </button>

          <button
            className={view === "All" ? "bg-red-600 filter cursor-pointer text-white px-4 py-1 rounded-full text-sm md:text-lg" : "filter cursor-pointer text-white px-4 py-1 rounded-full text-sm md:text-lg"}
            onClick={getAll}
          >
            All</button>
          <button data-type="all" id="view-favorites"
            className={view === "Favorites" ? "bg-red-600 filter cursor-pointer text-white px-4 py-1 rounded-full text-sm md:text-lg" : "filter cursor-pointer text-white px-4 py-1 rounded-full text-sm md:text-lg"}
            onClick={getFavorites}
          >
            Favorites</button>
          {theresFavorites &&
            <button
              data-type="all" id="clear-favorites"
              className=" filter cursor-pointer bg-red-600 text-white px-4 py-1 rounded-full text-sm"
              onClick={() => clearList("favorites")}
            >
              Clear Favorites</button>}
          {theresSearch &&
            <button
              data-type="all" id="clear-search"
              className=" filter cursor-pointer bg-red-600 text-white px-4 py-1 rounded-full text-sm"
              onClick={() => clearList("all")}
            >
              Clear Search</button>
          }
        </div>

        <SideBar></SideBar>
      </nav>

      <main className="px-8 py-4 results-container">
        <p id="results-message" className="text-zinc-500 font-mono mb-4"></p>

        {notFound &&
          (<div className="flex items-center justify-center py-20">
            <p className="text-red-500 font-mono text-lg">
              No se ha encontrado nada
            </p>
          </div>)
        }
        {noFavorites ? (
          <div className="flex items-center justify-center py-20">
            <p className="text-red-500 font-mono text-lg">
              No tienes películas en favoritos
            </p>
          </div>
        ) : (
          <div id="movies-grid" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {lista.map((p) => (
              <MovieCard
                title={p.Title}
                year={p.Year}
                id={p.imdbID}
                poster={p.Poster}
                type={p.Type}
                key={p.imdbID}
                onToggleFavorite={toggleFavorite}
                isFavorite={favorites.some(f => f.imdbID === p.imdbID)}
                onDetails={p.imdbID}
              />
            ))}
          </div>)}
      </main>
    </div>
  )
}

========================================================================== */
