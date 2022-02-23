import { useSelector } from "react-redux";
import React from "react";

function LapsContainer() {
  const laps = useSelector((state) => state.laps);
  
  return (
    <div className="laps">
      <h1>{!!laps.length && "Laps :"}</h1>
      <ol>
        {laps.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default LapsContainer;
