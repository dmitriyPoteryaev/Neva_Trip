import {CHANGE_AMOUNT} from '../changeTicketAmount'


const changeAmount = (state={ amount:null}, {type, payload}) =>{

switch(type){

case CHANGE_AMOUNT : return {...state, amount: payload}
default: return state

}

}

export default changeAmount