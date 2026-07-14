import NavBar from "../components/NavBar"
import GenreBanner from "../components/GenreBanner"
import ResultsGrid from "../components/ResultsGrid"
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import { getList,withTrailerKeys,getGenres } from '../services/tmdb';
import Footer from "../components/Footer";
import GridSkeleton from "../components/GridSkeleton";
import { goToPage } from "../services/auth";
import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";
const Search = ({})=>{
   const {logout}=useContext(AuthContext)
 const [error, setError]= useState(false)
   const [loading,setLoading]=useState(true)
  const navigate = useNavigate()
const [searchParams, setSearchParams]=useSearchParams()
const [items, setItems]= useState([])
      const q= searchParams.get("q")

       useEffect (()=>{
        const search =async()=>{
          try{
            await goToPage("/search")
          }
          catch(e){
            
        
       
        await logout()
             

          }
        }
const fetchSearch = async ()=>{
  
 
   try {
    setError(false)
     const list = (await getList("/search/multi",q)).filter(item => item.media_type === "movie" || item.media_type === "tv")

       
     const listWithTrailer =await withTrailerKeys(list)
            const withGenres= await getGenres(listWithTrailer)
             setItems(withGenres)


}

catch (e){
  
  setError(true)
}
finally{
  setLoading(false)
}




}
search()
fetchSearch()
},[q])  
 const genre_ids = [...new Set(items.flatMap(movie => movie.genre_ids))]
  if (loading){
    return(
      <GridSkeleton
      count={15}/>
    )
  }  
  return (


<div className='flex flex-col'>
  
   <GenreBanner
    search={q}
    list={genre_ids}
    />
   <div className='grid p-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
  <ResultsGrid

 
  results={items}
        />
        </div>
    <Footer/>
  </div> 
 

    )

}
    
export default Search