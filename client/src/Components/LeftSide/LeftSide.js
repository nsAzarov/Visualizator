import React from 'react';
import { LandingFlightEvents } from './LandingFlightEvents';
import { TakingOffFlightEvents } from './TakingOffFlightEvents';
import { WaitingForLanding } from './WaitingForLanding';
import { WaitingForTakeOff } from './WaitingForTakeOff';

export const LeftSide = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>
      <WaitingForLanding />
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
      <WaitingForTakeOff />
    </div>
  );
};
