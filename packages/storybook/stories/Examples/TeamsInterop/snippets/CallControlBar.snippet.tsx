import { CameraButton, ControlBar, EndCallButton, MicrophoneButton, OptionsButton } from '@azure/communication-react';
import React from 'react';

// TODO: Add unique keys to the list here.
export const CallControlBar = (): JSX.Element => {
  const controlBarStyles = {
    root: {
      background: 'white',
      minHeight: '4.25rem',
      alignItems: 'center'
    }
  };
  return (
    <ControlBar layout="dockedBottom" styles={controlBarStyles}>
      <CameraButton showLabel={true} checked={true} />
      <MicrophoneButton showLabel={true} checked={true} />
      <OptionsButton showLabel={true} />
      <EndCallButton showLabel={true} style={{ borderRadius: '0.25rem', marginLeft: '0.25rem' }} />
    </ControlBar>
  );
};
