// © Microsoft Corporation. All rights reserved.

import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { FluentThemeProvider } from '../src/providers/FluentThemeProvider';
import { darkTheme, lightTheme } from './themes';
import { initializeIcons, loadTheme } from '@fluentui/react';
import { ThemeProvider } from '@fluentui/react-theme-provider';

// Removing `loadTheme({})` causes storybook declaration exception.
loadTheme({});
initializeIcons();

const centerStoryStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh'
};

export const parameters = {
  layout: 'fullscreen'
};

const withThemeProvider = (Story: any, context: any) => {
  const theme = context.globals.theme === 'light' ? lightTheme : darkTheme;
  const bgTheme = context.globals.theme === 'light' ? {} : {
    palette: {
      white: '#070707'
    }
  };
  return (
    <ThemeProvider applyTo="body" theme={bgTheme}>
      <FluentThemeProvider theme={theme}>
        <Story {...context} />
      </FluentThemeProvider>
    </ThemeProvider>
  );
};

const withCenterStory = (Story: any) => {
  return (
    <div style={centerStoryStyle}>
      <Story />
    </div>
  );
};

export const decorators = [withKnobs, withThemeProvider, withCenterStory];

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'paintbrush',
      items: ['light', 'dark']
    }
  }
};
