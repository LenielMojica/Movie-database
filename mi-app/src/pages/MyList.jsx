import { useContext, useEffect } from "react"
import { MyListContext } from "../components/MyListContext"
import ResultsGrid from "../components/ResultsGrid"
import GridSkeleton from "../components/GridSkeleton"

const MyList = () => {
  const { myList, loading, load, error } = useContext(MyListContext)


  if (loading) return <GridSkeleton count={10} />

  // Error is checked before empty: a failed load leaves myList as [].
  if (error) {
    return (
      <div className="p-10 text-gray flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-white">Failed to fetch list</h1>
        <p>Try again later</p>
      </div>
    )
  }

  if (myList.length === 0) {
    return (
      <div className="p-10 text-gray flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-white">Your list is empty</h1>
        <p>Add movies and shows with the + button to find them here.</p>
      </div>
    )
  }

  return (
    <div className='grid p-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
      <ResultsGrid results={myList} />
    </div>
  )
}

export default MyList
