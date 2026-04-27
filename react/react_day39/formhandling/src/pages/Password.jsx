import { useState } from "react";



const Password = () => {

    const [pw,setPw] = useState("")

    const PwLength = (e) =>{
        e.preventDefault()
         setPw (e.target.value)


        }
 
  return (
    <>
   
    <div  className = "bg-blue-200 p-10 flex justify-center items-center gap-4 flex-col">
    <div>Password</div>
    <form>
<input  type="text" placeholder="enter the password"  onChange = {PwLength} 
   className = "border rounded-xs outline bg-amber-50"
/>
<p>{ pw.length===0 ?  "Enter Password": pw.length < 6 ? "weak" : "strong"} </p>

    </form>




    </div>
     </>
  )
}

export default Password;