// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AudioOptions, CallState, GroupLocator, MeetingLocator } from '@azure/communication-calling';
import { Label, Overlay, Spinner, Stack } from '@fluentui/react';
import { VideoStreamOptions } from 'react-components';
import { CallClientState, StatefulCallClient } from 'calling-stateful-client';
import React, { useEffect, useState } from 'react';
import { useCallAgent, useCallClient, useCall, useCallContext } from 'react-composites';
import { CommandPanel, CommandPanelTypes } from './CommandPanel';
import { Header } from './Header';
import { useAzureCommunicationHandlers } from './hooks/useAzureCommunicationHandlers';
import { complianceBannerSelector } from './selectors/complianceBannerSelector';
import { mediaGallerySelector } from './selectors/mediaGallerySelector';
import { lobbySelector } from './selectors/lobbySelector';
import { useSelector } from './hooks/useSelector';
import { MediaGallery } from './MediaGallery';
import {
  activeContainerClassName,
  containerStyles,
  headerStyles,
  loadingStyle,
  overlayStyles,
  paneStyles,
  subContainerStyles
} from './styles/GroupCall.styles';
import { isInCall } from './utils/AppUtils';
import { MINI_HEADER_WINDOW_WIDTH } from './utils/constants';
import { Lobby } from './Lobby';
import { ComplianceBanner } from './ComplianceBanner';
import { useHandlers } from './hooks/useHandlers';

export interface GroupCallProps {
  screenWidth: number;
  endCallHandler(): void;
  callErrorHandler(): void;
  callLocator: GroupLocator | MeetingLocator;
  isMicrophoneOn: boolean;
}

const spinnerLabel = 'Initializing call client...';

const localVideoViewOption = {
  scalingMode: 'Crop',
  isMirrored: true
} as VideoStreamOptions;

export const GroupCall = (props: GroupCallProps): JSX.Element => {
  const [selectedPane, setSelectedPane] = useState(CommandPanelTypes.None);
  const { callLocator, screenWidth, endCallHandler, callErrorHandler, isMicrophoneOn } = props;

  const callAgent = useCallAgent();
  const { setCall } = useCallContext();
  const call = useCall();
  const callClient: StatefulCallClient = useCallClient();

  const [callState, setCallState] = useState<CallState | undefined>(undefined);
  const [isScreenSharingOn, setIsScreenSharingOn] = useState<boolean | undefined>(undefined);
  const [joinedCall, setJoinedCall] = useState<boolean>(false);

  const mediaGalleryProps = useSelector(mediaGallerySelector);
  const handlers = useAzureCommunicationHandlers();

  const lobbyProps = useSelector(lobbySelector);
  const lobbyHandlers = useHandlers(Lobby);

  const complianceBannerProps = useSelector(complianceBannerSelector);

  // To use useProps to get these states, we need to create another file wrapping GroupCall,
  // It seems unnecessary in this case, so we get the updated states using this approach.
  useEffect(() => {
    const onStateChange = (state: CallClientState): void => {
      call?.id && setCallState(state.calls.get(call.id)?.state);
      call?.id && setIsScreenSharingOn(state.calls.get(call.id)?.isScreenSharingOn);
    };
    callClient.onStateChange(onStateChange);
    return () => {
      callClient.offStateChange(onStateChange);
    };
  }, [call?.id, callClient]);

  useEffect(() => {
    if (!isInCall(callState ?? 'None') && callAgent && !joinedCall) {
      const audioOptions: AudioOptions = { muted: !isMicrophoneOn };
      try {
        const call = callAgent.join(callLocator as GroupLocator, { audioOptions });
        setCall(call);
        setJoinedCall(true);
      } catch (error) {
        console.log(error);
        callErrorHandler();
      }
    }
  }, [call?.callEndReason, callAgent, callErrorHandler, callLocator, callState, isMicrophoneOn, joinedCall, setCall]);

  if ('meetingLink' in callLocator) {
    if (callState && ['Connecting', 'Ringing', 'InLobby'].includes(callState)) {
      return (
        <Lobby
          callState={callState}
          {...lobbyProps}
          {...lobbyHandlers}
          onEndCallClick={endCallHandler}
          isMicrophoneChecked={isMicrophoneOn}
          localVideoViewOption={localVideoViewOption}
        />
      );
    }
  }

  return (
    <>
      {callState && isInCall(call?.state ?? 'None') ? (
        <Stack horizontalAlign="center" verticalAlign="center" styles={containerStyles} grow>
          <Stack.Item styles={headerStyles}>
            <Header
              selectedPane={selectedPane}
              setSelectedPane={setSelectedPane}
              endCallHandler={endCallHandler}
              screenWidth={screenWidth}
            />
          </Stack.Item>
          <Stack.Item>
            <ComplianceBanner {...complianceBannerProps} />
          </Stack.Item>
          <Stack styles={subContainerStyles} grow horizontal>
            {!isScreenSharingOn ? (
              callState === 'Connected' && (
                <>
                  <Stack.Item grow styles={activeContainerClassName}>
                    <MediaGallery {...mediaGalleryProps} onStartLocalVideo={handlers.onStartLocalVideo} />
                  </Stack.Item>
                  {selectedPane !== CommandPanelTypes.None &&
                    (window.innerWidth > MINI_HEADER_WINDOW_WIDTH ? (
                      <Stack.Item disableShrink styles={paneStyles}>
                        <CommandPanel selectedPane={selectedPane} />
                      </Stack.Item>
                    ) : (
                      <Overlay styles={overlayStyles}>
                        <CommandPanel selectedPane={selectedPane} />
                      </Overlay>
                    ))}
                </>
              )
            ) : (
              <Stack horizontalAlign="center" verticalAlign="center" styles={loadingStyle}>
                <Label>Your screen is being shared</Label>
              </Stack>
            )}
          </Stack>
        </Stack>
      ) : (
        <Spinner label={spinnerLabel} ariaLive="assertive" labelPosition="top" />
      )}
    </>
  );
};
