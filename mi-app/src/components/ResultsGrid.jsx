import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"

const ResultsGrid = ({ results, videoKey }) => {
  return results.map((movie, index) => {
    const col = index % 5
    const origin = col === 0 ? "origin-left" : col === 4 ? "origin-right" : "origin-center"
 
    return (
      <MovieCard key={movie.id} videoKey={movie.key}  origin={origin} width="w-full"
        img={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
    )
  })
}


export default ResultsGrid