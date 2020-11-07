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

import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import ExtendedProduct from './ExtendedProduct';
import Loader from './Loader';
import { NullItems } from './NarrowTable';
import ExtendedTable from './ExtendedTable';
import SearchBar from './SearchBar';
import Notification from './Notification';
import useProducts from '../hooks/useProducts';

const CatalogGrid = styled(Row)`
  display: flex;
  height: 100%;
  overflow: hidden !important;
`;

const CategoryList = styled(Col)`
  position: fixed;
  top: 1%;
  transform: translateY(-1%);
  max-width: 9.5rem;
  margin: 1rem 5rem 1rem 1.3rem;
  padding: 1rem 1rem 1rem 1.2rem;
  color: whitesmoke;
  background-color: #1e1e1e;
  box-shadow: -1px 0 6px #232323;
  border-radius: 1.6rem;
  z-index: 9;
  height: 90vh;
  overflow-y: auto;

  a {
    margin: 0 !important;
    border-radius: 1.6rem;
    color: #d7b9b4;

    :hover {
      border-left: 2px outset #eccec9;
      background-color: #303030;
      box-shadow: 2px 5px 7px #222222;
    }
  }

  .nav-link.active {
    color: #eccec9;
    border-left: 2px inset #d7b9b4;
    background-color: #333333;
    box-shadow: 2px 5px 7px #222222;
    text-shadow: 2px 5px 3px #222222;
  }
`;

const CategoryTable = styled(Col)`
  overflow: auto !important;
  width: 100%;
  height: 100vh;
  padding: 0;
  margin-left: 10.6rem;
`;

const CategoryLine = styled.label`
  margin: 10px 0 5px 8px;
  font-size: 14px;
  color: #d2d2d2;
`;

export default function Categories() {
  const [products] = useProducts();

  const verifyProducts = () => {
    return (
      <>
        {products && products.length >= 1 ? (
          products.map((products) => ExtendedProduct(products))
        ) : (
          <Loader />
        )}
      </>
    );
  };

  const ShowTable = () => {
    return (
      <ExtendedTable
        data={
          products && products.length === 0 ? (
            <NullItems> No products registered...</NullItems>
          ) : (
            verifyProducts()
          )
        }
      />
    );
  };

  return (
    <Tab.Container id="CategorySection" defaultActiveKey="all">
      <CatalogGrid>
        <CategoryList sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="all">All</Nav.Link>
            </Nav.Item>

            {/* Graphics Section*/}
            <CategoryLine>Papercraft</CategoryLine>
            <Nav.Item>
              <Nav.Link eventKey="editing">Stationaries</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="printing">Printing</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="stickers">Stickers</Nav.Link>
            </Nav.Item>

            {/* Clothes Section */}
            <CategoryLine>Clothes</CategoryLine>
            <Nav.Item>
              <Nav.Link eventKey="tops">Preloved</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tops">Tops</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="dress">Dress</Nav.Link>
            </Nav.Item>

            {/* Digital Section */}
            <CategoryLine>Digital</CategoryLine>
            <Nav.Item>
              <Nav.Link eventKey="tops">Software</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="dress">Games</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="editing">Editing</Nav.Link>
            </Nav.Item>
          </Nav>
        </CategoryList>
        <CategoryTable>
          <SearchBar />
          <Tab.Content>
            <Tab.Pane eventKey="all">
              <ShowTable />
            </Tab.Pane>
            <Tab.Pane eventKey="editing">
              <ShowTable />
            </Tab.Pane>
            <Tab.Pane eventKey="printing">
              <ShowTable />
            </Tab.Pane>
            <Tab.Pane eventKey="stickers">
              <ShowTable />
            </Tab.Pane>
            <Tab.Pane eventKey="tops">
              <ShowTable />
            </Tab.Pane>
            <Tab.Pane eventKey="dress">
              <ShowTable />
            </Tab.Pane>
          </Tab.Content>
        </CategoryTable>
        <Notification
          title="Notice"
          time="Just now"
          message="Navigate on the table using Scroll and Shift + Scroll."
        />
      </CatalogGrid>
    </Tab.Container>
  );
}
