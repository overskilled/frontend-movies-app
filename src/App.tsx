
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from '../pages/Home/Home'
import Home from '../pages/HOME/Home'
import Movie from '../pages/Movie/Movie'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/movie' element={<Movie />} />
      </Routes>
    </BrowserRouter>
  )
}
