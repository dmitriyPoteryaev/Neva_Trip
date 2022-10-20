import "./ThirdTask.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function ThirdTask() {


  const Routes = {
    
    
    fromBtoA: 'Переместиться из Б в А',
     fromAtoB: 'Переместиться из А в Б', 
     fromAtoBandBack:'Переместиться из А в Б и обратно'};



  return (
    <main className="ThirdTask">
        

      
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
