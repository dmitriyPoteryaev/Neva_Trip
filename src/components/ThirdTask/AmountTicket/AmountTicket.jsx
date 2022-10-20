import "./AmountTicket.css";
import React, { useState } from "react";
import { actionCreatorAmount } from "../../../Redux/action/actionCreater";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function AmountTicket() {
  const router = useNavigate();

  const dispatch = useDispatch();

  const store = useSelector((store) => store);

  console.log(store);

  const Choose1 = () => {
    if (store.changeAmount) {
      router("/third_task/result");
    }
  };

  return (
    <div className="AmountTicket">
      <input
        onChange={(event) =>
          dispatch({
            type: actionCreatorAmount(),
            payload: event.target.value,
          })
        }
        placeholder="Введите число..."
      />
      <button onClick={() => Choose1()}>Посчитать </button>
    </div>
  );
}

export default AmountTicket;
