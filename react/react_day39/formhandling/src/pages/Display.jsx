import  { useState } from "react";


const Display = () => {

    const [value,setValue] = useState("")

    const handleChange=(e)=>{
        setValue(e.target.value)
    }  
    const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (<>
  <div className="bg-blue-400 p-40 flex justify-center items-center flex-col gap-3"> 
      <h1 className="bg-black text-white p-1">display the value</h1>
      <form onSubmit={handleSubmit}>

        <input className="border " onChange={handleChange} type="text" placeholder="Enter the value"/>
        
        {value}
      </form>
  </div>
  </>


  )
}

export default Display;