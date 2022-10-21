

export const useChangePrice = (allTickets,price) => {
  const newObj = JSON.parse(JSON.stringify(allTickets));

  

  Object.values(newObj).forEach((elem) =>
    [...elem].map((TicketObject) => {
      TicketObject["price"] = price
    })
  );

  return newObj;
};
