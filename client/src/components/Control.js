/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero H. Dela Cruz
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';

const ButtonControl = styled(Button)`
  color: #c4c4c4;
  background-color: #222126;
  margin: 0 0.3rem;
  border-radius: 0.3rem;
  border: none;
  box-shadow: 1px 2px 5px #1b1b1b;

  :hover,
  :active,
  :focus {
    color: #d2d2d2 !important;
    background-color: #121416 !important;
    box-shadow: none !important;
  }
`;

export default function Control({ icon, content, action }) {
  return (
    <ButtonControl onClick={action}>
      <FontAwesomeIcon icon={icon} /> {content}
    </ButtonControl>
  );
}
