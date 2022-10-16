import "./App.css";
import Advertising from "./UI/Advertising/Advertising.jsx";
import React, { useState } from "react";
import * as json from "./info.json";

function App() {
  const [curPath, setcurPath] = useState('Desktop');

  let width = window.innerWidth;



// width<= 900
// ?setcurPath("Mobile")
// : setcurPath("Desktop")

  window.addEventListener("resize", (event) => {
    event.path[0].innerWidth <= 1200
      ? setcurPath("Mobile")
      : setcurPath("Desktop");
  });

  return (
    <main className="App">
      <div className="Full_Content">
      {json.default.Advertising.map((elem,j) => (
        <Advertising key={elem.id} elem={elem} curPath={curPath} j={j}></Advertising>
      ))}
      </div>
    </main>
  );
}

export default App;
