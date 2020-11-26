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

import Tab from 'react-bootstrap/Tab';
import ProductRow from '../components/tables/ProductRow';
import ProductHeader from '../components/tables/ProductHeader';
import { Loader } from '../components/tables/__tables.module';
import { NavTabs, TabContainer } from './__containers.module';
import ProductService from '../services/ProductService';
import Notification from '../components/common/Notification';

export default function AuditLog() {
  const [products] = ProductService();

  // * Show loading until products are ready to render
  const ListProducts = () => {
    return (
      <ProductHeader
        _id={products && products._id}
        data={
          products && products.length !== null ? (
            // Reverse & limit result to 20 | prioritize new entries
            products &&
            products
              .slice(Math.max(products.length - 20, 0))
              .reverse()
              .map((product) => ProductRow(product))
          ) : (
            <Loader variant="primary" animation="border" role="status" />
          )
        }
      />
    );
  };

  return (
    <TabContainer>
      <NavTabs defaultActiveKey="products" id="Navigation Tabs" justify>
        <Tab eventKey="products" title="Products">
          <ListProducts />
        </Tab>
        <Tab eventKey="suppliers" title="Suppliers">
          <ListProducts />
        </Tab>
        <Tab eventKey="Users" title="Users">
          <ListProducts />
        </Tab>
      </NavTabs>
      <Notification
        delay={12000}
        title="Guide"
        message={
          <p>
            Scroll horizontally using <kbd>Shift</kbd> + <kbd>Scroll</kbd>, or
            arrow keys
          </p>
        }
      />
    </TabContainer>
  );
}
