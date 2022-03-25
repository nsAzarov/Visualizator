import { Box } from '@mui/material';
import React from 'react';
import { CheckInEvents } from '../CheckInEvents';
import { LandingFlightEvents } from '../LandingFlightEvents';
import { TakingOffFlightEvents } from '../TakingOffFlightEvents';
import { TicketSalesEvents } from '../TicketSalesEvents';

export const Main = () => {
  return (
    <Box sx={{ display: 'flex', maxWidth: '1400px', margin: '100px auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            height: '100px',
            width: '400px',
            border: '1px solid grey',
            overflow: 'auto'
          }}
        >
          Самолёты ожидающие посадки
        </div>
        <div style={{ display: 'flex' }}>
          <div
            style={{
              width: '100px',
              height: '500px',
              border: '1px solid black'
            }}
          >
            <LandingFlightEvents />
          </div>
          <div
            style={{
              width: '100px',
              height: '500px',
              border: '1px solid black'
            }}
          >
            <TakingOffFlightEvents />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            height: '100px',
            width: '400px',
            border: '1px solid grey',
            overflow: 'auto'
          }}
        >
          Самолёты ожидающие взлёта
        </div>
      </div>
      <TicketSalesEvents />
      <hr />
      <CheckInEvents />
    </Box>
  );
};
