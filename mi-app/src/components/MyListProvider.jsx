import { useState } from "react";
import { MyListContext } from "./MyListContext";
const MyListProvider= ({children})=>{
    const [myList, setMyList]= useState([])
    const toggleItem= (item)=>{
        const isInMyList= myList.some(m=>m.id===item.id)
        if (isInMyList){
           setMyList(myList.filter(m=>m.id!==item.id))
        }
        else {
  setMyList([...myList, item])
  
}

    }
    return (
    <MyListContext.Provider value={{myList,toggleItem}}>
        {children}
    </MyListContext.Provider>
    )
}
export default MyListProvider
