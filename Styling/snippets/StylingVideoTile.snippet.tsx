import { FluentThemeProvider, StreamMedia, VideoTile, VideoTileStylesProps } from '@azure/communication-react';
import React from 'react';
import { renderVideoStream } from '../../utils';

export const VideoTileExample: () => JSX.Element = () => {
  const customStyles: VideoTileStylesProps = {
    root: { height: '300px', width: '400px' },
    videoContainer: { border: '5px solid firebrick' },
    overlayContainer: { background: 'rgba(165, 13, 13, 0.5)' },
    displayNameContainer: { top: '1rem', bottom: 'auto', right: '1rem', left: 'auto', backgroundColor: 'blue' }
  };

  return (
    <FluentThemeProvider>
      <VideoTile
        isVideoReady={true}
        renderElement={
          // NOTE: Replace with your own video provider. (An html element with video stream)
          <StreamMedia videoStreamElement={renderVideoStream()} />
        }
        displayName={'Jack Reacher'}
        isMirrored={true}
        styles={customStyles}
      />
    </FluentThemeProvider>
  );
};
