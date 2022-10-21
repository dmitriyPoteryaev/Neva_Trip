import "./AmountTicket.css";
import React, { useState } from "react";
import { actionCreatorAmount } from "../../../Redux/action/actionCreater";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate,useParams } from "react-router-dom";

function AmountTicket() {
  const [ammount, setAmmount] = useState('');
  const [attention, setAttention] = useState(false);
  const router = useNavigate();
  const params = useParams();

  const dispatch = useDispatch();



  const store = useSelector((store) => store);


  const Choose1 = () => {
    if (store.changeAmount.amount&&typeof(+store.changeAmount.amount)==='number'&&store.changeAmount.amount>0&&Number.isInteger(+store.changeAmount.amount)&&ammount) {
      router(`/third_task/${params.route}/result`);
    }
    else{

      setAttention(true);


      setTimeout(()=>{
       
        setAttention(false);
      },3000)
    }
  };

  return (
    <div className="AmountTicket">
        <div className={attention ? "Attention" : "AttentionHidden"}>
       Неверный формат ввода данных
      </div>
      <input
      value={ammount}
        onChange={(event) =>{

          dispatch({
            type: actionCreatorAmount(),
            payload: event.target.value,
          });
         
          setAmmount(event.target.value)

        }
          
        }
        placeholder="Введите число..."
        
      />
      <button onClick={() => Choose1()}>Посчитать </button>
    </div>
  );
}

export default AmountTicket;
