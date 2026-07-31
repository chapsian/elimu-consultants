/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Tab = 'home' | 'services' | 'contact';

export interface BookingFormState {
  fullName: string;
  email: string;
  phone: string;
  serviceNeeded: string;
  message: string;
}
