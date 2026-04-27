
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
   
 
    <>
     <div className='bg-emerald-400 p-3 flex justify-center item-center gap-3 '>
    <Link to = '/'> Home</Link>
    <Link to = '/display'> Display</Link>
    <Link to = '/inputfield'>InputField</Link>
    <Link to = '/password'>Password</Link>
    <Link to = '/uppercase'>UpperCase</Link>
    <Link to = '/charcount'>CharCount</Link>
    <Link to = '/oddeven'>OddEven</Link>
         
    </div>
    </>
   
  )
}

export default NavBar;