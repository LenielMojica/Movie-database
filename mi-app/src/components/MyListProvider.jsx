import { useEffect, useState } from "react";
import { MyListContext } from "./MyListContext";
import { addToMyList,goToMyList,removeFromMyList } from "../services/auth";
import { useNavigate } from "react-router-dom";
const MyListProvider= ({children})=>{
    const navigate=useNavigate()
    const [loading, setLoading]=useState(true)
    const [myList, setMyList]= useState([])
    const handleAuthError = (e) => {
    if (e.response?.status === 401) {
        localStorage.removeItem("token")
        setMyList([])
        navigate("/")
    } else {
        navigate("/home")
    }
}

     const load =async ()=>{
    try {

   setLoading(true)
      const res =await goToMyList("http://localhost:3000/myList")
 setMyList(res)
    }
    
      
   
    catch (e){
handleAuthError(e)
  }
  finally{
    setLoading(false)
  }
  }
  useEffect(()=>{
    
    load()
 },[])

    const toggleItem= async (item)=>{
        try{
        const isInMyList= myList.some(m=>m.id===item.id)
        if (isInMyList){
            const newList = await removeFromMyList(item)
           setMyList(newList)

        console.log(localStorage.getItem("mylist"))
        }
        else {
           const newList =await addToMyList(item)
setMyList(newList)
 
  
}}
   catch (e){
handleAuthError(e)
  }

    }
    return (
    <MyListContext.Provider value={{myList,toggleItem,load, loading}}>
        {children}
    </MyListContext.Provider>
    )
}
export default MyListProvider
