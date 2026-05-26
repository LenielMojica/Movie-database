import { useState } from 'react';
const Header = ({ onBuscar }) => {
const [input, setInput] = useState("")
 console.log(input)

const handleInputChange = (e) => {    setInput(e.target.value);}
const clearInput= ()=>{        setInput("")
}
    const handleSubmit = ()=>{
      onBuscar(input.trim())
      clearInput();
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
        </div>
    </nav>

    )
   
}

export default Header;