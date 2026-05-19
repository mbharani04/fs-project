import React from "react";

function MapExample() {
  const fruits = ["Apple", "Mango", "Orange", "Banana"];

  return (
    <div>
      <h2>Array Loop using map()</h2>

      {fruits.map((fruit, index) => (
        <h3 key={index}>{fruit}</h3>
      ))}
    </div>
  );
}

export default MapExample;