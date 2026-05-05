import { useState } from "react";

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  const [showText, setShowText] = useState(false);

  
  const [darkMode, setDarkMode] = useState(false);

 
  const [inputValue, setInputValue] = useState("");

  const [count, setCount] = useState(0);

  
  const [clicked, setClicked] = useState(false);


  const [checked, setChecked] = useState(false);

  
  const [password, setPassword] = useState("");

  const [showImage, setShowImage] = useState(false);

 
  const [option, setOption] = useState("");

  return (
    <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} min-h-screen p-6 space-y-6`}>

      {/* Task 1 */}
      <div>
        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
        <p>{isLoggedIn ? "Welcome User" : "Please Login"}</p>
      </div>

      {/* Task 2 */}
      <div>
        <button
          onClick={() => setShowText(!showText)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          {showText ? "Hide" : "Show"}
        </button>
        <p>{showText ? "This is visible text" : ""}</p>
      </div>

      {/* Task 3 */}
      <div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-700 text-white px-4 py-2 rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Task 4 */}
      <div>
        <input
          type="text"
          placeholder="Type something..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border p-2"
        />
        <p>{inputValue ? "Typing..." : "Empty"}</p>
      </div>

      {/* Task 5 */}
      <div>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Count: {count}
        </button>
        <p>{count % 2 === 0 ? "Even" : "Odd"}</p>
      </div>

      {/* Task 6 */}
      <div>
        <button
          onClick={() => setClicked(true)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          {clicked ? "Button Clicked" : "Click Me"}
        </button>
      </div>

      {/* Task 7 */}
      <div>
        <input
          type="checkbox"
          onChange={() => setChecked(!checked)}
        />
        <p>{checked ? "Accepted" : "Not Accepted"}</p>
      </div>

      {/* Task 8 */}
      <div>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2"
        />
        <p>{password.length > 6 ? "Strong Password" : "Weak Password"}</p>
      </div>

      {/* Task 9 */}
      <div>
        <button
          onClick={() => setShowImage(!showImage)}
          className="bg-indigo-500 text-white px-4 py-2 rounded"
        >
          {showImage ? "Hide Image" : "Show Image"}
        </button>
        {showImage ? (
          <img
            src="https://via.placeholder.com/150"
            alt="demo"
            className="mt-2"
          />
        ) : null}
      </div>

      {/* Task 10 */}
      <div>
        <select
          onChange={(e) => setOption(e.target.value)}
          className="border p-2"
        >
          <option value="">Select Option</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>

        <p>
          {option === "student"
            ? "You selected Student"
            : option === "teacher"
            ? "You selected Teacher"
            : option === "admin"
            ? "You selected Admin"
            : "Please select an option"}
        </p>
      </div>

    </div>
  );
}