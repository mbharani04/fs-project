import React, { useState } from 'react'

const Background = () => {

    const[color, setColor] = useState('white') 
     
  return (<> 

<div>
         <div style={{ backgroundColor: color, height: "100vh", display: "flex",
  justifycontent: "space-between", alignItems: "center", gap: "10px"}}>
      <button style={{ backgroundColor:"red" , padding: "10px" , color: "white"}} onClick={() => setColor("red")}>Red</button>
      <button style={{ backgroundColor:"blue" , padding: "10px" , color: "white"}} onClick={() => setColor("blue")}>Blue</button>
      <button style={{ backgroundColor:"green" , padding: "10px" , color: "white"}} onClick={() => setColor("green")}>Green</button>
    </div>

</div>
  

 
   
 </> )
   }


export default Background