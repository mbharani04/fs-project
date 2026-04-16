const Boolean = () => {
    const a = 30;
    const b = 60;
    return( <>
    <h1>10 Sums of Boolean </h1>
      <p>1. num1 greater than num2?{a > b ? "Yes" : "No"}</p> 
      <p>2. num1 less than num2?  {a < b ? "Yes" : "No"}</p> 
      <p>3. both numbers equal?  {a === b ? "Yes" : "No"}</p>
      <p>4. num1 even? {a % 2 === 0 ? "Yes" : "No"}</p>
      <p>5. num2 even? {b % 2 === 0 ? "Yes" : "No"}</p>
      <p>6. num1 positive? {a > 0 ? "Yes" : "No"}</p>
      <p>7. num2 greater than 5 AND even? 
        {b > 5 && b % 2 === 0 ? "Yes" : "No"}
      </p>
      <p>8. num1 less than 10 OR odd?  
        {a < 10 || a % 2 !== 0 ? "Yes" : "No"}
      </p>
      <p>9. sum greater than 10?  
        {(a + b) > 10 ? "Yes" : "No"}
      </p>
      <p>10. difference negative? 
        {(a - b) < 0 ? "Yes" : "No"}</p>
        
    </>)
}
export default Boolean;