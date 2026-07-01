import { useContext } from "react"
import { MyListContext } from "../components/MyListContext"
import ResultsGrid from "../components/ResultsGrid"

const MyList = () => {
  const { myList } = useContext(MyListContext)
  return ( 
  <div className='grid p-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
  <ResultsGrid

 
  results={myList}
        />
        
        </div>
  
  ) 
}
export default MyList