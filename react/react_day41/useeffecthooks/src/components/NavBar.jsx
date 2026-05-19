import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <>
    <div>
        <div>logo</div>
        <div>
            <Link path = "/">Form Handling</Link>
            <Link path = "/arraylooping">ArrayLooping</Link>
            <Link path = "/fetchapi">FetchApi</Link>
        </div>
    </div>
    
    </>
  )
}

export default NavBar