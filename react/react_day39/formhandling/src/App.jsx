
import { Route, Routes } from 'react-router-dom'
import Display from './pages/Display'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import InputField from './pages/InputField'
import Password from './pages/Password'
import UpperCase from './pages/UpperCase'
import CharCount from './pages/CharCount'
import OddEven from './pages/OddEven'


const App = () => {
  return (
    <>
    <NavBar/>
   <Routes>
    <Route path ='/' element ={<Home/>}/>
    <Route path ='/display' element ={<Display/>}/>
    <Route path = '/inputfield' element ={<InputField/>}/>
    <Route path = '/password' element ={<Password/>}/>
    <Route path = '/uppercase' element = {<UpperCase/>}/>
    <Route path = '/charcount' element = {<CharCount/>}/>
     <Route path = '/oddeven' element = {<OddEven/>}/>
   </Routes>
    
    
    
    </>
  )
}

export default App
