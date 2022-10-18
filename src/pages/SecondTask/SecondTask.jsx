import "./SecondTask.css";
import React, { useState } from "react";
import * as jsonTable from "../../JSON/table.json";
import OrderInput from "../../UI/SecondTask/OrderInput/OrderInput";
import { useNavigate } from "react-router-dom";


// теперь будет формирование таблицы не по событию, а по билету

function SecondTask() {

  const router = useNavigate();


  const [RegistrationInfo, setRegistrationInfo] = useState({
    adult: "",
    kid: "",
    preferential: "",
    group: "",
  });
  const [newOrder, setnewOrder] = useState([]);

  const createOrder = (info) => {
    let curOrder;

    if (newOrder.length === 0) {
      curOrder = 0;
    } else {
      curOrder = +newOrder[newOrder.length - 1].id;
    }

    let k = 1;
    for (let i = 0; i <= Object.keys(info).length - 1; i++) {
      for (let j = 0; j < +Object.values(info)[i]; j++) {
        let curPrice = jsonTable.default.info_ticket[Object.keys(info)[i]];
        let curId = curOrder + k;

        let date = new Date();

        let month = date.getMonth() + 1;

        let day = date.getDate();

        let year = date.getFullYear();

        let hour = date.getHours();

        let munite = date.getMinutes();

        let second = date.getSeconds();

        let event_id = "001";

        newOrder.push({
          id: curId,
          event_id: "001",
          event_date: "2021-08-21 13:00:00",
          ticket_type: `${Object.keys(info)[i]}_type`,
          ticket_quantity: 1,
          ticket_barcode: Date.now() + curId,
          event_barcode: Date.now() + event_id,
          user_id: 1111,
          equal_price: curPrice,
          create: `${year}-${day}-${month} ${hour}:${munite}:${second}`,
        });

        setnewOrder(newOrder);
        k++;
      }
    }

    setRegistrationInfo({
      adult: "",
      kid: "",
      preferential: "",
      group: "",
    });
  };

  return (
    <main className="SecondTask">
       <button className="Next_page" onClick={() => router("/third_task")}>
          Следущее задание
        </button>
      <form className="form" action="#">
        {Object.values(jsonTable.default)[1].map((value) => (
          <OrderInput
            value={value}
            key={value.name}
            inputValue={RegistrationInfo[value.name]}
            onchange={(event) => {
              setRegistrationInfo((prevState) => ({
                ...prevState,
                [value.name]: event,
              }));
            }}
          ></OrderInput>
        ))}
      </form>
      <button
        className="NextPage"
        type="submit"
        onClick={(event) => createOrder(RegistrationInfo)}
      >
        Сформировать заказ
      </button>
      <div className="table-responsive">
        <table className="table table-hover table-bordered table-condensed ">
          <thead>
            <tr>
              {Object.keys(jsonTable.default.all[0]).map((th) => (
                <th key={th}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {newOrder.map((th) => (
              <tr>
                {Object.values(th).map((elem) => (
                  <th>{elem}</th>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="form">
        <strong>
          Задача - Показать конечный вид таблицы с добавленными типами билетов
        </strong>
        Для решения данной задачи я решил видоизменить таблицу и на каждой
        строке в этой таблице будет указан каждый билет по отдельности,
        поскольку к каждому билету привязан уникальный id события или id userа,
        который делал заказ. Тем самым можно осуществлять фильтрацию по
        нескольким критериям:
      </p>
    </main>
  );
}

export default SecondTask;
