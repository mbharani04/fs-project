import React, { useRef } from "react";

function GetInputValue() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputRef.current.value);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col gap-4 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">Get Input Value</h2>
        <input 
          type="text" 
          ref={inputRef} 
          placeholder="Enter value" 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
        />
        <button 
          type="submit"
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors shadow-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default GetInputValue;