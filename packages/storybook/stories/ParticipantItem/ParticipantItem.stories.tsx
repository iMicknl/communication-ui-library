// © Microsoft Corporation. All rights reserved.

import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import { boolean, text } from '@storybook/addon-knobs';
import { ParticipantItem } from '@azure/communication-ui';
import { getDocs } from './ParticipantItemDocs';
import { Stack, mergeStyles } from '@fluentui/react';
import { MicOff20Filled, ShareScreenStart20Filled } from '@fluentui/react-icons';
import { COMPONENT_FOLDER_PREFIX } from '../constants';

const onlyUnique = (value: string, index: number, self: string[]): boolean => {
  return self.indexOf(value) === index;
};

export const ParticipantItemComponent: () => JSX.Element = () => {
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
  const iconStyles = mergeStyles({ height: '0.875rem' });

  return (
    <div style={containerStyle}>
      <ParticipantItem
        name={name}
        isYou={isYou}
        menuItems={menuItems}
        onRenderIcon={() => (
          <Stack horizontal={true} tokens={{ childrenGap: '0.5rem' }}>
            {isScreenSharing && <ShareScreenStart20Filled className={iconStyles} />}
            {isMuted && <MicOff20Filled className={iconStyles} />}
          </Stack>
        )}
      />
    </div>
  );
};

export default {
  title: `${COMPONENT_FOLDER_PREFIX}/ParticipantItem`,
  component: ParticipantItem,
  parameters: {
    docs: {
      page: () => getDocs()
    }
  }
} as Meta;
