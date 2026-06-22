import NavBar from "../components/NavBar"
import GenreBanner from "../components/GenreBanner"
import ResultsGrid from "../components/ResultsGrid"

const Search = ({})=>{
     const {query}= useParams()
    return (
        
<div className='flex flex-col min-h-screen md:relative bg-[#141414]   text-white'><NavBar
  value={input}
  onSearch={setInput}

  ></NavBar>
  <div className='flex flex-col'>
    <GenreBanner
    search={input}
    list={genre_ids}
    />
  <div className='grid p-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
  <ResultsGrid

 
  results={items}
        />
        </div>
        </div>
        </div>


      )

}
    
export default Search