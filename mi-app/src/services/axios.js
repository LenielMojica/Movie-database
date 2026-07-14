import axios from "axios";

export const instance = axios.create({
baseURL:"http://localhost:3000",


})


instance.interceptors.request.use(
    (config)=>{
        const token=localStorage.getItem("token")
        if (token){
config.headers.Authorization= `Bearer ${token}`
        }
        return config
    }
    ,
    (error)=>{ return Promise.reject(error)
    }
)
instance.interceptors.response.use(
    (response)=>response,
    (error)=>{
                 if (error.response?.status===401){
         localStorage.removeItem("token")
window.location.href = "/"

        }
        return Promise.reject(error)
    }
    
)

