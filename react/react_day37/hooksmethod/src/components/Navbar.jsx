import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className= "bg-amber-300 flex justify-between gap-3 p-4">
    
  <p>logo</p>
   
    <div className ="flex gap-4">
        
<Link to = "/">Home</Link>
<Link to = "/rendering">3 buttons</Link>
<Link to = "/like">Like</Link>
<Link to = "/background">Background change</Link>
<Link to = "/multi">Multi counter</Link>

</div>
   
 </div>
    </>
  )
}

export default Navbar