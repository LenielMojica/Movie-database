import { useContext } from "react";
import { AuthContext } from "./AuthContext";

import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
const ProtectedRoute=()=>{

const { isAuth } = useContext(AuthContext)

   if (isAuth===null){
      return <p>Loading</p>
   }
   if (isAuth) {
    return <Outlet/> 
   }
   return <Navigate to="/"/>
    
   

}
export default ProtectedRoute