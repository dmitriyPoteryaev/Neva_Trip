import "./ChoiceTicket.css";
import React, { useState } from "react";
import * as tickets from "../../../JSON/timetable.json";
import { useParams } from "react-router-dom";
import { useChangeTimeZone } from "../../../customHooks/ThirdTask/useChangeTimeZone";
import { useChangePrice } from "../../../customHooks/ThirdTask/useChangePrice";
import moment from "moment";
import "moment-timezone";
import { useSelector, useDispatch } from "react-redux";
import { actionCreatorTicket } from "../../../Redux/action/actionCreater";
import { actionCreatorBothTicket } from "../../../Redux/action/actionCreater";
import { useNavigate } from "react-router-dom";

function ChoiceTicket() {
  const [attention, setAttention] = useState(false);
  const arr = useChangeTimeZone(tickets.default);



 

  // ты можешь определять по прайсу , что клиент движеться в одну сторону или туда и обратно
  // и в зависимости от цены в дальйшем предупреждать клиента касательно покупки белтов
  const params = useParams();

  const router = useNavigate();

  const changePrice = useChangePrice(arr, 1200);

  const store = useSelector((store) => store);



  const dispatch = useDispatch();

  const CheckTime = (event) => {
    const eventTr = event.target;

 

  //  когда цена билета 700

      if(eventTr.value.split(',')[1]==='700'){
        const Day = moment(eventTr.value.split(",")[0]).format("DD-MM-YYYY, HH:mm");

        const WhenArrive = moment(eventTr.value.split(",")[0])
          .add(+eventTr.value.split(",")[4], "minutes")
          .format("DD-MM-YYYY, HH:mm");

        dispatch({
          type: actionCreatorTicket(),
          payload: [Day, eventTr.value.split(",")[1], WhenArrive],
        });

      }
        // когда цена билета 1200
      else{

     

        const Day = moment(eventTr.value.split(",")[0]).format("DD-MM-YYYY, HH:mm");

        const WhenArrive = moment(eventTr.value.split(",")[0])
          .add(+eventTr.value.split(",")[4], "minutes")
          .format("DD-MM-YYYY, HH:mm");

          if(eventTr.value.split(",")[eventTr.value.split(",").length-1]==='0'){
            dispatch({
              type: actionCreatorBothTicket(),
              payload: {...store.changeBothTicket,ticketStartA:Day,ticketEndA:WhenArrive,price:eventTr.value.split(",")[1]}
              
              ,
            });

          }
          else{
            dispatch({
              type: actionCreatorBothTicket(),
              payload:{...store.changeBothTicket,ticketStartB:Day,ticketEndB:WhenArrive,price:eventTr.value.split(",")[1]},
            });

          }





     }
  
  };



  const Choose = () => {
    if (store.changeTicket.price||(store.changeBothTicket.ticketEndA&&store.changeBothTicket.ticketStartB&&store.changeBothTicket.ticketEndA<store.changeBothTicket.ticketStartB)) {
      router(`/third_task/${params.route}/amountTicket`);
    } else {
      setAttention(true);


      setTimeout(()=>{
       
        setAttention(false);
      },3000)
     
     
    }
  };

  return (
    <div className="ChoiceTicket">
      <div className={attention ? "Attention" : "AttentionHidden"}>
       Возможно Вы не выбрали себе билет. Или введён неверный формат билетов
      </div>
     
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
          Object.values(changePrice).map((elem, i) => (
            <select name="time" id="time" key={Object?.keys(changePrice)[i]}>
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
      <button
      className="WhatPoint"
      onClick={() => Choose()}>Выбрать количество билетов</button>
    </div>
  );
}

export default ChoiceTicket;
