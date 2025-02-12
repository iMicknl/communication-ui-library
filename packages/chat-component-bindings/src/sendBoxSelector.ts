// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { createSelector } from 'reselect';
import { getDisplayName, getUserId } from './baseSelectors';

// The following need explicitly imported to avoid api-extractor issues.
// These can be removed once https://github.com/microsoft/rushstack/pull/1916 is fixed.
// @ts-ignore
import * as reselect from 'reselect';
// @ts-ignore
import { ChatClientState } from 'chat-stateful-client';
// @ts-ignore
import { CommunicationIdentifierKind } from '@azure/communication-common';
// @ts-ignore
import { ChatBaseSelectorProps } from './baseSelectors';

export const sendBoxSelector = createSelector([getUserId, getDisplayName], (userId, displayName) => ({
  displayName: displayName,
  userId: userId
}));
