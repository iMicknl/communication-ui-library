// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as reselect from 'reselect';
// @ts-ignore
import { CallState, CallClientState, LocalVideoStream } from 'calling-stateful-client';
// @ts-ignore
import { getCall, CallingBaseSelectorProps, getDisplayName, getIdentifier } from 'calling-component-bindings';

export const lobbySelector = reselect.createSelector(
  [getCall, getDisplayName, getIdentifier],
  (call: CallState | undefined, displayName: string | undefined, identifier: string | undefined) => {
    const localVideoStream = call?.localVideoStreams.find((i) => i.mediaStreamType === 'Video');
    return {
      localParticipant: {
        userId: identifier ?? '',
        displayName: displayName ?? '',
        isMuted: call?.isMuted,
        isScreenSharingOn: call?.isScreenSharingOn,
        videoStream: {
          isAvailable: !!localVideoStream,
          isMirrored: localVideoStream?.view?.isMirrored,
          renderElement: localVideoStream?.view?.target
        }
      }
    };
  }
);
