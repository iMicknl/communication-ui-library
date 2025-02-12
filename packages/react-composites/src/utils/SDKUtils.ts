// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureCommunicationTokenCredential, CommunicationTokenRefreshOptions } from '@azure/communication-common';
import { CallState as CallStatus } from '@azure/communication-calling';
import {
  CommunicationUiErrorCode,
  CommunicationUiError,
  CommunicationUiErrorFromError,
  CommunicationUiErrorInfo
} from '../types/CommunicationUiError';

export const isInCall = (callStatus: CallStatus): boolean => !!(callStatus !== 'None' && callStatus !== 'Disconnected');

// Create AzureCommunicationUserCredential using optional refreshTokenCallback if provided. If callback is provided then
// identity must also be provided for callback to be used.
export const createAzureCommunicationUserCredential = (
  token: string,
  refreshTokenCallback?: (() => Promise<string>) | undefined
): AzureCommunicationTokenCredential => {
  if (refreshTokenCallback !== undefined) {
    const options: CommunicationTokenRefreshOptions = {
      token: token,
      tokenRefresher: () => refreshTokenCallback(),
      refreshProactively: true
    };
    return new AzureCommunicationTokenCredential(options);
  } else {
    return new AzureCommunicationTokenCredential(token);
  }
};

// This is a temporary solution to grab the userId from the token.
// In the future we want to use the AzureCommunicationUserCredential and CommunicationUser types into the Provider
export const getIdFromToken = (jwtToken: string): string => {
  const claimName = 'skypeid';

  const jwtTokenParts = jwtToken.split('.');
  if (jwtTokenParts.length !== 3) {
    throw new CommunicationUiError({
      message: 'Invalid jwt token',
      code: CommunicationUiErrorCode.CONFIGURATION_ERROR
    });
  }

  let base64DecodedClaims;
  let base64DecodedClaimsAsJson;
  try {
    base64DecodedClaims = atob(jwtTokenParts[1]);
    base64DecodedClaimsAsJson = JSON.parse(base64DecodedClaims);
  } catch (error) {
    throw new CommunicationUiError({
      message: 'Invalid access token',
      code: CommunicationUiErrorCode.CONFIGURATION_ERROR,
      error: error
    });
  }

  if (Object.prototype.hasOwnProperty.call(base64DecodedClaimsAsJson, claimName)) {
    return `8:${base64DecodedClaimsAsJson[claimName]}`;
  }

  throw new CommunicationUiError({
    message: 'Invalid access token',
    code: CommunicationUiErrorCode.CONFIGURATION_ERROR
  });
};

export const propagateError = (error: Error, onErrorCallback?: (error: CommunicationUiErrorInfo) => void): void => {
  if (onErrorCallback) {
    onErrorCallback(CommunicationUiErrorFromError(error));
  } else {
    throw error;
  }
};
