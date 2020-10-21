/*
 *     MC Inventory Management System
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

const WidgetUI = styled.div`
  display: inline-block;
  margin: 1.7rem 1.5rem 1.7rem 0;
  padding: 1rem 3rem;
  height: max-content;
  width: max-content;
  background-color: #2f2f2f;
  box-shadow: 0 3px 5px #232323;
  border-radius: 1.5rem;
`;

const WidgetSubject = styled.p`
  color: #c3c3c3;
  font-size: 1.2vw;
  margin: 1rem 0 0.6rem 0;
  font-weight: bold;
`;

const WidgetAmount = styled.h3`
  color: white;
  font-size: 2vw;
  font-weight: bolder;
  display: inline-block;
`;

const WidgetLabel = styled.label`
  font-size: 1vw;
  color: #a7a7a7;
  margin: 0 5px;
`;

export default function Widget(props) {
  return (
    <>
      <WidgetUI>
        <WidgetSubject>{props.subject}:</WidgetSubject>
        <WidgetAmount>{props.amount}</WidgetAmount>
        <WidgetLabel>{props.label}</WidgetLabel>
      </WidgetUI>
    </>
  );
}
