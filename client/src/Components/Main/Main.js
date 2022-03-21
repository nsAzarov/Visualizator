import { Box } from '@mui/material';
import React from 'react';
import { CheckInEvents } from '../CheckInEvents';
import { LandingFlightEvents } from '../LandingFlightEvents';
import { TakingOffFlightEvents } from '../TakingOffFlightEvents';
import { TicketSalesEvents } from '../TicketSalesEvents';

export const Main = () => {
  return (
    <Box sx={{ maxWidth: '70%', margin: '100px auto' }}>
      <TicketSalesEvents />
      <hr />
      <CheckInEvents />
      <hr />
      <LandingFlightEvents />
      <hr />
      <TakingOffFlightEvents />
    </Box>
  );
};
