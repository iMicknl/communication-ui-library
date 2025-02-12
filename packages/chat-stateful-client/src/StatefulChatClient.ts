// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ChatClient, ChatClientOptions } from '@azure/communication-chat';
import { ChatContext } from './ChatContext';
import { ChatClientState } from './ChatClientState';
import { EventSubscriber } from './EventSubscriber';
import { chatThreadClientDeclaratify } from './StatefulChatThreadClient';
import { createDecoratedListThreads } from './iterators/createDecoratedListThreads';
import { CommunicationIdentifierKind, CommunicationTokenCredential } from '@azure/communication-common';

export interface StatefulChatClient extends ChatClient {
  getState(): ChatClientState;
  onStateChange(handler: (state: ChatClientState) => void): void;
  offStateChange(handler: (state: ChatClientState) => void): void;
}

export interface StatefulChatClientWithPrivateProps extends StatefulChatClient {
  context: ChatContext;
  eventSubscriber: EventSubscriber | undefined;
}

const proxyChatClient: ProxyHandler<ChatClient> = {
  get: function <P extends keyof StatefulChatClientWithPrivateProps>(
    chatClient: ChatClient,
    prop: P,
    receiver: StatefulChatClientWithPrivateProps
  ) {
    // skip receiver.context call to avoid recursive bugs
    if (prop === 'context') {
      return Reflect.get(chatClient, prop);
    }

    const context = receiver.context;
    switch (prop) {
      case 'createChatThread': {
        return async function (...args: Parameters<ChatClient['createChatThread']>) {
          const result = await chatClient.createChatThread(...args);
          const thread = result.chatThread;

          if (thread) {
            const [request] = args;
            context.createThread(thread.id, { topic: request.topic });
          }
          return result;
        };
      }
      case 'deleteChatThread': {
        return async function (...args: Parameters<ChatClient['deleteChatThread']>) {
          const result = await chatClient.deleteChatThread(...args);
          context.deleteThread(args[0]);
          return result;
        };
      }
      case 'listChatThreads': {
        return createDecoratedListThreads(chatClient, context);
      }
      case 'getChatThreadClient': {
        return function (...args: Parameters<ChatClient['getChatThreadClient']>) {
          const chatThreadClient = chatClient.getChatThreadClient(...args);
          // TODO(prprabhu): Ensure that thread properties are fetched into the ChatContext at this point.
          // A new thread might be created here, but the properties will never be fetched.
          return chatThreadClientDeclaratify(chatThreadClient, context);
        };
      }
      case 'startRealtimeNotifications': {
        return async function (...args: Parameters<ChatClient['startRealtimeNotifications']>) {
          const ret = await chatClient.startRealtimeNotifications(...args);
          if (!receiver.eventSubscriber) {
            receiver.eventSubscriber = new EventSubscriber(chatClient, context);
          }

          return ret;
        };
      }
      case 'stopRealtimeNotifications': {
        return async function (...args: Parameters<ChatClient['stopRealtimeNotifications']>) {
          const ret = await chatClient.stopRealtimeNotifications(...args);
          if (receiver.eventSubscriber) {
            receiver.eventSubscriber.unsubscribe();
            receiver.eventSubscriber = undefined;
          }

          return ret;
        };
      }
      default:
        return Reflect.get(chatClient, prop);
    }
  }
};

/**
 * Required arguments to construct the {@Link StatefulChatClient}.
 */
export type StatefulChatClientArgs = {
  userId: CommunicationIdentifierKind;
  displayName: string;
  endpoint: string;
  credential: CommunicationTokenCredential;
};

/**
 * Options to construct the {@Link StatefulChatClient} with.
 */
export type StatefulChatClientOptions = {
  /**
   * Options to construct the {@Link @azure/communication-chat#ChatClient} with.
   */
  chatClientOptions: ChatClientOptions;
  /**
   * Sets the max listeners limit of the 'stateChange' event. Defaults to the node.js EventEmitter.defaultMaxListeners
   * if not specified.
   */
  maxStateChangeListeners?: number;
};

/**
 * Creates a stateful ChatClient {@Link StatefulChatClient} by proxying ChatClient
 * {@Link @azure/communication-chat#ChatClient} with ProxyChatClient {@Link ProxyChatClient} which then allows access
 * to state in a declarative way.
 */
export const createStatefulChatClient = (
  args: StatefulChatClientArgs,
  options?: StatefulChatClientOptions
): StatefulChatClient => {
  const chatClient = new ChatClient(args.endpoint, args.credential, options?.chatClientOptions);
  const context = new ChatContext(options?.maxStateChangeListeners);
  let eventSubscriber: EventSubscriber;

  context.updateChatConfig(args.userId, args.displayName);

  const proxy = new Proxy(chatClient, proxyChatClient);

  Object.defineProperty(proxy, 'context', {
    configurable: false,
    get: () => context
  });

  Object.defineProperty(proxy, 'eventSubscriber', {
    configurable: false,
    get: () => eventSubscriber,
    set: (val: EventSubscriber) => {
      eventSubscriber = val;
    }
  });

  Object.defineProperty(proxy, 'getState', {
    configurable: false,
    value: () => context?.getState()
  });
  Object.defineProperty(proxy, 'onStateChange', {
    configurable: false,
    value: (handler: (state: ChatClientState) => void) => context?.onStateChange(handler)
  });
  Object.defineProperty(proxy, 'offStateChange', {
    configurable: false,
    value: (handler: (state: ChatClientState) => void) => context?.offStateChange(handler)
  });
  return proxy as StatefulChatClient;
};
