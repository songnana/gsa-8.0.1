/* Copyright (C) 2016-2019 Greenbone Networks GmbH
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 */
import {isDefined} from './identity';

export const capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const shorten = (text, length = 60) => {
  if (!isDefined(text)) {
    return '';
  }

  if (text.length < length) {
    return text;
  }

  return text.substr(0, length) + '...';
};

/**
 * Split a string into several terms
 *
 * Example usage: split('abc_def_hij', '_', 1) => ['abc', 'def_hij']
 *
 * @param {String} string     String to split
 * @param {String} separator  String to search for splitting
 * @param {Number} limit      Split only limit times
 *
 * @returns {Array} Split String as an array
 */
export const split = (string, separator, limit) => {
  if (isDefined(limit) && limit <= 0) {
    return [string];
  }

  const splits = string.split(separator, limit);

  const left = string.replace(splits.join(separator), '');
  if (left.trim().length > 0) {
    splits.push(left.slice(1));
  }

  return splits;
};

export const isEmpty = string => !isDefined(string) || string.length === 0;

// vim: set ts=2 sw=2 tw=80:
