import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import GetInputValue from "./pages/GetInputValue"
import Input from "./pages/Input"
import ClearInputTask from "./pages/ClearInputTask"
import PreviousValue from "./pages/PreviousValue"
import TimerControlTask from "./pages/TimerControlTask"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path='/input' element={<Input />} />
        <Route path='/getinputvalue' element={<GetInputValue />} />
        <Route path='/clearinputtask' element={<ClearInputTask />} />
        <Route path='/previousvalue' element={<PreviousValue />} />
        <Route path='/timercontroltask' element={<TimerControlTask />} />
      </Routes>



    </>
  )
}

export default App