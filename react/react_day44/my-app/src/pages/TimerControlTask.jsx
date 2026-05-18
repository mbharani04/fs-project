import React, { useRef, useState } from "react";

function TimerControlTask() {
  const [count, setCount] = useState(0);

  const timerRef = useRef(null);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);

    timerRef.current = null;
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col gap-6 border border-gray-100 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Timer Control Task</h2>
        
        <div className="bg-gray-50 p-6 rounded-full w-32 h-32 mx-auto flex items-center justify-center border-4 border-emerald-100">
          <span className="text-4xl font-bold text-emerald-600">{count}</span>
        </div>

        <div className="flex gap-4 w-full">
          <button 
            onClick={startTimer}
            className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors shadow-sm"
          >
            Start
          </button>
          <button 
            onClick={stopTimer}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors shadow-sm"
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}

export default TimerControlTask;