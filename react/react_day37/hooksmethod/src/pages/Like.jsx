import React, { useState } from 'react'

const Like = () => {
   const [count,setCount] = useState(0)

   const handleClick=()=>{
             setCount(count+1)
   }
  return (<>

  <div className = "bg-cyan-500 p-50 flex justify-center items-center font-semibold flex-col gap-3 ">
<div>
    ❤️{count}
</div>
<div>
    <button onClick={handleClick}>Like</button>
</div>
  </div>

    

    </>
  )
}

export default Like