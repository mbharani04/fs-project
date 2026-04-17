import Logo from '../assets/1.png';


const NavBar = () => {
  return (<>
  
    <div>
        <title>My App</title>
<div className = "wholecomponent">
        <div className = "Logo">
         <img src={Logo} alt="Logo" />

</div>

        <div className = "navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#login">Login</a>
</div>




      
    </div>
    </div>
    </>
  )
}

export default NavBar;
