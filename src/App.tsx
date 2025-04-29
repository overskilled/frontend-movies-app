
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from '../pages/Home/Home'
import Home from '../pages/HOME/Home'
import Movie from '../pages/Movie/Movie'
import './App.css'
import Celebritie from '../pages/Celebritie/Celebritie'
import New from '../pages/New/New'
import Community from '../pages/Community/Community'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/movie' element={<Movie />} />
        <Route path='/celebritie' element={<Celebritie />} />
        <Route path='/new' element={<New />} />
        <Route path='/profile' element={<Community />} />
      </Routes>
    </BrowserRouter>
  )
}
