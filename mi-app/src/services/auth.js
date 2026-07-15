
import { instance } from './axios'
export const login= async (datos)=>{
const res= await instance.post("/login",datos)
return res.data
}

export const signIn= async (datos)=>{
const res= await instance.post("/register",datos)
return res.data
}

export const goToPage= async ()=>{
const res= await instance.get("/auth/all")

return res.data

}





export const goToMyList= async ()=>{
const res= await instance.get("/myList")
return res.data
}
export const addToMyList =async (item)=>{
   
   const res= await instance.post("/myList",item)
return res.data
}
export const removeFromMyList =async (item)=>{
   
   const res= await instance.delete(`/myList/${item.id}`)
return res.data
}