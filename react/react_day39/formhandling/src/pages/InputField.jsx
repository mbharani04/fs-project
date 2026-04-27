import  { useState } from "react";



const InputField = () => {

    const [email,setEmail] = useState("")

    const SetUpEmail= (e)=>{
      setEmail (e.target.email)
     

    }

  return (
   <>
   <div className="bg-amber-500 p-40 flex justify-center items-center flex-col gap-3" >
    <h2 className="bg-black text-white p-1">Entering the Email</h2>
<form>


    <input onChange={SetUpEmail} type ="email" placeholder="enter your email" className="border bg-white hover:bg-gray-300  mb-2"/>
{email === ""? <p>Enter email</p> : <p>{email}</p>}

</form>



   </div>
   </>
  )
}

export default InputField;