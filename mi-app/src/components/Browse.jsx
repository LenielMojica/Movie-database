import Row from "./Row"
import HeroSection from "./HeroSection"
import { goToPage } from "../services/auth"
import { useEffect } from "react"

const Browse = ({ rows, heroType }) => {
  const entries = Object.entries(rows)

  // TMDB-only page: ping the backend so an expired token hits the 401 interceptor.
  useEffect(() => {
    goToPage()
  }, [])

  return (
    <>
      <HeroSection type={heroType} />
      <div className='flex flex-col gap-10'>
        {entries.map(([title, { endpoint, type }]) => (
          <Row key={endpoint} rowTitle={title} endpoint={endpoint} type={type} />
        ))}
      </div>
    </>
  )
}

export default Browse
