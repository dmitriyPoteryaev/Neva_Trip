import "./ChoiceTicket.css";
import React, { useState, useEffect } from "react";
import * as tickets from "../../../JSON/timetable.json";
import { useParams } from "react-router-dom";
import { useChangeTimeZone } from "../../../customHooks/ThirdTask/useChangeTimeZone";
import moment from "moment";
import "moment-timezone";
import { useSelector, useDispatch } from "react-redux";
import { actionCreatorTicket } from "../../../Redux/action/actionCreater";
import { useNavigate } from "react-router-dom";

function ChoiceTicket() {
  const arr = useChangeTimeZone(tickets.default);

  const params = useParams();

  const router = useNavigate();

  const store = useSelector((store) => store);

  const dispatch = useDispatch();

  console.log("Твой стор", store.changeTicket);

  const CheckTime = (event) => {


    const eventTr =event.target

    console.log(eventTr.value.split(","))

    const Day = moment(eventTr.value.split(",")[0]).format("DD-MM-YYYY, HH:mm");

    const WhenArrive = moment(eventTr.value.split(",")[0])
      .add(+eventTr.value.split(",")[4], "minutes")
      .format("DD-MM-YYYY, HH:mm");

    dispatch({
      type: actionCreatorTicket(),
      payload: [Day, eventTr.value.split(",")[1], WhenArrive],
    });
  };

  const Choose = () => {
    router("/third_task/amountTicket");
  };

  return (
    <div className="ChoiceTicket">
      <div onClick={(event) => CheckTime(event)}>
        {params.route === "fromAtoB" ? (
          <select name="time" id="time">
            {arr?.fromAtoB.map((elem) => (
              <option
                value={`${elem.timeTiket},${elem.price},${elem.wayTime.days},${elem.wayTime.hours},${elem.wayTime.minutes}`}
                key={elem.timeTiket}
              >
                {elem.timeTiket}
              </option>
            ))}
          </select>
        ) : params.route === "fromBtoA" ? (
          <select name="time" id="time">
            {arr?.fromBtoA.map((elem) => (
              <option
                value={`${elem.timeTiket},${elem.price},${elem.wayTime.days},${elem.wayTime.hours},${elem.wayTime.minutes}`}
                key={elem.timeTiket}
              >
                {elem.timeTiket}
              </option>
            ))}
          </select>
        ) : (
          Object.values(arr).map((elem, i) => (
            <select name="time" id="time" key={Object?.keys(arr)[i]}>
              {elem.map((elem) => (
                <option
                  value={`${elem.timeTiket},${elem.price},${elem.wayTime.days},${elem.wayTime.hours},${elem.wayTime.minutes},${i}`}
                  key={elem.timeTiket}
                >
                  {elem.timeTiket}
                </option>
              ))}
            </select>
          ))
        )}
      </div>
      <button onClick={() => Choose()}>Выбрать количество билетов</button>
    </div>
  );
}

export default ChoiceTicket;
