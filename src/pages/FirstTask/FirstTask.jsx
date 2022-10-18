import "./First_Task.css";
import Advertising from "../../UI/FirstTask/Advertising/Advertising";
import React, { useState } from "react";
import * as json from "../../JSON/info.json";
import { useNavigate } from "react-router-dom";

function FirstTask() {
  const [curPath, setcurPath] = useState("Desktop");

  const router = useNavigate();

  window.addEventListener("resize", (event) => {
    event.path[0].innerWidth <= 1200
      ? setcurPath("Mobile")
      : setcurPath("Desktop");
  });

  return (
    <main className="First_Task">
      <div className="Full_Content">
        <button className="Next_page" onClick={() => router("/second_task")}>
          Следущее задание
        </button>
        {json.default.Advertising.map((elem, j) => (
          <Advertising
            key={elem.id}
            elem={elem}
            curPath={curPath}
            j={j}
          ></Advertising>
        ))}
      </div>
    </main>
  );
}

export default FirstTask;
