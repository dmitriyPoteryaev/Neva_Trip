import "./Advertising.css";
import React, { useState } from "react";
import Posibities from "../Posibities/Posibities.jsx";

function Advertising({ elem, curPath }) {
  return (
    <div className="Advertising">
      <img
        className="Image"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            `/PhotoForAdv/${curPath}/${elem.path_img_desktop}`
          })`,
        }}
      />
      <article className="Description">
        <div className="Title">{elem.title}</div>
        <div className="ClockPlusTraveTime">
          <img
            className="Clock"
            src={`${process.env.PUBLIC_URL}` + "/icon/clock.png"}
          />
          <span>{elem.Travel_time}</span>
        </div>
        <div className="Possibilities">
          {elem.Possibilities.map((pos, i) => (
            <Posibities i={i} key={pos} pos={pos} elem={elem}></Posibities>
          ))}
        </div>
        <div className="price">
          <div className="cur_price">{elem.price} ₽</div>
          <div>{elem.pier_price} ₽ на причале</div>
        </div>
      </article>
    </div>
  );
}

export default Advertising;
