import {CHANGE_TICKET} from '../changeTicketAmount'


const changeTicket = (state={ ticketStart:'',price:'',ticketEnd:''}, {type, payload}) =>{

switch(type){

    // [Day,event.value.split(',')[1],WhenArrive]

case CHANGE_TICKET : return {...state, 
    ticketStart: payload[0],
    price:  payload[1],
    ticketEnd: payload[2],
}
default: return state

}

}

export default changeTicket