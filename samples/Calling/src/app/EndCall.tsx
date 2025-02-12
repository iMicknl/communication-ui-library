// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import React from 'react';
import { DefaultButton, PrimaryButton, Stack, Link } from '@fluentui/react';
import { VideoCameraEmphasisIcon } from '@fluentui/react-icons-northstar';
import {
  endCallContainerStyle,
  endCallTitleStyle,
  buttonStyle,
  mainStackTokens,
  buttonsStackTokens,
  upperStackTokens,
  videoCameraIconStyle,
  bottomStackFooterStyle
} from './styles/EndCall.styles';

export interface EndCallProps {
  rejoinHandler(): void;
  homeHandler(): void;
}

export default function EndCall(props: EndCallProps): JSX.Element {
  const leftCall = 'You left the call';
  const goHomePage = 'Go to homepage';
  const rejoinCall = 'Rejoin call';

  const feedbackLink =
    'https://docs.microsoft.com/en-us/answers/search.html?c=&includeChildren=&f=&type=question+OR+idea+OR+kbentry+OR+answer+OR+topic+OR+user&redirect=search%2Fsearch&sort=relevance&q=azure-communication-services';

  return (
    <Stack verticalAlign="center" tokens={mainStackTokens} className={endCallContainerStyle}>
      <Stack tokens={upperStackTokens}>
        <div className={endCallTitleStyle}>{leftCall}</div>
        <Stack horizontal tokens={buttonsStackTokens}>
          <PrimaryButton className={buttonStyle} onClick={props.rejoinHandler}>
            <VideoCameraEmphasisIcon className={videoCameraIconStyle} size="medium" />
            {rejoinCall}
          </PrimaryButton>
          <DefaultButton className={buttonStyle} onClick={props.homeHandler}>
            {goHomePage}
          </DefaultButton>
        </Stack>
        <div className={bottomStackFooterStyle}>
          <Link href={feedbackLink}>Give Feedback</Link>&nbsp;on this sample app at Microsoft Q&amp;A
        </div>
      </Stack>
    </Stack>
  );
}
