// © Microsoft Corporation. All rights reserved.

import { getTheme, mergeStyles } from '@fluentui/react';

const palette = getTheme().palette;

export const videoCameraIconStyle = mergeStyles({
  marginRight: '0.375rem',
  fill: palette.white
});

export const buttonStyle = mergeStyles({
  fontWeight: 600,
  fontSize: '0.875rem', // 14px
  height: '2.75rem',
  width: '100%',
  marginTop: '2.125rem',
  maxWidth: '18.75rem',
  minWidth: '12.5rem'
});
