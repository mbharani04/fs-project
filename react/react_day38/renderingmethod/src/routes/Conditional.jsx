import React, { useState } from 'react'

const Conditional = () => {
     const [value,setValue] = useState(false)
      
const handleClick =()=>{
    setValue(!value)

}
  return (
   <>

   <div className ="bg-black p-40 flex flex-col gap-4 justify-center items-center">
    <h1 className ="text-2xl text-white">conditional rendering</h1>
      <p>{value? <p className ="bg-red-600 text-white p-1 w-25 ">this is false</p>: <p className="bg-cyan-700 p-1 w-25">this is true</p>}</p>
    <button className="bg-amber-300 text-white" onClick = {handleClick}>click to update</button>
   </div>

<hr/>
    <div className ="bg-emerald-500 p-40 flex flex-col gap-4 justify-center items-center">
    <h1 className ="text-2xl text-white">optional rendering</h1>
      <p>{value? <p className ="bg-pink-600 text-white p-1 w-25 ">this is false</p>: <p className="bg-cyan-700 p-1 w-25">this is true</p>}</p>
    <button className="bg-amber-300 text-white" onClick = {handleClick}>click to update</button>
   </div>
   
   </>
  )
}

export default Conditional;
