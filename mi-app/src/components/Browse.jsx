import Row from "./Row"
import HeroSection from "./HeroSection"

import { MyListContext } from "./MyListContext"
const Browse = ({ rows,heroType }) => {
  const entries = Object.entries(rows)

  return (
    <><HeroSection
    type={heroType}
    />
  <div className='flex flex-col gap-10'>
      {entries.map(([title, { endpoint, type }]) => (
        <Row key={endpoint} rowTitle={title} endpoint={endpoint} type={type} />
      ))}
    </div></>
    
  )
}
export default Browse