import "./Posibities.css";
import React from "react";

function Posibities({pos,elem,i}) {

    console.log(i)
  return (  
    <div  className="PosPlusTick">
    <img src={`${process.env.PUBLIC_URL}` + "/icon/tick.png"} />
    <span className="Pos">
      {pos}
      {i=== elem.Possibilities.length - 1 ? (
        Object.values(elem.next_flight).map((time,k) => (
          <button
          key={Object.keys(elem.next_flight)[k]}
          className="takeQuery"
          >{time}</button>
        ))
      ) : (
        <div></div>
      )}
    </span>
  </div>

  );
}

export default Posibities