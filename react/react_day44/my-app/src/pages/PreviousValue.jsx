import React, { useEffect, useRef, useState } from "react";

function PreviousValue() {
  const [count, setCount] = useState(0);

  const previousValue = useRef();

  useEffect(() => {
    previousValue.current = count;
  }, [count]);

  return (
    <div className="flex flex-col items-center justify-center mt-20 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col gap-6 border border-gray-100 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Previous Value Task</h2>
        
        <div className="bg-gray-50 p-4 rounded-lg flex flex-col gap-2">
          <p className="text-lg font-semibold text-gray-700">Current Value: <span className="text-emerald-600 text-2xl">{count}</span></p>
          <p className="text-lg font-semibold text-gray-500">Previous Value: <span className="text-gray-600 text-xl">{previousValue.current}</span></p>
        </div>

        <button 
          onClick={() => setCount(count + 1)}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors shadow-sm"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default PreviousValue;