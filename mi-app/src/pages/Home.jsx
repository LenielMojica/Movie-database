import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection'
import Row from '../components/Row';
import { useState, useEffect } from 'react';
import ResultsGrid from '../components/ResultsGrid';
import GenreBanner from '../components/GenreBanner';
import { useSearchParams, useNavigate } from "react-router-dom";
import ErrorCard from '../components/ErrorCard';
const Home = ({ heroImg}) => {
    const API_URL = "https://api.themoviedb.org/3";

 const [input,setInput]= useState("")
 const [items, setItems]= useState([])
const END_POINTS ={
    "Trending":"/trending/movie/week",
    "Popular":"/movie/popular",
    "Top rated":"/movie/top_rated",
    "Discover": "/discover/movie"
}
const navigate = useNavigate()
const [searchParams, setSearchParams]=useSearchParams()

 const [error, setError]= useState(false)
   const [loading,setLoading]=useState(true)
   const q= searchParams.get("q")
  useEffect (()=>{
const fetchSearch = async ()=>{
 if (q){
   try {
    const res = await fetch(`${API_URL}/search/multi?api_key=${import.meta.env.VITE_API_KEY}&query=${q}`)
const data = await res.json()
setItems(data.results)

}

catch (e){
  
  setError(true)
}
finally{
  setLoading(false)
}



}
}
fetchSearch()
},[q])  
 const genre_ids = [...new Set(items.flatMap(movie => movie.genre_ids))]



const endPointsArr= Object.entries(END_POINTS)
console.log(items)
let content;
if (!q){
  content = <div> <HeroSection
  img={heroImg}
  ></HeroSection>
  <div className='flex flex-col gap-10'>
  {endPointsArr.map(([title,endpoint])=>(
<Row
 key={endpoint}
  rowTitle={title}
  endpoint={endpoint}/>
  ))}
  </div>
  </div>
}
else if (loading){
  content=<p>Cargando...</p>
}
else if (items.length===0 ||error){
 content= <ErrorCard/>


}



  
 
 else{

  content =<><div className='flex flex-col'>
    <GenreBanner
    search={q}
    list={genre_ids}
    />
   <div className='grid p-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
  <ResultsGrid

 
  results={items}
        />
        </div>
 </div> </>
 }

return (
  <div className="flex flex-col min-h-screen md:relative bg-[#141414] text-white">
    <NavBar value={q ?? ""} onSearch={(text)=>setSearchParams({q:text})} />
    {content}
  </div>
)


};

export default Home;
