// © Microsoft Corporation. All rights reserved.

import { Description, Heading, Source, Title } from '@storybook/addon-docs/blocks';
import React from 'react';

const exampleIncomingCallToast = `
import { DefaultButton, Persona, PersonaSize, Stack, Dialog, DialogType, DialogFooter } from '@fluentui/react';
import { CallEnd20Filled, Call20Filled, Video20Filled, VideoOff20Filled } from '@fluentui/react-icons';
import { getTheme, mergeStyles } from '@fluentui/react';

const theme = getTheme();
const palette = theme.palette;

const incomingCallToastStyle = mergeStyles({
  minWidth: '20rem',
  width: '100%',
  height: '100%',
  backgroundColor: palette.whiteTranslucent40,
  opacity: 0.95,
  borderRadius: '0.5rem',
  boxShadow: theme.effects.elevation8,
  padding: '1rem'
});

const incomingCallToastAvatarContainerStyle = mergeStyles({
  marginRight: '0.5rem'
});

const incomingCallAcceptButtonStyle = mergeStyles({
  backgroundColor: palette.greenDark,
  color: palette.white,
  borderRadius: '2rem',
  minWidth: '2rem',
  width: '2rem',
  border: 'none',
  ':hover, :active': {
    backgroundColor: palette.green,
    color: palette.white
  }
});

const incomingCallRejectButtonStyle = mergeStyles({
  backgroundColor: palette.redDark,
  color: palette.white,
  borderRadius: '2rem',
  minWidth: '2rem',
  width: '2rem',
  border: 'none',
  ':hover, :active': {
    backgroundColor: palette.red,
    color: palette.white
  }
});

type IncomingCallToastProps = {
  /** Caller's Name */
  callerName?: string;
  /** Alert Text. For example "incoming video call..." */
  alertText?: string;
  /** Caller's Avatar/Profile Image */
  avatar?: string;
  /** Provide a function that handles the call behavior when Accept Button is clicked */
  onClickAccept: () => void;
  /** Provide a function that handles the call behavior when Reject Button is clicked */
  onClickReject: () => void;
};

const IncomingCallToast = (props: IncomingCallToastProps): JSX.Element => {
  const { callerName, alertText, avatar, onClickAccept, onClickReject } = props;

  return (
    <Stack horizontal verticalAlign="center" className={incomingCallToastStyle}>
      <Stack horizontalAlign="start" className={incomingCallToastAvatarContainerStyle}>
        <Persona
          imageUrl={avatar}
          text={callerName}
          size={PersonaSize.size40}
          hidePersonaDetails={true}
          aria-label={callerName}
        />
      </Stack>

      <Stack grow={1} horizontalAlign="center" style={{ alignItems: 'flex-start', fontFamily: 'Segoe UI' }}>
        <Stack style={{ fontSize: '0.875rem' }}>
          <b>{callerName ?? 'No display name'}</b>
        </Stack>
        <Stack style={{ fontSize: '0.75rem' }}>
          <span>{alertText ?? 'Incoming call'}</span>
        </Stack>
      </Stack>

      <Stack horizontal tokens={{ childrenGap: 10 }}>
        <DefaultButton onClick={() => onClickReject()} className={incomingCallRejectButtonStyle}>
          <CallEnd20Filled />
        </DefaultButton>
        <DefaultButton onClick={() => onClickAccept()} className={incomingCallAcceptButtonStyle}>
          <Call20Filled />
        </DefaultButton>
      </Stack>
    </Stack>
  );
};
`;

const exampleIncomingCallModal = `
import { StreamMedia, VideoTile } from '@azure/communication-ui';
import { DefaultButton, Persona, PersonaSize, Stack, Dialog, DialogType, DialogFooter } from '@fluentui/react';
import { CallEnd20Filled, Call20Filled, Video20Filled, VideoOff20Filled } from '@fluentui/react-icons';
import { getTheme, mergeStyles } from '@fluentui/react';

const theme = getTheme();
const palette = theme.palette;

const incomingCallModalContainerStyle = {
  borderRadius: '0.75rem'
};

const incomingCallModalLocalPreviewStyle = mergeStyles({
  height: '10rem',
  background: palette.neutralLighterAlt,
  margin: '1.5rem 0',
  borderRadius: '0.25rem',
  '& video': {
    borderRadius: '0.25rem'
  }
});

interface IncomingCallModalProps extends IncomingCallToastProps {
  /** Text to the right of a Caller's Name */
  callerNameAlt?: string;
  /** A Caller's subtitle. Displayed right below the callers name */
  callerTitle?: string;
  /** Receiver's Name */
  localParticipantName?: string;
  /** If set to 'true', mirrors the local video preview of the receiver */
  localVideoInverted?: boolean;
  /** Toggle local video preview on or off */
  showLocalVideo?: boolean;
  /** Local Video Stream Element. An HTML Element containing a video stream. */
  localVideoStreamElement: HTMLElement | null;
  /** Provide a function that handles the call behavior when Video Toggle Button is clicked */
  onClickVideoToggle: () => void;
}

const IncomingCallModal = (props: WithTheme<IncomingCallModalProps>): JSX.Element => {
  const {
    alertText,
    avatar,
    callerName,
    callerNameAlt,
    callerTitle,
    localParticipantName,
    localVideoInverted,
    onClickAccept,
    onClickReject,
    onClickVideoToggle,
    showLocalVideo,
    localVideoStreamElement,
    theme
  } = props;
  const palette = theme.palette;
  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(false);
  const dialogContentProps = { type: DialogType.normal, title: alertText ?? 'Incoming Video Call' };

  const mediaGalleryLocalParticipant: JSX.Element = (
    <VideoTile
      isVideoReady={showLocalVideo}
      videoProvider={<StreamMedia videoStreamElement={localVideoStreamElement} />}
      avatarName={localParticipantName}
      invertVideo={localVideoInverted}
    />
  );

  return (
    <>
      <Dialog
        hidden={hideDialog}
        onDismiss={toggleHideDialog}
        dialogContentProps={dialogContentProps}
        modalProps={{
          isBlocking: true,
          styles: { main: incomingCallModalContainerStyle }
        }}
      >
        <Stack horizontal verticalAlign="center">
          <Stack horizontalAlign="start" style={{ marginRight: '0.5rem' }}>
            <Persona
              imageUrl={avatar}
              text={callerName}
              size={PersonaSize.size40}
              hidePersonaDetails={true}
              aria-label={callerName}
            />
          </Stack>
          <Stack grow={1} horizontalAlign="center" style={{ alignItems: 'flex-start' }}>
            <Stack style={{ fontSize: '0.875rem', color: palette.black, fontWeight: 'bold' }}>
              <span>
                {callerName ?? 'No display name'}
                {callerNameAlt ? (
                  <span style={{ opacity: 0.5, marginLeft: '0.2rem' }}> &bull; {callerNameAlt}</span>
                ) : null}
              </span>
            </Stack>
            <Stack style={{ fontSize: '0.75rem', color: palette.neutralDark }}>
              <span>{callerTitle ?? ''}</span>
            </Stack>
          </Stack>
        </Stack>

        {showLocalVideo ? (
          <Stack className={incomingCallModalLocalPreviewStyle}>{mediaGalleryLocalParticipant}</Stack>
        ) : null}

        <DialogFooter>
          <DefaultButton
            onClick={() => onClickVideoToggle()}
            style={{ background: palette.neutralLighterAlt, border: 'none' }}
          >
            {showLocalVideo ? <Video20Filled /> : <VideoOff20Filled />}
          </DefaultButton>

          <DefaultButton
            onClick={() => onClickAccept()}
            text="Accept"
            style={{ background: palette.green, border: 'none' }}
          />

          <DefaultButton
            onClick={() => onClickReject()}
            text="Decline"
            style={{ background: palette.redDark, border: 'none' }}
          />
        </DialogFooter>
      </Dialog>
    </>
  );
};
`;

export const getDocs: () => JSX.Element = () => {
  return (
    <>
      <Title>Incoming Call Alerts</Title>
      <Description>
        The Incoming Call Alert Components alert about an incoming call. They can render a local video preview, custom
        avatar image, caller name and incoming call alert text.
      </Description>
      <Heading>Incoming Call Modal</Heading>
      <Source code={exampleIncomingCallModal} />
      <Heading>Incoming Call Toast</Heading>
      <Source code={exampleIncomingCallToast} />
    </>
  );
};
