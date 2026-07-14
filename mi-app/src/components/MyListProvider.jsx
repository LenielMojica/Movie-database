import { useEffect, useState } from "react";
import { MyListContext } from "./MyListContext";

import { addToMyList,goToMyList,removeFromMyList } from "../services/auth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
const MyListProvider= ({children})=>{
    const {logout,isAuth}=useContext(AuthContext)
    const navigate=useNavigate()
    const [loading, setLoading]=useState(true)
    const [myList, setMyList]= useState([])
  
     const load =async ()=>{
    try {

   setLoading(true)
      const res =await goToMyList()
 setMyList(res)
    }
    
      
   
    catch (e){
 await logout()
  }
  finally{
    setLoading(false)
  }
  }
  useEffect(()=>{
    if(isAuth) load()
   
 },[isAuth])

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
