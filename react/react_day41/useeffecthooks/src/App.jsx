import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import FormHandling from "./pages/formhandling"


const App = () => {
  return (
   <>
   <Routes>
        <Route path ="/" element ={<Home/>}/>
         <Route path ="/form" element ={<FormHandling/>}/>

   </Routes>
   
   </>
  )
}

export default App
