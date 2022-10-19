import "./ThirdTask.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ThirdTask() {


  const Routes = {
    
    
    fromBtoA: 'Переместиться из Б в А',
     fromAtoB: 'Переместиться из А в Б', 
     fromAtoBandBack:'Переместиться из А в Б и обратно'};

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

      
        {/* это будут линки */}
        {Object.keys(Routes).map((route,i) =>
      
            <Link
              to={`/third_task/${route}`}
              key={route}
            className='WhatPoint'
            >
              {Object.values(Routes)[i]}
            </Link>
          
        )}

     
      
    </main>
  );
}

export default ThirdTask;
