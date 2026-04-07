const inputWrite = document.getElementById("colorInput")
  inputWrite.addEventListener("input",()=>{
      const  Text = document.getElementById("Text")
      Text.textContent = inputWrite.value
  })


  const colorbutton = document.getElementById("colorbtn")


        colorbutton.addEventListener("click",()=>{
            const inputWrite = document.getElementById("colorInput")
            const data = inputWrite.value
            const colorDisplay = document.getElementById("colorDisplay")
            colorDisplay.style.backgroundColor = data
            colorDisplay.innerHTML = "color changed"
        });


        
  
  
  

