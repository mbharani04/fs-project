import { useState } from "react"


const CharCount = () => {

 const [text, setText] = useState("")
     const CountingProcess = (e) =>{
setText(e.target.value)

     }

  return (
   <>
   <div  className="flex flex-col justify-center items-center gap-4 m-6">
     <form>

        <input type="text" placeholder="enter the character" 
        onChange={CountingProcess}
        className="bg-blue-100 border outline "
    />
<p className="flex flex-col justify-center items-center gap-4 m-6 "> {text.length} </p>
   
     </form>



   </div>
   
   
   
   
   </>
  )
}

export default CharCount