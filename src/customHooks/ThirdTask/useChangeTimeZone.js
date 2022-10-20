import moment from "moment";
import "moment-timezone";

export const useChangeTimeZone = (allTickets) => {
  const newObj = JSON.parse(JSON.stringify(allTickets));

  let curTimeZone = moment.tz.guess();

  Object.values(newObj).forEach((elem) =>
    [...elem].map((TicketObject) => {
      TicketObject["timeTiket"] = moment
        .tz(TicketObject.timeTiket, TicketObject?.Timezone)
        .clone()
        .tz(curTimeZone)
        .format("YYYY-MM-DD HH:mm");
    })
  );

  return newObj;
};
