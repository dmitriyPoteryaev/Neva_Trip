import "./ThirdTask.css";
import React, { useState } from "react";

function ThirdTask() {

    let date = new Date();

    let month = date.getMonth() + 1;

    let day = date.getDate();

    let year = date.getFullYear();

    let hour = date.getHours();

    let munite = date.getMinutes();


    const [curTime, setcurTime] =useState({

        year:year,
        month:month,
        day:day,
        hour:hour,
        munite:munite,


     })

     
    let GMT = date.getTimezoneOffset()/60


    console.log(GMT)

    function ShowTime() {

        
    let date = new Date();

    let month = date.getMonth() + 1;

    let day = date.getDate();

    let year = date.getFullYear();

    let hour = date.getHours();

    let munite = date.getMinutes();

    let second = date.getSeconds();



        setcurTime({
            year:year,
            month:month,
            day:day,
            hour:hour,
            munite:munite,

        })
        

    }



    setInterval(ShowTime, 60000)

   console.log(curTime)


  return (
    <main className="ThirdTask">
        <span
        className="curTime"
        >Текущее время {curTime.year}-{curTime.month}-{curTime.day}    {curTime.hour}:{curTime.munite}</span>

      <select name="route" id="route">
        <option value="из A в B">из A в B</option>
        <option value="из B в A">из B в A</option>
        <option value="из A в B и обратно в А">из A в B и обратно в А</option>

      </select>
      
    </main>
  );
}

export default ThirdTask;
