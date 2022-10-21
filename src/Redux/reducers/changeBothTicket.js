import {CHANGE_BOTH_TICKET} from '../changeTicketAmount'


const changeBothTicket = (state={ 
ticketStartA:'',
price:'',
ticketEndA:'',
ticketStartB:'',
ticketEndB:'',
}, {type, payload}) =>{

switch(type){

    // [Day,event.value.split(',')[1],WhenArrive]

case CHANGE_BOTH_TICKET : return {...state, 
    ticketStartA:payload.ticketStartA,
    ticketEndA:payload.ticketEndA,
    ticketStartB:payload.ticketStartB,
    ticketEndB:payload.ticketEndB,
    price:payload.price,
}
default: return state

}

}

export default changeBothTicket