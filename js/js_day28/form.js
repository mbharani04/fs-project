
const inputWrite = document.getElementById("colorInput")
  inputWrite.addEventListener("input",()=>{
      const  para = document.getElementById("para")
      para.textContent = inputWrite.value
  })



  const btnOne = document.getElementById("redbtn")
  const btnTwo = document.getElementById("yellowbtn")
  const btnThree = document.getElementById("greenbtn")


  
  btnOne.addEventListener("click",()=>{
    const circle_change =  document.getElementById("circleColor")
    circle_change.style.backgroundColor = "red"
    circle_change.innerHTML = "stop" 

  })

  
  btnTwo.addEventListener("click",()=>{
    const circle_change =  document.getElementById("circleColor")
    circle_change.style.backgroundColor = "yellow" 
    circle_change.innerHTML = "warning"
    
  })

  
  btnThree.addEventListener("click",()=>{
    const circle_change =  document.getElementById("circleColor")
    circle_change.style.backgroundColor = "green" 
     circle_change.innerHTML = "success"
  })