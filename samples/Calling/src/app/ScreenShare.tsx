// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { memoizeFnAll } from 'acs-ui-common';
import { mergeStyles, Spinner, SpinnerSize, Stack } from '@fluentui/react';
import React, { useMemo } from 'react';
import {
  PlaceholderProps,
  StreamMedia,
  VideoGalleryLocalParticipant,
  VideoGalleryRemoteParticipant,
  VideoStreamOptions,
  VideoTile
} from 'react-components';
import {
  aspectRatioBoxContentStyle,
  aspectRatioBoxStyle,
  screenShareContainerStyle,
  stackContainerStyle
} from './styles/MediaGallery.styles';
import { loadingStyle, videoStreamStyle, videoTileStyle } from './styles/ScreenShare.styles';

export type ScreenShareProps = {
  screenShareParticipant: VideoGalleryRemoteParticipant | undefined;
  localParticipant?: VideoGalleryLocalParticipant;
  remoteParticipants: VideoGalleryRemoteParticipant[];
  onCreateLocalStreamView?: () => Promise<void>;
  onCreateRemoteStreamView?: (userId: string, options?: VideoStreamOptions) => Promise<void>;
};

const memoizeAllRemoteParticipants = memoizeFnAll(
  (userId: string, isReady?: boolean, renderElement?: HTMLElement, displayName?: string): JSX.Element => {
    return (
      <Stack horizontalAlign="center" verticalAlign="center" className={aspectRatioBoxStyle} key={userId}>
        <Stack className={aspectRatioBoxContentStyle}>
          <VideoTile
            isVideoReady={isReady}
            renderElement={<StreamMedia videoStreamElement={renderElement ?? null} />}
            displayName={displayName}
            styles={videoTileStyle}
          />
        </Stack>
      </Stack>
    );
  }
);

// A non-undefined display name is needed for this render, and that is coming from VideoTile props below
const renderLoadingPlaceholder = (props: PlaceholderProps): JSX.Element => (
  <div className={loadingStyle}>
    <Spinner label={`Loading ${props.displayName}'s screen`} size={SpinnerSize.xSmall} />
  </div>
);

export const ScreenShare = (props: ScreenShareProps): JSX.Element => {
  const {
    screenShareParticipant,
    localParticipant,
    remoteParticipants,
    onCreateRemoteStreamView,
    onCreateLocalStreamView
  } = props;

  const isScreenShareAvailable =
    screenShareParticipant &&
    screenShareParticipant.screenShareStream &&
    screenShareParticipant.screenShareStream.isAvailable;

  const screenShareStreamComponent = useMemo(() => {
    if (!isScreenShareAvailable) {
      return;
    }
    const screenShareStream = screenShareParticipant?.screenShareStream;
    const videoStream = screenShareParticipant?.videoStream;
    if (screenShareStream?.isAvailable && !screenShareStream?.renderElement) {
      screenShareParticipant &&
        onCreateRemoteStreamView &&
        onCreateRemoteStreamView(screenShareParticipant.userId, {
          scalingMode: 'Fit'
        });
    }
    if (videoStream?.isAvailable && !videoStream?.renderElement) {
      screenShareParticipant && onCreateRemoteStreamView && onCreateRemoteStreamView(screenShareParticipant.userId);
    }

    return (
      <VideoTile
        displayName={screenShareParticipant?.displayName}
        isVideoReady={screenShareStream?.isAvailable}
        renderElement={<StreamMedia videoStreamElement={screenShareStream?.renderElement ?? null} />}
        onRenderPlaceholder={renderLoadingPlaceholder}
        styles={{
          overlayContainer: videoStreamStyle
        }}
      >
        {videoStream && videoStream.isAvailable && videoStream.renderElement && (
          <Stack horizontalAlign="center" verticalAlign="center" className={aspectRatioBoxStyle}>
            <Stack className={aspectRatioBoxContentStyle}>
              <VideoTile
                isVideoReady={videoStream.isAvailable}
                renderElement={<StreamMedia videoStreamElement={videoStream.renderElement ?? null} />}
                styles={videoTileStyle}
              />
            </Stack>
          </Stack>
        )}
      </VideoTile>
    );
  }, [isScreenShareAvailable, onCreateRemoteStreamView, screenShareParticipant]);

  const layoutLocalParticipant = useMemo(() => {
    const localVideoStream = localParticipant?.videoStream;

    if (localVideoStream && !localVideoStream?.renderElement) {
      onCreateLocalStreamView && onCreateLocalStreamView();
    }

    const isLocalVideoReady = localVideoStream?.renderElement !== undefined;
    return (
      <VideoTile
        isVideoReady={isLocalVideoReady}
        renderElement={<StreamMedia videoStreamElement={localVideoStream?.renderElement ?? null} />}
        displayName={localParticipant?.displayName}
        styles={videoTileStyle}
      />
    );
  }, [localParticipant, onCreateLocalStreamView]);

  const sidePanelRemoteParticipants = useMemo(() => {
    return memoizeAllRemoteParticipants((memoizedRemoteParticipantFn) => {
      return remoteParticipants && screenShareParticipant
        ? remoteParticipants
            .filter((remoteParticipant: VideoGalleryRemoteParticipant) => {
              return remoteParticipant.userId !== screenShareParticipant.userId;
            })
            .map((participant: VideoGalleryRemoteParticipant) => {
              const remoteVideoStream = participant.videoStream;

              if (remoteVideoStream?.isAvailable && !remoteVideoStream?.renderElement) {
                onCreateRemoteStreamView && onCreateRemoteStreamView(participant.userId);
              }

              return memoizedRemoteParticipantFn(
                participant.userId,
                remoteVideoStream?.isAvailable,
                remoteVideoStream?.renderElement,
                participant.displayName
              );
            })
        : [];
    });
  }, [remoteParticipants, onCreateRemoteStreamView, screenShareParticipant]);

  return (
    <>
      <div className={stackContainerStyle}>
        <Stack grow className={mergeStyles({ height: '100%', overflow: 'auto' })}>
          <Stack horizontalAlign="center" verticalAlign="center" className={aspectRatioBoxStyle}>
            <Stack className={aspectRatioBoxContentStyle}>{layoutLocalParticipant}</Stack>
          </Stack>
          {sidePanelRemoteParticipants}
        </Stack>
      </div>
      <div className={screenShareContainerStyle}>{screenShareStreamComponent}</div>
    </>
  );
};
