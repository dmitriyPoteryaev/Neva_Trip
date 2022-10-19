import "./ChoiceTicket.css";
import React from "react";
import * as tickets from "../../JSON/timetable.json";

import { useParams } from "react-router-dom";



function ChoiceTicket(){ 

     const params = useParams();

     console.log(params)

     console.log(tickets.default)
     return ( 
        

         <div className="ChoiceTicket">

           {params.route==='fromAtoB'
          ? 
 <select name="time" id="time">

    { tickets.default.fromAtoB.map((elem)=>
     <option 
     value={elem}
     key={elem}
     >{elem}</option>
     )}


  </select> 
  :
  params.route==='fromBtoA'
  ?
  <select name="time" id="time">
  {
       tickets.default.fromBtoA.map((elem)=>
       <option
       value={elem}
       key={elem}
       >{elem}</option>
       ) 
      
}
</select> 
:Object.values(tickets.default).map((elem,i)=>
     
     <select 
     name="time" id="time"
     key={Object.keys(tickets.default)[i]}
     >
     {
          elem.map((elem)=>
          <option
          value={elem}
          key={elem}
          >{elem}</option>
          ) 
         
     }
     </select> 

     )
     






           }

     </div> );
}

export default ChoiceTicket