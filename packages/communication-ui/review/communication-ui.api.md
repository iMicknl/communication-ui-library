## API Report File for "@azure/communication-ui"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AbortSignalLike } from '@azure/core-http';
import { AcceptCallOptions } from '@azure/communication-calling';
import { AudioDeviceInfo } from '@azure/communication-calling';
import { AzureCommunicationUserCredential } from '@azure/communication-common';
import { Call } from '@azure/communication-calling';
import { CallAgent } from '@azure/communication-calling';
import { CallClient } from '@azure/communication-calling';
import { CallClientOptions } from '@azure/communication-calling';
import { CallingApplication } from '@azure/communication-common';
import { CallState } from '@azure/communication-calling';
import { ChatClient } from '@azure/communication-chat';
import { ChatMessage as ChatMessage_2 } from '@azure/communication-chat';
import { ChatMessageReceivedEvent } from '@azure/communication-signaling';
import { ChatThread } from '@azure/communication-chat';
import { ChatThreadClient } from '@azure/communication-chat';
import { ChatThreadMember as ChatThreadMember_2 } from '@azure/communication-chat';
import { CommunicationUser } from '@azure/communication-signaling';
import { CommunicationUser as CommunicationUser_2 } from '@azure/communication-common';
import { DeviceManager } from '@azure/communication-calling';
import { Dispatch } from 'react';
import { ErrorInfo } from 'react';
import { GroupCallContext } from '@azure/communication-calling';
import { HangupCallOptions } from '@azure/communication-calling';
import { IContextualMenuItem } from '@fluentui/react';
import { IContextualMenuProps } from '@fluentui/react';
import { IIconProps } from '@fluentui/react';
import { IStyle } from '@fluentui/react';
import { JoinCallOptions } from '@azure/communication-calling';
import { LocalVideoStream } from '@azure/communication-calling';
import { MouseEventHandler } from 'react';
import { PartialTheme } from '@fluentui/react-theme-provider';
import { PermissionState as PermissionState_2 } from '@azure/communication-calling';
import { PermissionType } from '@azure/communication-calling';
import { PersonaPresence } from '@fluentui/react';
import { PhoneNumber } from '@azure/communication-common';
import { default as React_2 } from 'react';
import { ReactElement } from 'react';
import { ReadReceipt } from '@azure/communication-chat';
import { RemoteParticipant } from '@azure/communication-calling';
import { RemoteVideoStream } from '@azure/communication-calling';
import { RendererOptions } from '@azure/communication-calling';
import { RestListMessagesOptions } from '@azure/communication-chat';
import { ScalingMode } from '@azure/communication-calling';
import { SetStateAction } from 'react';
import { SizeValue } from '@fluentui/react-northstar/dist/commonjs/utils/commonPropInterfaces';
import { Theme } from '@fluentui/react-theme-provider';
import { UnknownIdentifier } from '@azure/communication-common';
import { VideoDeviceInfo } from '@azure/communication-calling';

// Warning: (ae-forgotten-export) The symbol "CallControlButtonProps" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export const answerButtonProps: CallControlButtonProps;

// @public (undocumented)
export const areStreamsEqual: (prevStream: LocalVideoStream, newStream: LocalVideoStream) => boolean;

// @public (undocumented)
export const audioButtonProps: CallControlButtonProps;

// @public (undocumented)
export type CallContainerProps = {
    isCallInitialized: boolean;
    callState: CallState;
    screenShareStream: ParticipantStream | undefined;
    isLocalScreenSharingOn: boolean;
    leaveCall: (hangupCallOptions: HangupCallOptions) => Promise<void>;
};

// @public (undocumented)
export const CallContext: React_2.Context<CallContextType | undefined>;

// @public (undocumented)
export type CallContextType = {
    call: Call | undefined;
    setCall: Dispatch<SetStateAction<Call | undefined>>;
    callState: CallState;
    setCallState: Dispatch<SetStateAction<CallState>>;
    participants: RemoteParticipant[];
    setParticipants: Dispatch<SetStateAction<RemoteParticipant[]>>;
    screenShareStream: ParticipantStream | undefined;
    setScreenShareStream: Dispatch<SetStateAction<ParticipantStream | undefined>>;
    displayName: string;
    setDisplayName: Dispatch<SetStateAction<string>>;
    isMicrophoneEnabled: boolean;
    setIsMicrophoneEnabled: Dispatch<SetStateAction<boolean>>;
    localScreenShareActive: boolean;
    setLocalScreenShare: Dispatch<SetStateAction<boolean>>;
    localVideoStream: LocalVideoStream | undefined;
    setLocalVideoStream: Dispatch<SetStateAction<LocalVideoStream | undefined>>;
    isLocalVideoRendererBusy: boolean;
    setLocalVideoRendererBusy: Dispatch<SetStateAction<boolean>>;
    isLocalVideoOn: boolean;
    setLocalVideoOn: Dispatch<SetStateAction<boolean>>;
};

// @public (undocumented)
export const CallingContext: React_2.Context<CallingContextType | undefined>;

// @public (undocumented)
export type CallingContextType = {
    userId: string;
    setUserId: Dispatch<SetStateAction<string>>;
    callClient: CallClient;
    setCallClient: Dispatch<SetStateAction<CallClient>>;
    callAgent: CallAgent | undefined;
    setCallAgent: Dispatch<SetStateAction<CallAgent | undefined>>;
    deviceManager: DeviceManager | undefined;
    setDeviceManager: Dispatch<SetStateAction<DeviceManager | undefined>>;
    audioDevicePermission: PermissionState_2;
    setAudioDevicePermission: Dispatch<SetStateAction<PermissionState_2>>;
    videoDevicePermission: PermissionState_2;
    setVideoDevicePermission: Dispatch<SetStateAction<PermissionState_2>>;
    videoDeviceInfo: VideoDeviceInfo | undefined;
    setVideoDeviceInfo: Dispatch<SetStateAction<VideoDeviceInfo | undefined>>;
    videoDeviceList: VideoDeviceInfo[];
    setVideoDeviceList: Dispatch<SetStateAction<VideoDeviceInfo[]>>;
    audioDeviceInfo: AudioDeviceInfo | undefined;
    setAudioDeviceInfo: Dispatch<SetStateAction<AudioDeviceInfo | undefined>>;
    audioDeviceList: AudioDeviceInfo[];
    setAudioDeviceList: Dispatch<SetStateAction<AudioDeviceInfo[]>>;
};

// Warning: (ae-forgotten-export) The symbol "CallingProviderProps" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export const CallingProvider: (props: CallingProviderProps & ErrorHandlingProps) => JSX.Element;

// @public (undocumented)
export interface CallProvider {
    // (undocumented)
    children: React_2.ReactNode;
    // (undocumented)
    displayName: string;
}

// @public (undocumented)
export const CallProvider: (props: CallProvider & ErrorHandlingProps) => JSX.Element;

// @public (undocumented)
export type ChatConfig = {
    token: string;
    displayName: string;
    endpointUrl: string;
    threadId: string;
};

// @public (undocumented)
export const ChatContext: React_2.Context<ChatContextType | undefined>;

// @public (undocumented)
export type ChatContextType = {
    chatClient?: ChatClient;
    setChatClient: Dispatch<SetStateAction<ChatClient>>;
    userId: string;
    setUserId: Dispatch<SetStateAction<string>>;
    displayName: string;
    setDisplayName: Dispatch<SetStateAction<string>>;
};

// @public (undocumented)
export type ChatMessage = {
    messageId?: string;
    content?: string;
    createdOn?: Date;
    senderId?: string;
    senderDisplayName?: string;
    status: MessageStatus;
};

// Warning: (ae-forgotten-export) The symbol "ChatProviderProps" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export const ChatProvider: (props: ChatProviderProps & ErrorHandlingProps) => JSX.Element;

// @public
export type ChatThreadMember = {
    userId: string;
    displayName?: string;
};

// @public (undocumented)
export type ChatThreadMemberPropsFromContext = {
    threadMembers: ChatThreadMember[];
    removeThreadMember?: (userId: string) => Promise<void>;
};

// @public (undocumented)
export type ChatThreadPropsFromContext = {
    userId: string;
    thread: ChatThread | undefined;
    sendTypingNotification: () => void;
    getThread: () => void;
    updateThreadTopicName: (topicName: string) => Promise<boolean>;
};

// Warning: (ae-forgotten-export) The symbol "ChatThreadProviderProps" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export const ChatThreadProvider: (props: ChatThreadProviderProps & ErrorHandlingProps) => JSX.Element;

// @public (undocumented)
export type ChatTopicPropsFromContext = {
    existsTopicName: boolean | undefined;
    topicName: string;
    updateThreadTopicName: (topicName: string) => Promise<boolean>;
};

// @public (undocumented)
export const CLICK_TO_LOAD_MORE_MESSAGES = "click to load more messages...";

// @public
export class CommunicationUiError extends Error implements CommunicationUiErrorInfo {
    constructor(args: CommunicationUiErrorArgs);
    // (undocumented)
    get code(): CommunicationUiErrorCode;
    // (undocumented)
    get errorInfo(): ErrorInfo | undefined;
    set errorInfo(errorInfo: ErrorInfo | undefined);
    // (undocumented)
    get originalError(): Error | undefined;
    // (undocumented)
    get severity(): CommunicationUiErrorSeverity;
    set severity(severity: CommunicationUiErrorSeverity);
    }

// @public (undocumented)
export interface CommunicationUiErrorArgs {
    // (undocumented)
    code?: CommunicationUiErrorCode;
    // (undocumented)
    error?: Error;
    // (undocumented)
    errorInfo?: ErrorInfo;
    // (undocumented)
    message?: string;
    // (undocumented)
    severity?: CommunicationUiErrorSeverity;
}

// @public (undocumented)
export enum CommunicationUiErrorCode {
    // (undocumented)
    ASK_PERMISSIONS_ERROR = 21,
    // (undocumented)
    CONFIGURATION_ERROR = 1,
    // (undocumented)
    CREATE_CALL_AGENT_ERROR = 31,
    // (undocumented)
    CREATE_CHAT_THREAD_CLIENT_ERROR = 10,
    // (undocumented)
    DISPOSE_CALL_AGENT_ERROR = 32,
    // (undocumented)
    FORBIDDEN_ERROR = 3,
    // (undocumented)
    GET_MESSAGE_ERROR = 14,
    // (undocumented)
    GET_MESSAGES_ERROR = 16,
    // (undocumented)
    GET_READ_RECEIPT_ERROR = 12,
    // (undocumented)
    GET_THREAD_ERROR = 19,
    // (undocumented)
    INTERNAL_SERVER_ERROR = 6,
    // (undocumented)
    JOIN_CALL_ERROR = 33,
    // (undocumented)
    LEAVE_CALL_ERROR = 34,
    // (undocumented)
    MESSAGE_EXCEEDED_RETRY_ERROR = 8,
    // (undocumented)
    MUTE_ERROR = 24,
    // (undocumented)
    QUERY_PERMISSIONS_ERROR = 20,
    // (undocumented)
    REMOVE_THREAD_MEMBER_ERROR = 17,
    // (undocumented)
    RENDER_LOCAL_VIDEO_ERROR = 30,
    // (undocumented)
    RENDER_REMOTE_VIDEO_ERROR = 29,
    // (undocumented)
    SEND_MESSAGE_ERROR = 13,
    // (undocumented)
    SEND_READ_RECEIPT_ERROR = 11,
    // (undocumented)
    SEND_TYPING_NOTIFICATION_ERROR = 15,
    // (undocumented)
    SERVICE_UNAVAILABLE_ERROR = 5,
    // (undocumented)
    START_REALTIME_NOTIFICATIONS_ERROR = 9,
    // (undocumented)
    START_SCREEN_SHARE_ERROR = 27,
    // (undocumented)
    START_VIDEO_ERROR = 25,
    // (undocumented)
    STOP_SCREEN_SHARE_ERROR = 28,
    // (undocumented)
    STOP_VIDEO_ERROR = 26,
    // (undocumented)
    SWITCH_VIDEO_SOURCE_ERROR = 22,
    // (undocumented)
    TOO_MANY_REQUESTS_ERROR = 4,
    // (undocumented)
    UNAUTHORIZED_ERROR = 2,
    // (undocumented)
    UNKNOWN_ERROR = 0,
    // (undocumented)
    UNKNOWN_STATUS_CODE_ERROR = 7,
    // (undocumented)
    UNMUTE_ERROR = 23,
    // (undocumented)
    UPDATE_THREAD_ERROR = 18
}

// @public (undocumented)
export const CommunicationUiErrorFromError: (error: any) => CommunicationUiError;

// @public (undocumented)
export interface CommunicationUiErrorInfo {
    // (undocumented)
    code: CommunicationUiErrorCode;
    // (undocumented)
    errorInfo: ErrorInfo | undefined;
    // (undocumented)
    message: string;
    // (undocumented)
    originalError: Error | undefined;
    // (undocumented)
    severity: CommunicationUiErrorSeverity;
}

// @public
export enum CommunicationUiErrorSeverity {
    // (undocumented)
    ERROR = "Error",
    // (undocumented)
    IGNORE = "Ignore",
    // (undocumented)
    INFO = "Info",
    // (undocumented)
    WARNING = "Warning"
}

// @public (undocumented)
export const compareMessages: (firstMessage: {
    createdOn?: Date;
}, secondMessage: {
    createdOn?: Date;
}) => number;

// @public (undocumented)
export const CONNECTED = "Connected";

// Warning: (ae-forgotten-export) The symbol "UnionToIntersection" needs to be exported by the entry point index.d.ts
// Warning: (ae-forgotten-export) The symbol "UnionTypesOfTuple" needs to be exported by the entry point index.d.ts
// Warning: (ae-forgotten-export) The symbol "ContextMapFuncReturns" needs to be exported by the entry point index.d.ts
// Warning: (ae-forgotten-export) The symbol "ContextMapFuncArgs" needs to be exported by the entry point index.d.ts
//
// @public
export const connectFuncsToContext: <FuncTypes extends ((ownProps: any) => any)[], PropsForComponent extends UnionToIntersection<UnionTypesOfTuple<ContextMapFuncReturns<FuncTypes>>>>(ElementToConnect: (props: PropsForComponent) => ReactElement | null, ...mapToComponentFuncs: FuncTypes) => (props: UnionToIntersection<UnionTypesOfTuple<ContextMapFuncArgs<FuncTypes>>> & Pick<PropsForComponent, Exclude<keyof PropsForComponent, keyof UnionToIntersection<UnionTypesOfTuple<ContextMapFuncReturns<FuncTypes>>>>>) => ReactElement;

// @public (undocumented)
export const CONNECTING = "Connecting";

// @public (undocumented)
export const CONTROL_BAR_LAYOUTS: readonly ["horizontal", "vertical", "dockedTop", "dockedBottom", "dockedLeft", "dockedRight", "floatingTop", "floatingBottom", "floatingLeft", "floatingRight"];

// Warning: (ae-forgotten-export) The symbol "ControlBarProps" needs to be exported by the entry point index.d.ts
//
// @public
export const ControlBar: (props: ControlBarProps) => JSX.Element;

// @public
export const ControlButton: (props: CallControlButtonProps) => JSX.Element;

// @public (undocumented)
export const convertSdkRemoteParticipantToGalleryParticipant: (remoteParticipantFromSDK: RemoteParticipant) => GalleryParticipant;

// @public (undocumented)
export const convertSdkRemoteParticipantToListParticipant: (participant: RemoteParticipant, onRemove?: (() => void) | undefined, onMute?: (() => void) | undefined) => ListParticipant;

// @public (undocumented)
export const COOL_PERIOD_REFRESH_INVERVAL = 1000;

// @public (undocumented)
export const COOL_PERIOD_THRESHOLD: number;

// @public (undocumented)
export const createAzureCommunicationUserCredential: (token: string, refreshTokenCallback?: (() => Promise<string>) | undefined) => AzureCommunicationUserCredential;

// @public (undocumented)
export const CREATED = 201;

// @public (undocumented)
export const CROP_MEDIA = "Crop";

// @public (undocumented)
export const DEFAULT_IMG_WIDTH = 200;

// @public (undocumented)
export const DEFAULT_NUMBER_OF_MESSAGES_TO_LOAD = 100;

// @public (undocumented)
export const EMPTY_MESSAGE_REGEX: RegExp;

// @public (undocumented)
export const ENTER_KEY = 13;

// Warning: (ae-forgotten-export) The symbol "ErrorBarProps" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export const ErrorBar: (props: Pick<ErrorBarProps, never>) => React_2.ReactElement<any, string | ((props: any) => React_2.ReactElement<any, any> | null) | (new (props: any) => React_2.Component<any, any, any>)>;

// @public
export const ErrorBarComponent: (props: ErrorBarProps) => JSX.Element;

// @public (undocumented)
export const ErrorContextLastError: React_2.Context<ErrorContextLastErrorType | undefined>;

// @public (undocumented)
export type ErrorContextLastErrorType = {
    lastError: CommunicationUiError | undefined;
};

// @public (undocumented)
export const ErrorContextOnErrorCallback: React_2.Context<ErrorContextOnErrorCallbackType | undefined>;

// @public (undocumented)
export type ErrorContextOnErrorCallbackType = {
    onErrorCallback: ((error: CommunicationUiError) => void) | undefined;
};

// @public (undocumented)
export const ErrorContextSetLastError: React_2.Context<ErrorContextSetLastErrorType | undefined>;

// @public (undocumented)
export type ErrorContextSetLastErrorType = {
    setLastError: Dispatch<SetStateAction<CommunicationUiError | undefined>>;
};

// @public (undocumented)
export const ErrorContextSetOnErrorCallback: React_2.Context<ErrorContextSetOnErrorCallbackType | undefined>;

// @public (undocumented)
export type ErrorContextSetOnErrorCallbackType = {
    setOnErrorCallback: Dispatch<SetStateAction<((error: CommunicationUiError) => void) | undefined>>;
};

// @public (undocumented)
export type ErrorHandlingProps = {
    onErrorCallback?: (error: CommunicationUiErrorInfo) => void;
};

// Warning: (ae-forgotten-export) The symbol "ErrorProviderProps" needs to be exported by the entry point index.d.ts
//
// @public
export const ErrorProvider: (props: ErrorProviderProps & ErrorHandlingProps) => JSX.Element;

// @public (undocumented)
export type ErrorsPropsFromContext = {
    getThreadMembersError: boolean | undefined;
    updateThreadMembersError: boolean | undefined;
    setUpdateThreadMembersError: (error: boolean | undefined) => void;
};

// Warning: (ae-forgotten-export) The symbol "FluentThemeProviderProps" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export const FluentThemeProvider: (props: FluentThemeProviderProps) => JSX.Element;

// @public (undocumented)
export const FORBIDDEN_STATUS_CODE = 403;

// @public (undocumented)
export const formatDateForChatMessage: (messageDate: Date) => string;

// @public (undocumented)
export const formatTimeForChatMessage: (messageDate: Date) => string;

// @public
export const formatTimestampForChatMessage: (messageDate: Date, todayDate: Date) => string;

// @public (undocumented)
export type GalleryParticipant = {
    displayName: string;
    userId: string;
    videoStream?: RemoteVideoStream;
};

// @public (undocumented)
export const getACSId: (identifier: CommunicationUser_2 | CallingApplication | UnknownIdentifier | PhoneNumber) => string;

// @public (undocumented)
export const getChatContextState: () => ChatContextType;

// @public (undocumented)
export const getErrorFromAcsResponseCode: (message: string, statusCode: number) => CommunicationUiError | undefined;

// @public (undocumented)
export const getIdFromToken: (jwtToken: string) => string;

// @public (undocumented)
export const getThreadContextState: () => ThreadProviderContextType;

// Warning: (ae-forgotten-export) The symbol "GridLayoutProps" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export const GridLayoutComponent: (props: GridLayoutProps) => JSX.Element;

// Warning: (ae-forgotten-export) The symbol "GroupCallCompositeProps" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export const GroupCall: (props: GroupCallCompositeProps) => JSX.Element;

// Warning: (ae-forgotten-export) The symbol "GroupChatProps" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export const GroupChat: (props: GroupChatProps) => JSX.Element;

// @public (undocumented)
export const GUID_FOR_INITIAL_TOPIC_NAME = "c774da81-94d5-4652-85c7-6ed0e8dc67e6";

// @public (undocumented)
export const hangupButtonProps: CallControlButtonProps;

// @public (undocumented)
export const INCOMING = "Incoming";

// @public (undocumented)
export const IncomingCallsContext: React_2.Context<IncomingCallsContextType | undefined>;

// @public (undocumented)
export type IncomingCallsContextType = {
    incomingCalls: Call[];
};

// @public (undocumented)
export const IncomingCallsProvider: (props: {
    children: React_2.ReactNode;
}) => JSX.Element;

// @public (undocumented)
export const INITIAL_MESSAGES_SIZE = 2000;

// @public (undocumented)
export const INTERNAL_SERVER_ERROR_STATUS_CODE = 500;

// @public
export const isGUID: (str: string) => boolean;

// @public (undocumented)
export const isInCall: (callState: CallState) => boolean;

// @public (undocumented)
export const isLocalScreenShareSupportedInBrowser: () => boolean;

// @public (undocumented)
export const isMobileSession: () => boolean;

// @public (undocumented)
export function isSelectedDeviceInList<T extends AudioDeviceInfo | VideoDeviceInfo>(device: T, list: T[]): boolean;

// @public (undocumented)
export type ListParticipant = {
    key: string;
    displayName: string;
    state: string;
    isScreenSharing: boolean;
    isMuted: boolean;
    onRemove?: () => void;
    onMute?: () => void;
};

// @public (undocumented)
export type LocalDeviceSettingsContainerProps = {
    videoDeviceList: VideoDeviceInfo[];
    audioDeviceList: AudioDeviceInfo[];
    videoDeviceInfo?: VideoDeviceInfo;
    audioDeviceInfo?: AudioDeviceInfo;
    updateLocalVideoStream: (source: VideoDeviceInfo) => void;
    updateAudioDeviceInfo: (source: AudioDeviceInfo) => void;
};

// @public (undocumented)
export type LocalGalleryParticipant = {
    displayName: string;
    userId: string;
    videoStream?: LocalVideoStream;
};

// @public (undocumented)
export interface LocalVideoContainerOwnProps {
    // (undocumented)
    scalingMode?: ScalingMode;
    // (undocumented)
    stream: LocalVideoStream | undefined;
}

// @public (undocumented)
export const MapToCallConfigurationProps: () => SetupContainerProps;

// Warning: (ae-forgotten-export) The symbol "ChatMessagePropsFromContext" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export const MapToChatMessageProps: () => ChatMessagePropsFromContext;

// @public (undocumented)
export const MapToChatThreadMemberProps: () => ChatThreadMemberPropsFromContext;

// @public (undocumented)
export const MapToChatThreadProps: () => ChatThreadPropsFromContext;

// @public (undocumented)
export const MapToChatTopicProps: () => ChatTopicPropsFromContext;

// @public (undocumented)
export const MapToErrorsProps: () => ErrorsPropsFromContext;

// @public (undocumented)
export const MapToLocalDeviceSettingsProps: () => LocalDeviceSettingsContainerProps;

// @public (undocumented)
export const MapToLocalVideoProps: (ownProps: LocalVideoContainerOwnProps) => VideoContainerProps;

// @public (undocumented)
export const MapToOneToOneCallProps: () => CallContainerProps;

// @public (undocumented)
export const MapToRemoteVideoProps: (ownProps: RemoteVideoContainerOwnProps) => VideoContainerProps;

// @public (undocumented)
export const MapToSendBoxProps: () => SendBoxPropsFromContext;

// @public (undocumented)
export const MapToSidePanelProps: () => SidePanelPropsFromContext;

// @public (undocumented)
export const MapToTypingIndicatorProps: () => TypingIndicatorProps;

// @public (undocumented)
export const MapToUserIdProps: () => UserIdPropsFromContext;

// @public (undocumented)
export const MAXIMUM_INT64 = 9223372036854776000;

// @public (undocumented)
export const MAXIMUM_LENGTH_OF_MESSAGE = 8000;

// @public (undocumented)
export const MAXIMUM_LENGTH_OF_NAME = 10;

// @public (undocumented)
export const MAXIMUM_LENGTH_OF_TOPIC = 30;

// @public (undocumented)
export const MAXIMUM_LENGTH_OF_TYPING_USERS = 35;

// @public (undocumented)
export const MAXIMUM_RETRY_COUNT = 3;

// @public (undocumented)
export enum MessageStatus {
    // (undocumented)
    DELIVERED = "delivered",
    // (undocumented)
    FAILED = "failed",
    // (undocumented)
    SEEN = "seen",
    // (undocumented)
    SENDING = "sending"
}

// @public (undocumented)
export const MINI_HEADER_WINDOW_WIDTH = 360;

// @public (undocumented)
export const MINIMUM_TYPING_INTERVAL_IN_MILLISECONDS = 8000;

// @public (undocumented)
export const MULTI_STATUS = 207;

// @public (undocumented)
export const NEW_MESSAGES = "New Messages";

// @public (undocumented)
export const NO_CONTENT = 204;

// @public (undocumented)
export const OK = 200;

// Warning: (ae-forgotten-export) The symbol "OneToOneCallCompositeProps" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export const OneToOneCall: (props: OneToOneCallCompositeProps) => JSX.Element;

// @public (undocumented)
export const optionsButtonProps: CallControlButtonProps;

// @public (undocumented)
export const PAGE_SIZE = 200;

// Warning: (ae-forgotten-export) The symbol "ParticipantItemProps" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export const ParticipantItem: (props: ParticipantItemProps & ErrorHandlingProps) => JSX.Element;

// @public (undocumented)
export const PARTICIPANTS_THRESHOLD = 20;

// @public (undocumented)
export type ParticipantStream = {
    user: RemoteParticipant;
    stream: RemoteVideoStream | undefined;
};

// @public (undocumented)
export const PRECONDITION_FAILED_RETRY_INTERVAL = 200;

// @public (undocumented)
export const PRECONDITION_FAILED_STATUS_CODE = 412;

// @public (undocumented)
export const propagateError: (error: Error, onErrorCallback?: ((error: CommunicationUiErrorInfo) => void) | undefined) => void;

// @public (undocumented)
export const ReadReceiptComponent: (props: ReadReceiptProps & ErrorHandlingProps) => JSX.Element;

// @public (undocumented)
export interface ReadReceiptProps {
    deliveredTooltipText?: string;
    failedToSendTooltipText?: string;
    messageStatus: MessageStatus;
    seenTooltipText?: string;
    sendingTooltipText?: string;
    size?: SizeValue;
}

// @public (undocumented)
export interface RemoteVideoContainerOwnProps {
    // (undocumented)
    scalingMode?: ScalingMode;
    // (undocumented)
    stream: RemoteVideoStream | undefined;
}

// @public (undocumented)
export const RINGING = "Ringing";

// @public (undocumented)
export const screenShareButtonProps: CallControlButtonProps;

// @public (undocumented)
export const SendBox: (props: Pick<{
    onRenderSystemMessage?: ((systemMessage: string | undefined) => React_2.ReactElement<any, string | ((props: any) => React_2.ReactElement<any, any> | null) | (new (props: any) => React_2.Component<any, any, any>)>) | undefined;
    supportNewline?: boolean | undefined;
} & SendBoxPropsFromContext & ErrorHandlingProps, "onErrorCallback" | "supportNewline" | "onRenderSystemMessage">) => React_2.ReactElement<any, string | ((props: any) => React_2.ReactElement<any, any> | null) | (new (props: any) => React_2.Component<any, any, any>)>;

// Warning: (ae-forgotten-export) The symbol "SendBoxProps" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export const SendBoxComponent: (props: SendBoxProps & ErrorHandlingProps) => JSX.Element;

// @public (undocumented)
export type SendBoxPropsFromContext = {
    disabled: boolean;
    systemMessage?: string;
    displayName: string;
    userId: string;
    sendMessage: (displayName: string, userId: string, messageContent: string) => Promise<void>;
    onSendTypingNotification: () => Promise<void>;
};

// @public (undocumented)
export const SERVICE_UNAVAILABLE_STATUS_CODE = 503;

// @public (undocumented)
export type SetupContainerProps = {
    isCallInitialized: boolean;
    displayName: string;
    updateDisplayName: (displayName: string) => void;
    joinCall: (groupId: string) => void;
};

// @public (undocumented)
export type SidePanelPropsFromContext = {
    threadMembers: ChatThreadMember_2[];
    thread: ChatThread | undefined;
    existsTopicName: boolean | undefined;
    updateThreadTopicName: (topicName: string) => Promise<boolean>;
    removeThreadMemberByUserId: (userId: string) => void;
};

// @public (undocumented)
export const SPACE_KEY = 32;

// Warning: (ae-forgotten-export) The symbol "StreamMediaProps" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export const StreamMedia: (props: StreamMediaProps & ErrorHandlingProps) => JSX.Element;

// @public (undocumented)
export const TEXT_EXCEEDS_LIMIT: string;

// @public (undocumented)
export const TEXT_MESSAGE = "Text";

// @public (undocumented)
export const THREAD_INFO_FETCH_INVERVAL = 2000;

// @public (undocumented)
export const ThreadContext: React_2.Context<ThreadProviderContextType | undefined>;

// @public (undocumented)
export type ThreadProviderContextType = {
    chatThreadClient?: ChatThreadClient;
    setChatThreadClient: Dispatch<SetStateAction<ChatThreadClient | undefined>>;
    chatMessages?: ChatMessage_2[];
    setChatMessages: Dispatch<SetStateAction<ChatMessage_2[] | undefined>>;
    threadId: string;
    setThreadId: Dispatch<SetStateAction<string>>;
    thread: ChatThread | undefined;
    setThread: Dispatch<SetStateAction<ChatThread | undefined>>;
    receipts: ReadReceipt[] | undefined;
    setReceipts: Dispatch<SetStateAction<ReadReceipt[] | undefined>>;
    threadMembers: ChatThreadMember_2[];
    setThreadMembers: Dispatch<SetStateAction<ChatThreadMember_2[]>>;
    coolPeriod: Date | undefined;
    setCoolPeriod: Dispatch<SetStateAction<Date | undefined>>;
    getThreadMembersError: boolean | undefined;
    setGetThreadMembersError: Dispatch<SetStateAction<boolean | undefined>>;
    updateThreadMembersError: boolean | undefined;
    setUpdateThreadMembersError: Dispatch<SetStateAction<boolean | undefined>>;
    failedMessageIds: string[];
    setFailedMessageIds: Dispatch<SetStateAction<string[]>>;
};

// @public (undocumented)
export const TOO_MANY_REQUESTS_STATUS_CODE = 429;

// @public (undocumented)
export const TypingIndicator: (props: Pick<TypingIndicatorProps & ErrorHandlingProps, "onErrorCallback">) => React_2.ReactElement<any, string | ((props: any) => React_2.ReactElement<any, any> | null) | (new (props: any) => React_2.Component<any, any, any>)>;

// @public (undocumented)
export const TypingIndicatorComponent: (props: TypingIndicatorProps & ErrorHandlingProps) => JSX.Element;

// @public (undocumented)
export type TypingIndicatorProps = {
    typingUsers: TypingUser[];
    typingString: string;
};

// @public (undocumented)
export type TypingUser = {
    displayName: string;
    prefixImageUrl: string;
};

// @public (undocumented)
export const UNABLE_TO_LOAD_MORE_MESSAGES = "You have reached the beginning of the thread";

// @public (undocumented)
export const UNAUTHORIZED_STATUS_CODE = 401;

// @public (undocumented)
export const useCallAgent: () => void;

// @public (undocumented)
export const useCallContext: () => CallContextType;

// @public (undocumented)
export const useCallingContext: () => CallingContextType;

// @public (undocumented)
export const useChatClient: () => ChatClient;

// @public (undocumented)
export const useChatMessages: () => ChatMessage_2[] | undefined;

// @public (undocumented)
export const useChatThreadClient: () => ChatThreadClient | undefined;

// @public (undocumented)
export const useCoolPeriod: () => Date | undefined;

// @public (undocumented)
export const useDisplayName: () => string;

// @public (undocumented)
export const useFailedMessageIds: () => string[];

// @public (undocumented)
export const useFetchMessage: () => (messageId: string) => Promise<ChatMessage_2 | undefined>;

// @public (undocumented)
export const useFetchMessages: () => (options?: RestListMessagesOptions | undefined) => Promise<ChatMessage_2[]>;

// @public (undocumented)
export const useFetchReadReceipts: () => (() => Promise<ReadReceipt[]>);

// @public (undocumented)
export const useFetchThread: () => (() => Promise<void>);

// @public (undocumented)
export const useFetchThreadMembers: () => (() => Promise<void>);

// @public (undocumented)
export const useGetThreadMembersError: () => boolean | undefined;

// @public (undocumented)
export const useGetUpdateThreadMembersError: () => boolean | undefined;

// Warning: (ae-forgotten-export) The symbol "UseGroupCallType" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export const useGroupCall: () => UseGroupCallType;

// Warning: (ae-forgotten-export) The symbol "UseIncomingCallType" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export const useIncomingCall: () => UseIncomingCallType;

// @public (undocumented)
export const useIncomingCallsContext: () => IncomingCallsContextType;

// @public (undocumented)
export const useIsMessageSeen: () => (userId: string, clientMessageId: string, messages: any[]) => boolean;

// @public (undocumented)
export const useLastError: () => CommunicationUiError | undefined;

// Warning: (ae-forgotten-export) The symbol "useLocalVideoType" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export const useLocalVideo: () => useLocalVideoType;

// Warning: (ae-forgotten-export) The symbol "UseLocalVideoStreamType" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export const useLocalVideoStreamRenderer: (stream: LocalVideoStream | undefined, rendererOptions: RendererOptions | undefined) => UseLocalVideoStreamType;

// Warning: (ae-forgotten-export) The symbol "UseMicrophoneType" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export const useMicrophone: () => UseMicrophoneType;

// Warning: (ae-forgotten-export) The symbol "UseOutgoingCallType" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export const useOutgoingCall: () => UseOutgoingCallType;

// @public (undocumented)
export const useReceipts: () => ReadReceipt[] | undefined;

// Warning: (ae-forgotten-export) The symbol "UseRemoteVideoStreamType" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export const useRemoteVideoStreamRenderer: (stream: RemoteVideoStream | undefined, options?: RendererOptions | undefined) => UseRemoteVideoStreamType;

// @public (undocumented)
export const useRemoveThreadMember: () => (userId: string) => Promise<void>;

// @public (undocumented)
export type UserIdPropsFromContext = {
    userId: string;
};

// Warning: (ae-forgotten-export) The symbol "useScreenShareType" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export const useScreenShare: () => useScreenShareType;

// @public (undocumented)
export const useSendMessage: () => (displayName: string, userId: string, messageContent: string) => Promise<void>;

// @public (undocumented)
export const useSendReadReceipt: () => (messageId: string) => Promise<void>;

// @public (undocumented)
export const useSendTypingNotification: () => (() => Promise<boolean>);

// @public (undocumented)
export const useSetChatClient: () => (chatClient: ChatClient) => void;

// @public (undocumented)
export const useSetChatMessages: () => Dispatch<SetStateAction<ChatMessage_2[] | undefined>>;

// @public (undocumented)
export const useSetChatThreadClient: () => (threadClient: ChatThreadClient) => void;

// @public (undocumented)
export const useSetCoolPeriod: () => (coolPeriod: Date | undefined) => void;

// @public (undocumented)
export const useSetFailedMessageIds: () => Dispatch<SetStateAction<string[]>>;

// @public (undocumented)
export const useSetGetThreadMembersError: () => (getThreadMembersError: boolean) => void;

// @public (undocumented)
export const useSetLastError: () => (error: CommunicationUiError | undefined) => void;

// @public (undocumented)
export const useSetOnErrorCallback: () => (callback: (error: CommunicationUiError) => void) => void;

// @public (undocumented)
export const useSetReceipts: () => (receipts: ReadReceipt[]) => void;

// @public (undocumented)
export const useSetThread: () => (thread: ChatThread) => void;

// @public (undocumented)
export const useSetThreadId: () => (threadId: string) => void;

// @public (undocumented)
export const useSetThreadMembers: () => (threadMembers: ChatThreadMember_2[]) => void;

// @public (undocumented)
export const useSetUpdateThreadMembersError: () => (updateThreadMembersError?: boolean | undefined) => void;

// @public (undocumented)
export const useSubscribeMessage: (addMessage?: ((messageEvent: ChatMessageReceivedEvent) => void) | undefined) => void;

// @public (undocumented)
export const useSubscribeReadReceipt: (addReadReceipts?: ((readReceipts: ReadReceipt[]) => void) | undefined) => void;

// @public (undocumented)
export const useSubscribeToAudioDeviceList: () => void;

// @public (undocumented)
export const useSubscribeToDevicePermission: (permissionType: PermissionType) => void;

// @public (undocumented)
export const useSubscribeToVideoDeviceList: () => void;

// Warning: (ae-forgotten-export) The symbol "TypingNotification" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export const useSubscribeTypingNotification: (addTypingNotifications: (notification: TypingNotification) => void) => void;

// Warning: (ae-forgotten-export) The symbol "UseTeamsCallType" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export const useTeamsCall: () => UseTeamsCallType;

// @public (undocumented)
export const useThread: () => ChatThread | undefined;

// @public (undocumented)
export const useThreadId: () => string;

// @public (undocumented)
export const useThreadMembers: () => ChatThreadMember_2[];

// @public (undocumented)
export const useTriggerOnErrorCallback: () => (error: CommunicationUiErrorInfo) => void;

// @public (undocumented)
export const useTypingUsers: (threadMembers: ChatThreadMember_2[]) => ChatThreadMember_2[];

// @public (undocumented)
export const useUpdateThreadTopicName: () => (topicName: string) => Promise<boolean>;

// @public (undocumented)
export const useUserId: () => string;

// @public
export const useValidContext: <T extends unknown>(ReactContext: React_2.Context<T | undefined>) => T;

// @public (undocumented)
export const videoButtonProps: CallControlButtonProps;

// @public (undocumented)
export interface VideoContainerProps {
    // (undocumented)
    isVideoReady: boolean;
    // (undocumented)
    videoStreamElement: HTMLElement | null;
}

// Warning: (ae-forgotten-export) The symbol "PlaceholderProps" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export const VideoTile: (props: VideoTileProps & PlaceholderProps) => JSX.Element;

// @public (undocumented)
export interface VideoTileProps {
    children?: React_2.ReactNode;
    invertVideo?: boolean;
    isVideoReady?: boolean;
    placeholderProvider?: JSX.Element | null;
    styles?: VideoTileStylesProps;
    videoProvider?: JSX.Element | null;
}

// @public (undocumented)
export interface VideoTileStylesProps {
    overlayContainer?: IStyle;
    root?: IStyle;
    videoContainer?: IStyle;
}

// @public
export const WithErrorHandling: (Component: (props: any & ErrorHandlingProps) => JSX.Element, props: any & ErrorHandlingProps) => JSX.Element;


// (No @packageDocumentation comment for this package)

```