import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { useSearchParams,useNavigate } from "react-router-dom"
import { useEffect } from "react"
import DetailModal from "./DetailModal"
import { jwtDecode} from 'jwt-decode'
const Layout = () => {
    
const navigate = useNavigate()

const [searchParams] = useSearchParams()
const q = searchParams.get("q")
const id = searchParams.get("item")
const type = searchParams.get("type")
const onSearch = (text) => navigate(text ? `/search?q=${encodeURIComponent(text)}` : '/home')

useEffect(() => {
  if (q) navigate('/home', { replace: true })
}, [])

   
return (
  <div className="flex flex-col min-h-screen overflow-x-hidden bg-[#141414] text-white">
   
    <NavBar value={q?? ""} onSearch={onSearch} />
 

    

    <Outlet
    
    />   
    
  <DetailModal
  id={id}
  type={type}
  />
  <Footer />
  </div>
)
}
export default Layout