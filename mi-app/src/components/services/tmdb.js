const API_URL = "https://api.themoviedb.org/3";
const API_KEY= import.meta.env.VITE_API_KEY;

export const getList= async(endpoint,q )=>{

        
         
const url=  `${API_URL}${endpoint}?api_key=${API_KEY}${q ? `&query=${encodeURIComponent(q)}` : ""}`

 const res = await fetch(url)
  const data = await res.json()
  return data.results

}

export const getTrailer= async(id)=>{

    const res = await fetch(`${API_URL}/movie/${id}/videos?api_key=${API_KEY}`)
const data =await res.json()
const trailer = data.results.find(v => v.type === "Trailer" && v.site === "YouTube")
const key = trailer?.key

return key
}

export const withTrailerKeys =(list)=>{
const promises = list.map(async (movie) => {
   
    const key = await getTrailer(movie.id)
    return {...movie, key}
})
 const results = Promise.all(promises)
return results
}