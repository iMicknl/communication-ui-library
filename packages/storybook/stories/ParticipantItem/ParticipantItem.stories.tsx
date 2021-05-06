// © Microsoft Corporation. All rights reserved.

import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import { boolean, text } from '@storybook/addon-knobs';
import { ParticipantItem as ParticipantItemComponent } from '@azure/communication-react';
import { getDocs } from './ParticipantItemDocs';
import { Stack } from '@fluentui/react';
import { MicOffIcon, CallControlPresentNewIcon } from '@fluentui/react-northstar';
import { COMPONENT_FOLDER_PREFIX } from '../constants';

const onlyUnique = (value: string, index: number, self: string[]): boolean => {
  return self.indexOf(value) === index;
};

// This must be the only named export from this module, and must be named to match the storybook path suffix.
// This ensures that storybook hoists the story instead of creating a folder with a single entry.
export const ParticipantItem: () => JSX.Element = () => {
  const name = text('Name', 'Jim');
  const isScreenSharing = boolean('Is screen sharing', false);
  const isMuted = boolean('Is muted', false);
  const isYou = boolean('Is You', false);
  const menuItemsStr = text('Menu items (comma separated)', 'Mute, Remove');

  const menuItems = menuItemsStr
    .split(',')
    .map((menuItem) => menuItem.trim())
    .filter(onlyUnique)
    .map((menuItem) => {
      return {
        key: menuItem,
        text: menuItem
      };
    });

  const containerStyle = { width: '12rem' };

  return (
    <div style={containerStyle}>
      <ParticipantItemComponent
        name={name}
        isYou={isYou}
        menuItems={menuItems}
        onRenderIcon={() => (
          <Stack horizontal={true} tokens={{ childrenGap: '0.5rem' }}>
            {isScreenSharing && <CallControlPresentNewIcon size="small" />}
            {isMuted && <MicOffIcon size="small" />}
          </Stack>
        )}
      />
    </div>
  );
};

export default {
  title: `${COMPONENT_FOLDER_PREFIX}/Participant Item`,
  component: ParticipantItemComponent,
  parameters: {
    docs: {
      page: () => getDocs()
    }
  }
} as Meta;
