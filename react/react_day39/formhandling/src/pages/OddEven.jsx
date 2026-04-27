import { useState } from "react"

const OddEven = () => {

    const [value,setValue] = useState("")

    const handleChange =(e) =>{
     setValue(e.target.value)
    }



  return (
    <>
    <div className = "bg-amber-300 p-10 flex justify-center items-center gap-4">

        <form>

           <input type="tel" placeholder="Enter the number" 
           className = "border rounded-xs outline bg-amber-50"
           onChange = {handleChange}/>
       <p>
        {value ===""? "enter the value" : value %2 === 0 ? "Even" : "Odd"}
       </p>


        </form>
    </div>
    
    
    </>
  )
}

export default OddEven;