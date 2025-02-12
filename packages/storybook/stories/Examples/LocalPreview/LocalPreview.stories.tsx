// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Title, Heading, Description, Canvas } from '@storybook/addon-docs/blocks';
import { boolean } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react/types-6-0';
import React from 'react';

import { EXAMPLES_FOLDER_PREFIX } from '../../constants';
import { LocalPreviewExample } from './snippets/LocalPreviewExample.snippet';

const LocalPreviewExampleText = require('!!raw-loader!./snippets/LocalPreviewExample.snippet.tsx').default;

const getDocs: () => JSX.Element = () => {
  return (
    <>
      <Title>Local Preview</Title>

      <Heading>Basic example</Heading>
      <Description>
        To build a local preview, we recommend using the Fluent UI
        [Stack](https://developer.microsoft.com/en-us/fluentui#/controls/web/stack) as a container as shown in the code
        below. For enabling and disabling the camera or microphone we suggest using the
        [Toggle](https://developer.microsoft.com/en-us/fluentui#/controls/web/toggle) component. The area for showing
        your local preview is a [VideoTile](./?path=/docs/ui-components-videotile--video-tile) which can also be used in
        our video grid layouts.
      </Description>
      <Description>
        Note: In the code example, all `%` characters were replaced by their unicode value `\u0025` due to URI malformed
        issue when loading the storybook snippets
      </Description>
      <Canvas mdxSource={LocalPreviewExampleText}>
        <div style={{ height: '17.188rem' }}>
          <LocalPreviewExample isVideoAvailable={true} isCameraEnabled={true} isMicrophoneEnabled={true} />
        </div>
      </Canvas>
    </>
  );
};

const LocalPreviewStory: () => JSX.Element = () => {
  const isVideoAvailable = boolean('Is video available', true);
  const isCameraEnabled = boolean('Is camera available', true);
  const isMicrophoneEnabled = boolean('Is microphone available', true);

  return (
    <LocalPreviewExample
      isVideoAvailable={isVideoAvailable}
      isCameraEnabled={isCameraEnabled}
      isMicrophoneEnabled={isMicrophoneEnabled}
    />
  );
};

export const LocalPreview = LocalPreviewStory.bind({});

export default {
  id: `${EXAMPLES_FOLDER_PREFIX}-localpreview`,
  title: `${EXAMPLES_FOLDER_PREFIX}/Local Preview`,
  component: LocalPreview,
  parameters: {
    docs: {
      page: () => getDocs()
    }
  }
} as Meta;
