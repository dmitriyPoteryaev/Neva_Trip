import React from "react";
import classes from "./OrderInput.module.css";

function OrderInput({ value, onchange, inputValue }) {
  return (
    <div className={classes.commonInp}>
      <span className={classes.nameInput}>{value.nameInput}</span>

      <div className={classes.inpPlusFig}>
        <input
          type={value.type}
          value={inputValue}
          placeholder={value.placeholder}
          name={value.name}
          onChange={(event) => onchange(event.target.value)}
          
        />
      </div>
    </div>
  );
}

export default OrderInput;
