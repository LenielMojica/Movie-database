import axios from 'axios'
export const login= async (datos,route)=>{
const res= await axios.post(route,datos)
return res.data
}

export const goToMyList= async (route)=>{
const token= localStorage.getItem("token")
    const res= await axios.get(route,{
headers: {
    'Authorization': `Bearer ${token}`

}

})
return res.data
}
export const addToMyList =async (item)=>{
    const token= localStorage.getItem("token")
   const res= await axios.post("http://localhost:3000/myList",item,
  {
 headers:{
        'Authorization': `Bearer ${token}`
        
    }
}

)
return res.data
}
export const removeFromMyList =async (item)=>{
    const token= localStorage.getItem("token")
   const res= await axios.delete(`http://localhost:3000/myList/${item.id}`,
  {
 headers:{
        'Authorization': `Bearer ${token}`
        
    }
}

)
return res.data
}