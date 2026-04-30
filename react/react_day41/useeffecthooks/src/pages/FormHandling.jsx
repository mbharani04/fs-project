import { useState } from "react"


const FormHandling = () => {

const [data, setData] = useState([username: "", useremail:"", usermobile:""])

const handleClick = (e)=>{
    setData({...Data, [e.target.name]: e.target.value})
}

const datasaving = localStorage.setItem("tasklist",JSON.stringify(Data))

  return (
    <>
    <div>formhandling</div>
    <div>
       <div>
        <form>
            <input type="text"   name = "username"  value ={data.username} placeholder="enter your name" />
             <input type="email" name ="useremail"  value ={data.useremail} placeholder="enter your email" />
              <input type="tel"  name ="usermobile" value ={data.usermobile} placeholder="enter your mobile" />
          <button onClick = {handleClick}>Register</button>

    


              
        </form>

       </div>
       
    </div>
    </>
  )
}

export default FormHandling