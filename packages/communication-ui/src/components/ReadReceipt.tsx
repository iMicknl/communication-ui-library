// © Microsoft Corporation. All rights reserved.

import React from 'react';
import { mergeStyles, TooltipHost } from '@fluentui/react';
import { MessageStatus } from '../types/ChatMessage';
import { readReceiptIconErrorStyle, readReceiptIconMessageStyle } from './styles/ReadReceipt.styles';
import {
  Circle20Regular,
  CheckmarkCircle20Regular,
  ErrorCircle20Regular,
  EyeShow20Filled
} from '@fluentui/react-icons';
import { BaseCustomStylesProps } from '../types';

/**
 * Props for ReadReceipt component
 */
export interface ReadReceiptProps {
  /** Message status that determines the read receipt icon to show. */
  messageStatus: MessageStatus;
  /** Text to display in the delivered read receipt icon tooltip. */
  deliveredTooltipText?: string;
  /** Text to display in the seen read receipt icon tooltip. */
  seenTooltipText?: string;
  /** Text to display in the sending read receipt icon tooltip. */
  sendingTooltipText?: string;
  /** Text to display in the failed read receipt icon tooltip. */
  failedToSendTooltipText?: string;
  /**
   * Allows users to pass in an object contains custom CSS styles.
   * @Example
   * ```
   * <ReadReceipt styles={{ root: { background: 'blue' } }} />
   * ```
   */
  styles?: BaseCustomStylesProps;
}

/**
 * ReadReceipt component.
 */
export const ReadReceipt = (props: ReadReceiptProps): JSX.Element => {
  const {
    messageStatus,
    deliveredTooltipText = 'Sent',
    seenTooltipText = 'Seen',
    sendingTooltipText = 'Sending',
    failedToSendTooltipText = 'Failed to send',
    styles
  } = props;

  switch (messageStatus) {
    case 'failed':
      return (
        <TooltipHost content={failedToSendTooltipText}>
          <ErrorCircle20Regular className={mergeStyles(readReceiptIconErrorStyle, styles?.root)} />
        </TooltipHost>
      );
    case 'sending':
      return (
        <TooltipHost content={sendingTooltipText}>
          <Circle20Regular className={mergeStyles(readReceiptIconMessageStyle, styles?.root)} />
        </TooltipHost>
      );
    case 'seen':
      return (
        <TooltipHost content={seenTooltipText}>
          <EyeShow20Filled className={mergeStyles(styles?.root)} />
        </TooltipHost>
      );
    case 'delivered':
      return (
        <TooltipHost content={deliveredTooltipText}>
          <CheckmarkCircle20Regular className={mergeStyles(readReceiptIconMessageStyle, styles?.root)} />
        </TooltipHost>
      );
    default:
      return <></>;
  }
};
