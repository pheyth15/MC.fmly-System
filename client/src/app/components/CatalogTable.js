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

import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import styled, { createGlobalStyle } from 'styled-components';
import getProducts from '../services/productService';
import ExpandedProduct from './ExpandedProduct';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Notification from './Notification';

const TableContainer = createGlobalStyle`
  div.table-responsive {
    display: flex !important;
    overflow: auto !important;
  }
`;

const TableHeader = styled.th`
  color: #c3c3c3;
  border: none !important;
  width: 7rem;

  :hover {
    color: #1a8ac4;
    cursor: pointer;
  }
`;

const ProductTable = styled(Table)`
  height: 100%;
  width: 150% !important;
  min-width: 150% !important;
  min-height: 100%;
  margin: 0 3.5rem 2rem 0;
  overflow: auto !important;
  background-color: transparent;
  border-collapse: separate;
  border-spacing: 0 1rem;

  th,
  td {
    vertical-align: middle !important;
    width: (max-content + 5rem) !important;
  }
`;

// Loading Spinner
const Loader = styled(Spinner)`
  margin: 10px auto;
  width: 3rem;
  height: 3rem;
  position: absolute;
  right: 50%;
  top: 13rem;
`;

// Shows on no products registered
const NullItems = styled.p`
  color: #c3c3c3;
  margin-bottom: 1rem;
  position: absolute;
  left: 48%;
  top: 16rem;
`;

export default function CatalogTable() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (!products) {
      fetchProducts().catch((err) => {
        console.error(err);
      });
    }
  });

  const fetchProducts = async () => {
    let res = await getProducts.getAll();
    setProducts(res);
  };

  const verifyProducts = () => {
    return (
      <>
        {products && products.length >= 1 ? (
          products.map((products) => ExpandedProduct(products))
        ) : (
          <Loader variant="primary" animation="border" role="status" />
        )}
      </>
    );
  };

  return (
    <>
      <TableContainer />
      <ProductTable hover responsive>
        <thead>
          <tr>
            <TableHeader>
              # Code <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader>
              Product <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader>
              Type <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader>
              Quantity <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader>
              Created <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader>
              Updated <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
          </tr>
        </thead>
        <tbody>
          {products && products.length === 0 ? (
            <NullItems> No products registered...</NullItems>
          ) : (
            verifyProducts()
          )}
        </tbody>
      </ProductTable>
      <Notification
        title="Notice"
        time="Just now"
        message="Products are loaded from a database. Notify me if you are stuck in loading."
      />
    </>
  );
}
