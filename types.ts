/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type AppScreen = 'menu' | 'theory';

export interface TheoryPoint {
  title: string;
  table?: { armenian: string; spanish: string; example: string }[];
  rules?: string[];
  simpleExamples?: { q: string; qArm: string }[];
  fullExamples?: { q: string; a: string; qArm: string; aArm: string }[];
}
