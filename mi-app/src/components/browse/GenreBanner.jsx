import { Tally1 } from "lucide-react"
import { useState, useEffect } from "react"
const GenreBanner = ({ search, list }) => {
  const [result, setResult] = useState([])
  const API_URL = "https://api.themoviedb.org/3";

  const genreMap = Object.fromEntries(result.map(g => [g.id, g.name]))
  const names = (list ?? []).map(id => genreMap[id]).filter(Boolean)   // list are ids → just translate them

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await fetch(`${API_URL}/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}`)
        if (!res.ok) return
        const data = await res.json()
        setResult(data.genres ?? [])
      } catch (e) {
        console.log(e)
      }
    }
    fetchGenres()
  }, [search])

  return (
    <div className=" flex items-center gap-3 p-10">
      <p className="text-gray">More to explore:      </p>
      <div className="flex items-center gap-2">{names.map((i) => (
        <span key={i} className="inline-flex items-center text-white cursor-pointer hover:text-red-600
   gap-1">
          {i}
          <Tally1 />
        </span>
      ))}</div>
    </div>
  )
}
export default GenreBanner
