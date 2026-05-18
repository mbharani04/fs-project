import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <>
      <div className='bg-emerald-500 p-4 shadow-md flex justify-center items-center gap-6 '>

        <Link to='/input' className='text-white font-semibold hover:text-emerald-100 transition-colors'> Input Focus Task </Link>
        <Link to='/getinputvalue' className='text-white font-semibold hover:text-emerald-100 transition-colors'> Get Input Value </Link>
        <Link to='/clearinputtask' className='text-white font-semibold hover:text-emerald-100 transition-colors'> Clear Input Task </Link>
        <Link to='/previousvalue' className='text-white font-semibold hover:text-emerald-100 transition-colors'> previous value </Link>
        <Link to='/timercontroltask' className='text-white font-semibold hover:text-emerald-100 transition-colors'> timer control task</Link>
      </div>
    </>



  )
}

export default Navbar