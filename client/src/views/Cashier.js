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

import { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Container from 'react-bootstrap/Container';
import { faList, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import TabItem from '../components/TabItem';
import routes from '../routes';
import RouteTransition from '../components/RouteTransition';
import '../App.scss';
// Routes
import PointOfSale from '../containers/PointOfSale';
import Catalog from '../containers/Catalog';

/*********************************
 * * Cashier Permission Access
 *********************************/

export default function Cashier() {
  return (
    <Fragment>
      <Router>
        <Container fluid>
          <Sidebar
            navigation={
              <>
                {/* Role-specific views */}
                <TabItem
                  tab="Point of Sale"
                  overlay="Point of Sale"
                  route={routes.POS}
                  icon={faShoppingCart}
                />
                <TabItem
                  tab="Catalog"
                  overlay="Catalog"
                  route={routes.CATALOG}
                  icon={faList}
                />
              </>
            }
          />
          <div id="pageRoutes" className="routerContainer">
            <RouteTransition
              // * Default role view
              view="/pos"
              // * View routes
              children={
                <>
                  <Route path={routes.POS} component={PointOfSale} />
                  <Route path={routes.CATALOG} component={Catalog} />
                </>
              }
            />
          </div>
        </Container>
      </Router>
    </Fragment>
  );
}
