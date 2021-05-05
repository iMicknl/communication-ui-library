// © Microsoft Corporation. All rights reserved.
import {
  CallAgent,
  DeviceManager,
  Call,
  StartCallOptions,
  HangUpOptions,
  CreateViewOptions,
  LocalVideoStream,
  VideoDeviceInfo
} from '@azure/communication-calling';
import { CommunicationUserIdentifier, PhoneNumberIdentifier, UnknownIdentifier } from '@azure/communication-common';
import { DeclarativeCallClient } from '@azure/acs-calling-declarative';
import { ReactElement } from 'react';
import memoizeOne from 'memoize-one';

export type DefaultHandlers = ReturnType<typeof createDefaultHandlers>;

export const areStreamsEqual = (prevStream: LocalVideoStream, newStream: LocalVideoStream): boolean => {
  return !!prevStream && !!newStream && prevStream.source.id === newStream.source.id;
};

const createDefaultHandlers = memoizeOne(
  (
    callClient: DeclarativeCallClient,
    callAgent: CallAgent | undefined,
    deviceManager: DeviceManager | undefined,
    call: Call | undefined,
    videoDeviceInfo: VideoDeviceInfo | undefined
  ) => {
    const onStartLocalVideo = async (options: CreateViewOptions): Promise<void> => {
      const callId = call?.id;
      if (!callId || !videoDeviceInfo) return;
      const stream = new LocalVideoStream(videoDeviceInfo);
      if (call && !call.localVideoStreams.find((s) => areStreamsEqual(s, stream))) {
        await call.startVideo(stream);
        await callClient.startRenderVideo(callId, stream, options);
      }
    };

    const onStopLocalVideo = async (stream: LocalVideoStream): Promise<void> => {
      const callId = call?.id;
      if (!callId || !videoDeviceInfo) return;
      if (call && call.localVideoStreams.find((s) => areStreamsEqual(s, stream))) {
        callClient.stopRenderVideo(callId, stream);
        await call.stopVideo(stream);
      }
    };

    const onToggleCamera = (options): Promise<void> | void => {
      const stream = call?.localVideoStreams.find((stream) => stream.mediaStreamType === 'Video');
      if (stream) {
        return onStopLocalVideo(stream);
      } else {
        return onStartLocalVideo(options);
      }
    };

    const onStartCall = (
      participants: (CommunicationUserIdentifier | PhoneNumberIdentifier | UnknownIdentifier)[],
      options?: StartCallOptions
    ): Call | undefined => {
      return callAgent ? callAgent.startCall(participants, options) : undefined;
    };

    const onSelectMicrophone = async (deviceId: string): Promise<void | undefined> => {
      if (!deviceManager) return;
      const devices = await deviceManager.getMicrophones();
      const selected = devices.find((device) => device.id === deviceId);
      if (!selected) return;
      return deviceManager.selectMicrophone(selected);
    };

    const onSelectSpeaker = async (deviceId: string): Promise<void | undefined> => {
      if (!deviceManager) return;
      const devices = await deviceManager.getSpeakers();
      const selected = devices.find((device) => device.id === deviceId);
      if (!selected) return;
      return deviceManager.selectMicrophone(selected);
    };

    const onSelectCamera = async (deviceId: string): Promise<void | undefined> => {
      if (!call || !deviceManager) return;
      const devices = await deviceManager.getCameras();
      const selected = devices.find((device) => device.id === deviceId);
      const stream = call.localVideoStreams.find((stream) => stream.mediaStreamType === 'Video');
      if (!selected || !stream) return;
      return stream.switchSource(selected);
    };

    const onMute = (): Promise<void> | void => call?.mute();

    const onUnmute = (): Promise<void> | void => call?.unmute();

    const onToggleMicrophone = (): Promise<void> | void => (call?.isMuted ? call?.unmute() : call?.mute());

    const onStartScreenShare = (): Promise<void> | void => call?.startScreenSharing();

    const onStopScreenShare = (): Promise<void> | void => call?.stopScreenSharing();

    const onToggleScreenShare = (): Promise<void> | void =>
      call?.isScreenSharingOn ? onStopScreenShare() : onStartScreenShare();

    const onHangUp = (options?: HangUpOptions): Promise<void> | void => call?.hangUp(options);

    return {
      onHangUp,
      onMute,
      onUnmute,
      onSelectCamera,
      onSelectMicrophone,
      onSelectSpeaker,
      onStartCall,
      onStartLocalVideo,
      onStopLocalVideo,
      onStartScreenShare,
      onStopScreenShare,
      onToggleCamera,
      onToggleMicrophone,
      onToggleScreenShare
    };
  }
);

/**
 * Type guard for common properties between two types.
 */
export type CommonProperties<A, B> = {
  [P in keyof A & keyof B]: A[P] extends B[P] ? (B[P] extends A[P] ? P : never) : never;
}[keyof A & keyof B];

type Common<A, B> = Pick<A, CommonProperties<A, B>>;

/**
 * Create a set of default handlers for given component. Memoization is applied to the result. Multiple invokations with
 * the same arguments will return the same handler instances. DeclarativeCallAgent, DeclarativeDeviceManager, and
 * DeclarativeCall may be undefined. If undefined, their associated handlers will not be created and returned.
 *
 * @param declarativeCallClient - DeclarativeCallClient returned from
 *   {@Link @azure/acs-calling-declarative#callClientDeclaratify}.
 * @param callAgent - Instance of {@Link @azure/communication-calling#CallClient}.
 * @param deviceManager - Instance of {@Link @azure/communication-calling#DeviceManager}.
 * @param call - Instance of {@Link @azure/communication-calling#Call}.
 * @param videoDeviceInfo - Instance of {@Link @azure/communication-calling#Call}.
 * @param _ - React component that you want to generate handlers for.
 * @returns
 */
export const createDefaultHandlersForComponent = <Props>(
  declarativeCallClient: DeclarativeCallClient,
  callAgent: CallAgent | undefined,
  deviceManager: DeviceManager | undefined,
  call: Call | undefined,
  videoDeviceInfo: VideoDeviceInfo | undefined,
  _Component: (props: Props) => ReactElement | null
): Common<DefaultHandlers, Props> =>
  createDefaultHandlers(declarativeCallClient, callAgent, deviceManager, call, videoDeviceInfo);
