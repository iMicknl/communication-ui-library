// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export type Common<A, B> = Pick<A, CommonProperties<A, B>>;

export type CommonProperties<A, B> = {
  [P in keyof A & keyof B]: A[P] extends B[P] ? P : never;
}[keyof A & keyof B];
