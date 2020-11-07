/*
 *     MC.fmly Inventory System
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

import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const TableRow = styled.tr`
  color: white;
  background-color: #1e1e1e;
  border-radius: 1rem;
  box-shadow: 0 3px 5px #232323;

  .code {
    padding-left: 1.2rem !important;
  }

  :hover {
    background-color: #181818 !important;

    button {
      visibility: visible;
    }
  }

  // Row's border-radius
  td:first-child {
    border-left-style: solid;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
  td:last-child {
    border-right-style: solid;
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem;
  }
`;

const TableData = styled.td`
  color: white;
  text-indent: 0.6rem;
  width: max-content;
  font-size: 1.2vw;
  padding: 1rem 0 !important;
  border: none !important;
  white-space: nowrap;

  p {
    display: flex;
    vertical-align: middle;
    margin: 0;
    padding: 8px 0 0 0;
  }
`;

const Tag = styled(Badge)`
  font-size: 1.2vw;
  padding: 6px 10px 6px 0;
`;

const ProductActions = styled.div`
  margin: 0 auto;
  width: max-content;
  height: max-content;
`;

const ProductControl = styled(Button)`
  visibility: hidden;
  padding: 5px 10px;
  margin: 0 3px;
  font-size: 1.1vw;
  border: none;
`;

const NarrowProduct = (product) => {
  return (
    <TableRow className="product" key={product._id}>
      <TableData className="code" colSpan="1">
        {product.code}
      </TableData>

      <TableData className="name">{product.name}</TableData>

      <TableData className="type">
        <Tag pill variant="secondary">
          {product.variant}
        </Tag>
      </TableData>

      <TableData className="type">
        <Tag pill variant="info">
          {product.type}
        </Tag>
      </TableData>

      <TableData className="stock">
        {/* Quantity Color Indicator */}
        {(() => {
          if (product.quantity <= 10) {
            return (
              <Tag pill variant="danger">
                {product.quantity}
              </Tag>
            );
          }
          if (product.quantity <= 20) {
            return (
              <Tag pill variant="warning">
                {product.quantity}
              </Tag>
            );
          }
          if (product.quantity <= 300) {
            return (
              <Tag pill variant="success">
                {product.quantity}
              </Tag>
            );
          } else {
            return (
              <Tag pill variant="dark">
                {product.quantity}
              </Tag>
            );
          }
        })()}
      </TableData>

      <TableData className="createdAt">
        <p>
          {product.createdAt}
          <ProductActions>
            <ProductControl variant="outline-success">
              <FontAwesomeIcon icon={faPen} />
            </ProductControl>
            <ProductControl variant="outline-danger">
              <FontAwesomeIcon icon={faTimes} />
            </ProductControl>
          </ProductActions>
        </p>
      </TableData>
    </TableRow>
  );
};

export default NarrowProduct;
