// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { boolean, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react/types-6-0';
import React from 'react';

import { EXAMPLES_FOLDER_PREFIX } from '../../constants';
import { Lobby as LobbyComponent } from './snippets/Lobby.snippet';
import { getDocs } from './TeamsInteropDocs';

const LobbyStory: () => JSX.Element = () => {
  const callStateText = text('Call State Text', "You're in the lobby");
  const callStateSubText = text('Call State Subtext', 'You should be admitted shortly');
  const isVideoReady = boolean('Show Video', false);

  return (
    <LobbyComponent isVideoReady={isVideoReady} callStateText={callStateText} callStateSubText={callStateSubText} />
  );
};

export const Lobby = LobbyStory.bind({});

export default {
  id: `${EXAMPLES_FOLDER_PREFIX}-teamsinterop-lobby`,
  title: `${EXAMPLES_FOLDER_PREFIX}/Teams Interop/Lobby`,
  component: Lobby,
  parameters: {
    docs: {
      page: () => getDocs()
    },
    knobs: {
      escapeHTML: false
    }
  }
} as Meta;
