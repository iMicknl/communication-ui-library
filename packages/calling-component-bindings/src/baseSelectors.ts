// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CallState, CallClientState, DeviceManagerState, IncomingCallState } from 'calling-stateful-client';

/**
 * Common props used to reference calling declarative client state.
 */
export type CallingBaseSelectorProps = {
  callId: string;
};

export const getCalls = (state: CallClientState): Map<string, CallState> => state.calls;

export const getCallsEnded = (state: CallClientState): CallState[] => state.callsEnded;

export const getIncomingCalls = (state: CallClientState): Map<string, IncomingCallState> => state.incomingCalls;

export const getIncomingCallsEnded = (state: CallClientState): IncomingCallState[] => state.incomingCallsEnded;

export const getDeviceManager = (state: CallClientState): DeviceManagerState => state.deviceManager;

export const getCall = (state: CallClientState, props: CallingBaseSelectorProps): CallState | undefined =>
  state.calls.get(props.callId);

export const getDisplayName = (state: CallClientState): string | undefined => state.callAgent?.displayName;

export const getIdentifier = (state: CallClientState): string => state.userId;
