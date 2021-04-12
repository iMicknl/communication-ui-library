// © Microsoft Corporation. All rights reserved.

import { DefaultButton, Separator, Stack } from '@fluentui/react';
import React from 'react';
import { Settings20Filled, Settings20Regular, People20Filled, People20Regular } from '@fluentui/react-icons';
import {
  controlButtonStyles,
  headerCenteredContainer,
  headerContainer,
  itemSelectedStyle,
  separatorContainerStyle,
  separatorStyles
} from './styles/Header.styles';

import { MINI_HEADER_WINDOW_WIDTH, GroupCallControlBarComponent } from '@azure/communication-ui';
import { CommandPanelTypes } from './CommandPanel';

export interface HeaderProps {
  selectedPane: CommandPanelTypes;
  setSelectedPane(selectedPane: CommandPanelTypes): void;
  endCallHandler(): void;
  screenWidth: number;
}

export const Header = (props: HeaderProps): JSX.Element => {
  const togglePeople = (selectedPane: string, setSelectedPane: (pane: CommandPanelTypes) => void): void => {
    return selectedPane !== CommandPanelTypes.People
      ? setSelectedPane(CommandPanelTypes.People)
      : setSelectedPane(CommandPanelTypes.None);
  };

  const toggleOptions = (selectedPane: string, setSelectedPane: (pane: CommandPanelTypes) => void): void => {
    return selectedPane !== CommandPanelTypes.Settings
      ? setSelectedPane(CommandPanelTypes.Settings)
      : setSelectedPane(CommandPanelTypes.None);
  };

  return (
    <Stack
      id="header"
      className={props.screenWidth > MINI_HEADER_WINDOW_WIDTH ? headerContainer : headerCenteredContainer}
    >
      <DefaultButton
        onRenderIcon={() => {
          return props.selectedPane === CommandPanelTypes.Settings ? (
            <Settings20Filled className={itemSelectedStyle} />
          ) : (
            <Settings20Regular />
          );
        }}
        onClick={() => {
          toggleOptions(props.selectedPane, props.setSelectedPane);
        }}
        styles={controlButtonStyles}
      />
      <DefaultButton
        onRenderIcon={() => {
          return props.selectedPane === CommandPanelTypes.People ? (
            <People20Filled className={itemSelectedStyle} />
          ) : (
            <People20Regular />
          );
        }}
        onClick={() => {
          togglePeople(props.selectedPane, props.setSelectedPane);
        }}
        styles={controlButtonStyles}
      />
      {props.screenWidth > MINI_HEADER_WINDOW_WIDTH && (
        <div className={separatorContainerStyle}>
          <Separator styles={separatorStyles} vertical={true} />
        </div>
      )}
      <GroupCallControlBarComponent
        onEndCallClick={props.endCallHandler}
        compressedMode={props.screenWidth <= MINI_HEADER_WINDOW_WIDTH}
      />
    </Stack>
  );
};
