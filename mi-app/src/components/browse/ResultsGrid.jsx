import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import ErrorCard from "./ErrorCard"

const ResultsGrid = ({ results }) => {
if (results.length!=0){  return results.map((movie, index) => {
    const col = index % 5
    const origin = col === 0 ? "origin-left" : col === 4 ? "origin-right" : "origin-center"

    return (
      <MovieCard
        key={movie.id}
        movie={movie}
        origin={origin}
        width="w-full"
      />
    )
  })
}
else {
  return <ErrorCard/>
}
}


export default ResultsGrid