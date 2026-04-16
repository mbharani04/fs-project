const LearnBoolean = () => {
  
    const title = "Boolean Method";
    const CheckingBool = true;
  return (<>
  <div>
      <h2>Boolean Values</h2>
       <h1>{title}</h1>

      {CheckingBool ? "This is True" : "This is False"}

    </div>
  </>
    
  );
};

export default LearnBoolean;