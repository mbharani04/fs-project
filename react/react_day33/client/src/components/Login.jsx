import Button from "./Button";


const Login = ()=>{
    return(<>
    <form >
   
       <input type="text" placeholder="Enter your username"/>
       <br/> <br/>
    
       <input type="password" placeholder="Enter your password"/>
    
    <p>Don't have an account? <a href="/register">Sign up</a></p>
   <Button/>
    </form>
    
    </>)
}
export default Login;

