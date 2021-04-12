// © Microsoft Corporation. All rights reserved.
import { PrimaryButton } from '@fluentui/react';
import React from 'react';
import { buttonStyle, videoCameraIconStyle } from './styles/StartCallButton.styles';
import { Video20Filled } from '@fluentui/react-icons';

export interface StartCallButtonProps {
  onClickHandler: () => void;
  isDisabled: boolean;
}

const buttonText = 'Start call';

export const StartCallButton = (props: StartCallButtonProps): JSX.Element => {
  const { isDisabled, onClickHandler } = props;

  return (
    <PrimaryButton disabled={isDisabled} className={buttonStyle} onClick={onClickHandler}>
      <Video20Filled className={videoCameraIconStyle} />
      {buttonText}
    </PrimaryButton>
  );
};
