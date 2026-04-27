import { useState } from "react";



const UpperCase = () => {

    const [value,setValue] = useState("")

    const ValueLength = (e) =>{
        e.preventDefault()
         setValue (e.target.value)


        }
 
  return (
    <>
   
    <div  className = " m-20 flex justify-center items-center gap-4 flex-col">
    <div>Uppercase function</div>
    <form>
<input  type="text" placeholder="enter the password"  onChange = {ValueLength} 
   className = "border rounded-xs outline bg-amber-50"
/>
<p>{value.toUpperCase()} </p>

    </form>




    </div>
     </>
  )
}

export default UpperCase;