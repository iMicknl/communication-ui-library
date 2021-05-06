// © Microsoft Corporation. All rights reserved.

import { LocalVideoStream, RemoteVideoStream } from '@azure/acs-calling-declarative';

export declare interface CreateViewOptions {
  isMirrored?: boolean;
  scalingMode?: ScalingMode;
}

export type MediaStreamType = 'Video' | 'ScreenSharing';

export type ScalingMode = 'Stretch' | 'Crop' | 'Fit';

export type VideoGalleryVideoStream = {
  id: string;
  mediaStreamType: MediaStreamType;
  isAvailable: boolean;
  scalingMode?: ScalingMode;
  isMirrored?: boolean;
  target?: HTMLElement;
};

export type VideoGalleryRemoteVideoStream = VideoGalleryVideoStream;

export type VideoGalleryLocalVideoStream = VideoGalleryVideoStream;

export type VideoGalleryParticipant = {
  userId: string;
  displayName?: string;
  isMuted: boolean;
};

export type VideoGalleryRemoteParticipant = VideoGalleryParticipant & {
  isSpeaking: boolean;
  videoStream?: RemoteVideoStream;
  screenShareStream?: RemoteVideoStream;
};

export type VideoGalleryLocalParticipant = VideoGalleryParticipant & {
  isScreenSharingOn: boolean;
  videoStream?: LocalVideoStream;
};