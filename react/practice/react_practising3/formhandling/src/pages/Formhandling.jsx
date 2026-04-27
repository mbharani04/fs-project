import { useState } from 'react'

const Formhandling = () => {
const [value,setValue] = useState("")

const [data, setData]= useState(value)
const handleChange=(e)=>{

    setValue(e.target.value)

}
const handleClick=()=>{
   
    setData(value)


}

  return (
    <>
    <div>
        <form>
           <input type="number" onChange={handleChange} placeholder='enter the number' />
         
  <button onClick={handleClick} >click here</button>
  
   <h1>{data}</h1>
    </form>
      </div>
    </>

  )
}

export default Formhandling;
