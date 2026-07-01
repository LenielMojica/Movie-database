const API_URL = "https://api.themoviedb.org/3";
const API_KEY= import.meta.env.VITE_API_KEY;

export const getList= async(endpoint,q )=>{

        
         
const url=  `${API_URL}${endpoint}?api_key=${API_KEY}${q ? `&query=${encodeURIComponent(q)}` : ""}`

 const res = await fetch(url)
   if (!res.ok) return []
  const data = await res.json()
  return data.results

}
  export const getGenres= async (list)=>{
     const res = await fetch(`${API_URL}/genre/movie/list?api_key=${API_KEY}`)
     const resTV= await fetch(`${API_URL}/genre/tv/list?api_key=${API_KEY}`)
     if (!res.ok) return []
     const dataTV= await resTV.json()
      const data =await res.json()
     const movieGenres= data.genres;
     const tvGenres=dataTV.genres;
     const genreWithName = Object.fromEntries([
  ...movieGenres.map(g => [g.id, g.name]),
  ...tvGenres.map(g => [g.id, g.name]),
])
    const movieWithGenres =list.map(m=>{
        const names= m.genre_ids.map(g=> genreWithName[g])
      return {...m, genres: names}
}


)
   
    return movieWithGenres


}

export const getHeroItem = async (type) => {
  const list = await getList(`/trending/${type}/week`)
  
  const chosen = list[Math.floor(Math.random() * list.length)]
  const key = await getTrailer(chosen.id, chosen.media_type ?? type)
  return { ...chosen, key }
}

export const getTrailer= async(id, mediaType="movie")=>{

    const res = await fetch(`${API_URL}/${mediaType}/${id}/videos?api_key=${API_KEY}`)
  if (!res.ok) return null
    const data =await res.json()
const trailer = data.results.find(v => v.type === "Trailer" && v.site === "YouTube")
const key = trailer?.key

return key
}

export const withTrailerKeys =(list)=>{
const promises = list.map(async (movie) => {
   
    const key = await getTrailer(movie.id,movie.media_type)
    return {...movie, key}
})
 const results = Promise.all(promises)
return results
}

export const getAll=async(endpoint,type,q)=>{
    const list= await getList(endpoint,q)
    const normalized = list.map(item => ({
    ...item,
    media_type: item.media_type ?? type,       
    title: item.title ?? item.name,            
  }))
    const plusTrailers = await withTrailerKeys(normalized)
  const plusGenres = await getGenres(plusTrailers)
  return plusGenres

}
