import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Search from './pages/Search'
import ErrorBoundary from "./components/ui/ErrorBoundaryTree";
import Layout from "./components/layout/Layout"
import MyList from "./pages/MyList";
import { SHOWS, MOVIES } from "./services/categories"
import Browse from "./components/browse/Browse";
import MyListProvider from './components/myList/MyListProvider';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Register from './pages/Register'
const App = () => {
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
<Route element={<ProtectedRoute/>}>      
 <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/shows" element={<Browse rows={SHOWS} heroType={"tv"} />} />
          <Route path="/movies" element={<Browse rows={MOVIES} heroType={"movie"} />} />
          <Route path="/mylist" element={<MyList />} />
          </Route>

       </Route>
      </Routes>
   
    </ErrorBoundary>
  )
}

export default App
