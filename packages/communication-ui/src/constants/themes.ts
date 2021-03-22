// © Microsoft Corporation. All rights reserved.

import { Theme, PartialTheme } from '@fluentui/react-theme-provider';

/**
 * Light theme designed ACS UI SDK components
 */
export const lightTheme: PartialTheme = {
  palette: {
    themePrimary: '#0078d4',
    themeLighterAlt: '#f3f9fd',
    themeLighter: '#d0e7f8',
    themeLight: '#a9d3f2',
    themeTertiary: '#5ca9e5',
    themeSecondary: '#1a86d9',
    themeDarkAlt: '#006cbe',
    themeDark: '#005ba1',
    themeDarker: '#004377',
    neutralLighterAlt: '#faf9f8',
    neutralLighter: '#f3f2f1',
    neutralLight: '#edebe9',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c6c4',
    neutralTertiary: '#a19f9d',
    neutralSecondary: '#605e5c',
    neutralPrimaryAlt: '#3b3a39',
    neutralPrimary: '#323130',
    neutralDark: '#201f1e',
    black: '#000000',
    white: '#ffffff'
  }
};

/**
 * Dark theme designed ACS UI SDK components
 */
export const darkTheme: PartialTheme = {
  palette: {
    themePrimary: '#2899F5',
    themeLighterAlt: '#f6fbff',
    themeLighter: '#dbeefd',
    themeLight: '#bcdffc',
    themeTertiary: '#7bc0f9',
    themeSecondary: '#40a4f6',
    themeDarkAlt: '#2389dc',
    themeDark: '#1e74ba',
    themeDarker: '#165589',
    neutralLighterAlt: '#262523',
    neutralLighter: '#2f2d2c',
    neutralLight: '#3d3b39',
    neutralQuaternaryAlt: '#464442',
    neutralQuaternary: '#4d4b49',
    neutralTertiaryAlt: '#6b6966',
    neutralTertiary: '#f6f6f5',
    neutralSecondary: '#f8f8f6',
    neutralPrimaryAlt: '#f9f9f8',
    neutralPrimary: '#f3f3f1',
    neutralDark: '#fcfcfb',
    black: '#fdfdfd',
    white: '#1b1a19'
  }
};

/**
 * Light theme name for ACS UI SDK components
 */
export const LIGHT = 'light';
/**
 * Dark theme name for ACS UI SDK components
 */
export const DARK = 'dark';

/**
 * Map of themes
 */
export type ThemeMap = {
  [key: string]: Theme | PartialTheme;
};

/**
 * Default themes map for ACS UI SDK components
 */
export const THEMES: ThemeMap = {
  [LIGHT]: lightTheme,
  [DARK]: darkTheme
};

const LocalStorageKey_Theme = 'AzureCommunicationUI_Theme';

/**
 * Function to get theme for ACS UI SDK components from LocalStorage
 */
export const getThemeFromLocalStorage = (scopeId: string): string | null =>
  window.localStorage.getItem(LocalStorageKey_Theme + '_' + scopeId);

/**
 * Function to save theme for ACS UI SDK components from LocalStorage
 */
export const saveThemeToLocalStorage = (theme: string, scopeId: string): void =>
  window.localStorage.setItem(LocalStorageKey_Theme + '_' + scopeId, theme);