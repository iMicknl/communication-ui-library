// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ReactElement } from 'react';
import { Common, fromFlatCommunicationIdentifier } from 'acs-ui-common';
import { StatefulChatClient } from 'chat-stateful-client';
import { ChatThreadClient } from '@azure/communication-chat';
import memoizeOne from 'memoize-one';

// @ts-ignore
import { CommonProperties } from 'acs-ui-common';

export type DefaultChatHandlers = {
  onSendMessage: (content: string) => Promise<void>;
  onMessageSeen: (chatMessageId: string) => Promise<void>;
  onTyping: () => Promise<void>;
  onParticipantRemove: (userId: string) => Promise<void>;
  updateThreadTopicName: (topicName: string) => Promise<void>;
  onLoadPreviousChatMessages: (messagesToLoad: number) => Promise<boolean>;
};

// Keep all these handlers the same instance(unless client changed) to avoid re-render
export const createDefaultChatHandlers = memoizeOne(
  (chatClient: StatefulChatClient, chatThreadClient: ChatThreadClient): DefaultChatHandlers => {
    const messageIterator = chatThreadClient.listMessages();
    return {
      onSendMessage: async (content: string) => {
        const sendMessageRequest = {
          content,
          senderDisplayName: chatClient.getState().displayName
        };
        await chatThreadClient.sendMessage(sendMessageRequest);
      },
      // This handler is designed for chatThread to consume
      onMessageSeen: async (chatMessageId: string) => {
        await chatThreadClient.sendReadReceipt({ chatMessageId });
      },
      onTyping: async () => {
        await chatThreadClient.sendTypingNotification();
      },
      onParticipantRemove: async (userId: string) => {
        await chatThreadClient.removeParticipant(fromFlatCommunicationIdentifier(userId));
      },
      updateThreadTopicName: async (topicName: string) => {
        await chatThreadClient.updateTopic(topicName);
      },
      onLoadPreviousChatMessages: async (messagesToLoad: number) => {
        let remainingMessagesToGet = messagesToLoad;
        let isAllChatMessagesLoaded = false;
        while (remainingMessagesToGet >= 1) {
          const message = await messageIterator.next();
          if (message.value?.type && message.value.type === 'text') remainingMessagesToGet--;
          // We have traversed all messages in this thread
          if (message.done) {
            isAllChatMessagesLoaded = true;
            break;
          }
        }

        return isAllChatMessagesLoaded;
      }
    };
  }
);

// These could be shared functions between Chat and Calling
export const defaultHandlerCreator = (chatClient: StatefulChatClient, chatThreadClient: ChatThreadClient) => <Props>(
  _: (props: Props) => ReactElement | null
): Common<DefaultChatHandlers, Props> => {
  return createDefaultChatHandlers(chatClient, chatThreadClient);
};

export const createDefaultChatHandlersForComponent = <Props>(
  chatClient: StatefulChatClient,
  chatThreadClient: ChatThreadClient,
  _: (props: Props) => ReactElement | null
): Common<DefaultChatHandlers, Props> => {
  return createDefaultChatHandlers(chatClient, chatThreadClient);
};
