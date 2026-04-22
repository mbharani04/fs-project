import React from 'react'
import Home from './pages/Home'
import Rendering from './pages/Rendering'
import Like from './pages/Like'
import Background from './pages/Background'
import Multi from './pages/Multi'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <>
<Navbar/>
    <Routes>
        
        <Route path = "/" element ={<Home/>} />
        <Route path = "/rendering" element ={<Rendering/>} />
        <Route path = "/like" element = {<Like/>} />
        <Route path = "/background" element = {<Background/>} />
        <Route path = "/multi" element = {<Multi/>} />

     </Routes>
    </>
  )
}

export default App;