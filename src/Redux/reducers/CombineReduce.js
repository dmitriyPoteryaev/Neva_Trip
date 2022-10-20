import { combineReducers } from "redux";
import  changeTicket  from './changeTicket';
import  changeAmount  from './changeAmount';


const CombineReduce = combineReducers({
    changeTicket,
    changeAmount

})

export default CombineReduce