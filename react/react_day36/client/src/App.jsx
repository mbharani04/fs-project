import React from 'react'
import Home from './components/home'
const App = () => {
  const Name = "react course"
  return (<>
    <div className = "bg-amber-200 h-screen p-3">
        <Home/>
       <div>
      {Name}


       </div>
    </div>
     </>
  )
}

export default App
