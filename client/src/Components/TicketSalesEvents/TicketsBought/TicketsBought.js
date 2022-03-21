import React from 'react';

export const TicketsBought = ({ event }) => {
  return (
    <div>
      ticketsBought:{' '}
      {event.ticketsBought.map((ticket) => (
        <div>
          {ticket.flight} - {ticket.tickets}
        </div>
      ))}
    </div>
  );
};
