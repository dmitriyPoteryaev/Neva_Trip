import "./SecondTask.css";
import React,{useState} from "react";
import * as jsonTable from "../../JSON/table.json";
import OrderInput from '../../UI/SecondTask/OrderInput/OrderInput'

// теперь будет формирование таблицы не по событию, а по билету 

function SecondTask() {
  const [RegistrationInfo, setRegistrationInfo] = useState({
    adult: "",
    kid: "",
    preferential: "",
    group:""
  });
  const [newOrder, setnewOrder] = useState([]);


  // {
  //   id: "",
  //   event_id:"",
  //   event_date: "2021-08-21 13:00:00",
  //   ticket_adult_price: "",
  //   ticket_adult_quantity: "",
  //   ticket_kid_price: "",
  //   ticket_kid_quantity: "",
  //   barcode: "",
  //   user_id: "",
  //   equal_price_created: ""
  // }

  console.log(RegistrationInfo)

 const createOrder=(id,event_date)=>{

  setnewOrder(...newOrder,[{id:id,event_id:`00${id}}`,event_date:event_date}])


  setRegistrationInfo({
    adult: "",
    kid: "",
    preferential: "",
    group:""
  })


 }
  
  return (
    <main className="SecondTask">
       <form className="form" action="#">
       {Object.values(jsonTable.default)[1].map((value)=>

       <OrderInput
       value={value}
       key={value.name}
       onchange={(event) => {
        setRegistrationInfo((prevState) => ({
          ...prevState,
          [value.name]: event,
        }));
      }}
       >


       </OrderInput>
       )}
     

       </form> 
       <button
        className="NextPage"
        type="submit"
        onClick={(event) =>createOrder(newOrder.length,) }
          
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
          <tr>
            {Object.keys(jsonTable.default.all[0]).map((th) => (
              <th key={th}>{th}</th>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
   
    </main>
  );
}

export default SecondTask;
