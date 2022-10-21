import "./SecondPart.css";
import React from "react";
import { useNavigate } from "react-router-dom";

// Кнопка подробнее


function SecondPart(){ 

     



  const router = useNavigate();
     return ( 
          <main className="SecondPart">
         <div className="form">
         <button className="Next_page" onClick={() => router("/second_task")}>Следующее </button>
<p>Ответ на 2 часть первого задания. Если в теге table  подставить следующие стили -   word-break: break-all; overflow-wrap: break-word; </p>
  
  
  <p>
и повесить следующие стили  на весь блок -


    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    max-width: 100%;

то всё должно измениться</p>

     </div> 
     
     </main>);
}

export default SecondPart