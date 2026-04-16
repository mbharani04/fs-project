export default function Signup(){
    return(<>
    <label>First Name:</label>
    <input type="text" placeholder="Enter your first name"/>
    <br/><br/>
    <label>Last Name:</label>
    <input type="text" placeholder="Enter your last name"/>
    <br/><br/>
    <label>Email:</label>
    <input type="email" placeholder="Enter your email"/>
    <br/><br/>
    <label>Password:</label>
    <input type="password" placeholder="Enter your password"/>
    <br/><br/>
    <button>register</button>
    </>)
}