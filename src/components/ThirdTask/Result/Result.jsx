import "./Result.css";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


function Result() {

    const store = useSelector((store) => store);

    let amount = +store.changeAmount.amount;

    const params = useParams();

    console.log(store.changeTicket.ticketStartB, store.changeTicket.ticketEndB)

    return (
        <div className="Result">
            {
                params.route === 'fromAtoBandBack'
                    ?
                    <div className="description">
                        <span>Общая сумма составляет {amount * store.changeBothTicket.price}</span>
                        <span>Ваш теплоход оправляется из точки А в {store.changeBothTicket.ticketStartA}</span>
                        <span>Ваш теплоход прибывает в точку В в {store.changeBothTicket.ticketEndA}</span>
                        <span>Ваш теплоход оправляется из точки В в {store.changeBothTicket.ticketStartB}</span>
                        <span>Ваш теплоход орибывает в точку A в {store.changeBothTicket.ticketEndB}</span>

                    </div>

                    :
                    <div className="description">
                        <span>Общая сумма составляет {amount * (+store.changeTicket.price)}</span>
                        <span>Ваш теплоход оправляется в {store.changeTicket.ticketStart}</span>
                        <span>Ваш теплоход прибывает в {store.changeTicket.ticketEnd}</span>

                    </div>

            }

        </div>);
}

export default Result