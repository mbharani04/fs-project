import React, { useState } from 'react'



const StateProcess = () => {
  
const [count,setCount]= useState(0)
const handleClick =()=>{
       setCount(count+1) 
}

const decClick =()=>{
      setCount(count-1)

}

const resetClick =()=>{
      setCount(0)

}
  return (<>
    <div className="bg-amber-300 p-30 m-5 flex justify-center flex-col items-center gap-3">
        <div className ="bg-cyan-500 p-1 w-40 rounded-3xl text-2xl flex justify-center p-2 ">
 count {count}
        </div >
      <div className ="bg-red-500 p-1 w-40 rounded text-2xl gap-3 flex-col flex justify-center">
       <button onClick={handleClick}> Increase</button>

       </div>
       <div className ="bg-emerald-600 p-1 w-40 rounded text-2xl gap-3 flex-col flex justify-center">
       <button onClick = {decClick}>Decrease</button>
       </div>
       <div className ="bg-blue-500 p-1 w-40 rounded text-2xl gap-3 flex-col flex justify-center">
       <button onClick = {resetClick}>Reset</button>
       </div>
      </div>
   
    </>
  )
}

export default StateProcess;