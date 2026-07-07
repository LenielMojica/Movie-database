import { useContext } from "react"
import { MyListContext } from "../components/MyListContext"
import ResultsGrid from "../components/ResultsGrid"
import { useEffect } from "react"
import { useState } from "react"
import { goToMyList } from "../services/auth"
import { Navigate, useNavigate } from "react-router-dom"

const MyList = () => {

 const { myList, loading,load } = useContext(MyListContext)
useEffect(()=>{
load()
},[])
if (loading) return <p>Loading</p>       

      
if (myList.length === 0) 
{
  return(
     <div className="p-10 text-gray flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-white">Your list is empty</h1>
        <p>Add movies and shows with the + button to find them here.</p>
      </div>
  )
}
  return ( 
  <div className='grid p-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
  <ResultsGrid

 
  results={myList}
        />

        </div>
  
  ) 
}

export default MyList