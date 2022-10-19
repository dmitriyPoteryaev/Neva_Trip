import "./Posibities.css";
import React from "react";

import SeeTheTime from "../SeeTheTime/SeeTheTime";

// функциональный компонент, который отображает все возможности поезки

function Posibities({ pos, elem, i, j }) {
  return (
    <div className="PosPlusTick">
      <img src={`${process.env.PUBLIC_URL}` + "/icon/tick.png"} />
      <span className="Pos">
        <span className="Pos_text">
          {pos}
          </span>
        {i === elem.Possibilities.length - 1 ? (
          <SeeTheTime next_flight={elem.next_flight} j={j}></SeeTheTime>
        ) : (
          <div></div>
        )}
      </span>
    </div>
  );
}

export default Posibities;
