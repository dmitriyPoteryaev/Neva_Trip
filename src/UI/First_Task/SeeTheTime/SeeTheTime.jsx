import "./SeeTheTime.css";
import React, { useState } from "react";

// функциональный компонент, отвечающий за логику с ближайшими рейсами
// getDate - функция нужна , чтобы показывать все возможные рейсы или навершивать другой цвет на 

function SeeTheTime({ next_flight, j }) {
  const [curPos, setcurPos] = useState(NaN);
  const [curActiveQuery, setcurActiveQuery] = useState(NaN);

  const getDate = (e, j, curClass, k) => {
    if (e === "ещё...") {
      setcurPos(j);
    } else {
      if (curClass === "takeQuery") {
        setcurActiveQuery(k);
      }
    }
  };

  let edge = 4;
  return (
    <span className="SeeTheTime">
      {curPos === j
        ? Object.values(next_flight).map((time, k) => (
            <button
              onClick={(event) =>
                getDate(event.target.innerHTML, j, event.target.className, k)
              }
              key={Object.keys(next_flight)[k]}
              className={
                curActiveQuery === k ? "active_takeQuery" : "takeQuery"
              }
            >
              {time}
            </button>
          ))
        : Object.values(next_flight)
            .map((time, k) => {
              if (Object.values(next_flight).length > edge) {
                return k > 2 ? "ещё..." : time;
              } else {
                return time;
              }
            })
            .filter((time, k) => {
              if (k < 4) {
                return time;
              }
            })
            .map((time, k) => (
              <button
                onClick={(event) =>
                  getDate(event.target.innerHTML, j, event.target.className, k)
                }
                key={Object.keys(next_flight)[k]}
                className={
                  curActiveQuery === k ? "active_takeQuery" : "takeQuery"
                }
              >
                {time}
              </button>
            ))}
    </span>
  );
}

export default SeeTheTime;
