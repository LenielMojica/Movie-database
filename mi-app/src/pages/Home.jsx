
import { HOME} from '../services/categories';
import Browse from '../components/Browse';
import { useEffect } from 'react';
import { AuthContext } from "../components/AuthContext";
import { useContext } from "react";
import { goToPage } from '../services/auth';
const Home = () => {
  const {logout}=useContext(AuthContext)
  useEffect(()=>{
     const goHome =async()=>{
              try{
                await goToPage()
              }
              catch(e){
                
            
           
            await logout()
                 
    
              }
            }
           goHome() 
  },[])
     
    
    
    return <Browse rows={HOME} heroType={"all"}/>}

export default Home;
