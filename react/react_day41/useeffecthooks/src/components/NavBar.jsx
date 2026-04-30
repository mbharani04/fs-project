import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <>
    <div>
        <div>logo</div>
        <div>
            <Link path = "/">Home</Link>
            <Link path = "/form">Form Handling</Link>
        </div>
    </div>
    
    </>
  )
}

export default NavBar