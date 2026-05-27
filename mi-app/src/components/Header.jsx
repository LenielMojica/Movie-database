import { useState } from 'react';
const Header = ({ onBuscar,onShowFav, onClearFavorites }) => {
const [input, setInput] = useState("")

 console.log(input)

const handleInputChange = (e) => {    setInput(e.target.value);}
const clearInput= ()=>{
            setInput("")
}
const clearFavorites =()=>{

onClearFavorites()
}
    const handleSubmit = ()=>{
        if (input!=""){
      onBuscar(input.trim())
      clearInput();
        }
        else{
            return
        }
}
const getFavorites = () =>{
    onShowFav()
}
  
    return(
       
    <nav className="bg-zinc-950 px-8 py-4 flex items-center justify-between border-b border-zinc-800">
        <h1 className="text-red-600 font-bold text-2xl tracking-widest">FIND A MOVIE, SERIES, OR WHATEVER YOU WANT</h1>

        <div className="flex items-center gap-2">

            <div className="relative">
                <input
                    id="search-input"
                    type="text"
                    placeholder="Search movies, series..."
                    className="bg-zinc-800 text-white px-4 py-2 rounded w-72 focus:outline-none focus:ring-1 focus:ring-red-600 placeholder-zinc-500 pr-8"
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
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
        onClick={handleSubmit}
         >
                Search
            </button>
            <div className="px-8 py-4 flex gap-3">
        <button
          className="filter bg-red-600 text-white px-4 py-1 rounded-full text-sm">
            All</button>
        <button 
        data-type="all" id="clear-favorites" 
        className="hidden filter bg-red-600 text-white px-4 py-1 rounded-full text-sm"
        onClick={clearFavorites}
        >
            Clear Favorites</button>
        <button data-type="all" id="view-favorites"
         className="filter bg-red-600 text-white px-4 py-1 rounded-full text-sm"
         onClick={getFavorites}
         >
            View Favorites</button>
            
    </div>
     <main class="px-8 py-4 results-container">
        <p id="results-message" class="text-zinc-500 font-mono mb-4"></p>
        <div id="movies-grid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            
        </div>
    </main>
        </div>
    </nav>

    )
   
}

export default Header;