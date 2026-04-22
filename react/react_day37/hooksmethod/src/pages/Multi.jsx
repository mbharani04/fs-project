import React, { useState } from 'react'

const Multi = () => {
  const [count, setCount] = useState(0)

  return (
    <div className ="m-4 flex justify-center bg-emerald-400 items-center p-5 flex-col">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>incre+</button>
      <button onClick={() => setCount(count - 1)}>decre-</button>
    </div>
  )
}

export default Multi;