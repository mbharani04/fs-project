const Number = () =>{
    const Num = [1,2,3,4,5,6,7,8,9,10];
     const EvenNum = Num.filter((n)=> n%2 === 0);
     const OddNum = Num.filter((n)=> n%2 !== 0);
     const Datas = ["apple","orange","apple","grapes"];
            Datas.lastIndexOf("apple")
    const Alphabetics =["a","b","c","d","e","f","g"];
    const n = [2,3,4];
    const Square = n.map((n)=> n*n);
    const Reverse = Num.reverse();
    const AddTwovalue = [1,2];
           
        
    return(<>
    <h1>10 Sums Using an Number method</h1>
    <p>1. Number = {Num}</p>
    <p>2. Even Number = {EvenNum}</p>
    <p>3. Odd Number = {OddNum}</p>
    <p>4. Datas = {Datas}</p>
    <p>5. Last Index of "apple" = {Datas.lastIndexOf("apple")}</p>
    <p>6. Alphabetics = {Alphabetics}</p>
    <p>7. n = {n}</p>
    <p>8. Square = {Square}</p>
    <p>9. Reverse = {Reverse}</p>
    <p>10. Add Two value = {AddTwovalue}</p>
       
    </>)
}
export default Number;
