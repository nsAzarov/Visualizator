import React from 'react';

export const TicketsRegistered = ({ event }) => {
  return (
    <div>
      ticketsRegistered:{' '}
      {event.ticketsRegisteredArr.map((ticket) => (
        <div>
          {ticket.flight} - {ticket.tickets}
        </div>
      ))}
    </div>
  );
};
