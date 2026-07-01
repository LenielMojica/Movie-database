import hero from "./assets/images/hero.webp"
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import Details from './pages/Details'
import Login from './pages/Login'
import Search from './pages/Search'
import ErrorBoundary from "./components/ErrorBoundaryTree";
import Layout from "./components/Layout"
import MyList from "./pages/MyList";
import {SHOWS, MOVIES, HOME} from "./services/categories"
import Browse from "./components/Browse";
const App = () => {
  return (
    <ErrorBoundary fallback={<p>Fallo</p>}>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="/home" element={<Home heroImg={hero} />} />
          <Route path="/search" element={<Search />} />
          <Route path="/shows"  element={<Browse rows={SHOWS} heroType={"tv"} />} />
          <Route path="/movies" element={<Browse rows={MOVIES} heroType={"movie"} />} />
         
          <Route path="/mylist" element={<MyList  />} />
        </Route>

        <Route path="/details/:movieId" element={<Details />} />
      </Routes>
    </ErrorBoundary>
  )
}

export default App