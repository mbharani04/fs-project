import React from 'react'
import Conditional from './routes/Conditional'
import {Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar'
const App = () => {
  return (<>
  <NavBar/>
    <Routes>
<Route path ="/" element={<Conditional/>}/>

    </Routes>
  </> )
}

export default App
