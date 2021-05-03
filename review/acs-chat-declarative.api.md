## API Report File for "@azure/acs-chat-declarative"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ChatClient } from '@azure/communication-chat';
import { ChatMessage } from '@azure/communication-chat';
import { ChatMessageReadReceipt } from '@azure/communication-chat';
import { ChatParticipant } from '@azure/communication-chat';
import { ChatThreadClient } from '@azure/communication-chat';
import { ChatThreadInfo } from '@azure/communication-chat';
import { TypingIndicatorReceivedEvent } from '@azure/communication-signaling';

// @public (undocumented)
export const chatClientDeclaratify: (chatClient: ChatClient, chatConfig: ChatConfig) => DeclarativeChatClient;

// @public (undocumented)
export type ChatClientState = {
    userId: string;
    displayName: string;
    threads: Map<string, ChatThreadClientState>;
};

// @public (undocumented)
export type ChatConfig = {
    userId: string;
    displayName: string;
};

// @public (undocumented)
export class ChatContext {
    // (undocumented)
    addReadReceipt(threadId: string, readReceipt: ReadReceipt): void;
    // (undocumented)
    addTypingIndicator(threadId: string, typingIndicator: TypingIndicator): void;
    // (undocumented)
    batch(batchFunc: () => void): void;
    // (undocumented)
    createThread(threadId: string, threadInfo?: ChatThreadInfo): void;
    // (undocumented)
    createThreadIfNotExist(threadId: string, thread?: ChatThreadInfo): boolean;
    // (undocumented)
    deleteLocalMessage(threadId: string, localId: string): boolean;
    // (undocumented)
    deleteMessage(threadId: string, id: string): void;
    // (undocumented)
    deleteParticipant(threadId: string, participantId: string): void;
    // (undocumented)
    deleteParticipants(threadId: string, participantIds: string[]): void;
    // (undocumented)
    deleteThread(threadId: string): void;
    // (undocumented)
    getState(): ChatClientState;
    // (undocumented)
    offStateChange(handler: (state: ChatClientState) => void): void;
    // (undocumented)
    onStateChange(handler: (state: ChatClientState) => void): void;
    // (undocumented)
    setChatMessage(threadId: string, message: ChatMessageWithStatus): void;
    // (undocumented)
    setChatMessages(threadId: string, messages: Map<string, ChatMessageWithStatus>): void;
    // (undocumented)
    setParticipant(threadId: string, participant: ChatParticipant): void;
    // (undocumented)
    setParticipants(threadId: string, participants: ChatParticipant[]): void;
    // (undocumented)
    setState(state: ChatClientState): void;
    // (undocumented)
    setThread(threadId: string, threadState: ChatThreadClientState): void;
    // (undocumented)
    updateChatConfig(config: ChatConfig): void;
    // (undocumented)
    updateChatMessageContent(threadId: string, messagesId: string, content: string | undefined): void;
    // (undocumented)
    updateThread(threadId: string, threadInfo?: ChatThreadInfo): void;
    // (undocumented)
    updateThreadTopic(threadId: string, topic?: string): void;
}

// @public (undocumented)
export type ChatMessageWithStatus = ChatMessage & {
    clientMessageId?: string;
    status: MessageStatus;
};

// @public (undocumented)
export const chatThreadClientDeclaratify: (chatThreadClient: ChatThreadClient, context: ChatContext) => ChatThreadClient;

// @public (undocumented)
export type ChatThreadClientState = {
    chatMessages: Map<string, ChatMessageWithStatus>;
    participants: Map<string, ChatParticipant>;
    threadId: string;
    threadInfo?: ChatThreadInfo;
    coolPeriod?: Date;
    getThreadMembersError?: boolean;
    updateThreadMembersError?: boolean;
    failedMessageIds: string[];
    readReceipts: ReadReceipt[];
    typingIndicators: TypingIndicator[];
    latestReadTime: Date;
};

// @public (undocumented)
export interface DeclarativeChatClient extends ChatClient {
    // (undocumented)
    offStateChange(handler: (state: ChatClientState) => void): void;
    // (undocumented)
    onStateChange(handler: (state: ChatClientState) => void): void;
    // (undocumented)
    state: ChatClientState;
}

// @public (undocumented)
export type MessageStatus = 'delivered' | 'sending' | 'seen' | 'failed';

// @public (undocumented)
export type ReadReceipt = ChatMessageReadReceipt;

// @public (undocumented)
export type TypingIndicator = Omit<TypingIndicatorReceivedEvent, 'receivedOn'> & {
    receivedOn: Date;
};


// (No @packageDocumentation comment for this package)

```