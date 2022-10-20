import "./Result.css";
import React from "react";
import { useSelector } from "react-redux";



function Result(){ 

    const store = useSelector((store) => store);

    let amount = +store.changeAmount.amount;
    let ticket = +store.changeTicket.price

     return ( 
         <div className="Result">
<span>Общая сумма составляет {amount*ticket}</span>
<span>Ваш теплоход оправляется в {store.changeTicket.ticketStart}</span>
<span>Ваш теплоход прибывает в {store.changeTicket.ticketEnd}</span>
     </div> );
}

export default Result