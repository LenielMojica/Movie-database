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