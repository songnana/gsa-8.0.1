/* Copyright (C) 2019 Greenbone Networks GmbH
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

import React from 'react';

import {render} from 'web/utils/testing';

import FootNote from '../footnote';

describe('Footnote tests', () => {
  test('should render footnote', () => {
    const {element} = render(<FootNote />);

    expect(element).toMatchSnapshot();
  });

  test('should render children', () => {
    const {element} = render(<FootNote>Hello World</FootNote>);

    expect(element).toHaveTextContent('Hello World');
  });
});
