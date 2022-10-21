import { combineReducers } from "redux";
import  changeTicket  from './changeTicket';
import  changeAmount  from './changeAmount';
import  changeBothTicket  from './changeBothTicket';

const CombineReduce = combineReducers({
    changeTicket,
    changeAmount,
    changeBothTicket

})

export default CombineReduce