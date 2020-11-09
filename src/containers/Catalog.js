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

import Categories from '../components/Categories';
import useProducts from '../hooks/useProducts';
import ExtendedProduct from '../components/tables/ExtendedProduct';
import Loader from '../components/Loader';
import ExtendedTable from '../components/tables/ExtendedTable';
import { NullItems } from '../components/tables/NarrowTable';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Notification from '../components/Notification';

export default function Catalog() {
  const [products] = useProducts();

  // Removes duplicate properties | category
  const productCategories =
    products &&
    products
      .filter(
        (items, index, self) =>
          index ===
          self.findIndex((deduped) => deduped.category === items.category)
      )
      // Sort items
      .reverse();

  // Removes duplicate properties | type
  const productTypes =
    products &&
    products
      .filter(
        (items, index, self) =>
          index === self.findIndex((deduped) => deduped.type === items.type)
      )
      // Sort items
      .reverse();

  const verifyProducts = () => {
    return (
      <>
        {products && products.length !== 0 ? (
          products.map((product) => ExtendedProduct(product))
        ) : (
          // .filter((pane) => pane.category === props.table)
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

  // eslint-disable-next-line
  const TableRoutes = () => {
    return (
      <>
        <Tab.Pane eventKey="default">
          <ShowTable />
        </Tab.Pane>
        {/* Filtered Table */}
        {products &&
          productCategories.map((product) => (
            <Tab.Pane key={product.category} eventKey={product.category}>
              <ShowTable />
            </Tab.Pane>
          ))}
        {products &&
          productTypes.map((product) => (
            <Tab.Pane key={product.type} eventKey={product.type}>
              <ShowTable />
            </Tab.Pane>
          ))}
      </>
    );
  };

  return (
    <>
      <Categories
        categories={
          // list `category` data
          products &&
          productCategories.map((product) => (
            <Nav.Item key={product.category}>
              <Nav.Link eventKey={product.category}>
                {product.category}
              </Nav.Link>
            </Nav.Item>
          ))
        }
        types={
          // list `type` data
          products &&
          productTypes.map((product) => (
            <Nav.Item key={product.type}>
              <Nav.Link eventKey={product.type}>{product.type}</Nav.Link>
            </Nav.Item>
          ))
        }
        tables=<TableRoutes />
      />
      <Notification
        title="Notice"
        time="System Guide"
        message="Products are fetched from the database. Category & Type lists are dynamic components and will update on new/deleted entries."
        delay={15000}
      />
      <Notification
        title="Navigation"
        time="System Guide"
        message="Scroll horizontally/vertically using Shift + Scroll or Two-finger touchpad drag, or by pressing/holding Scroll."
        delay={7000}
      />
    </>
  );
}
