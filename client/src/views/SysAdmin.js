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
import Container from 'react-bootstrap/Container';
import Sidebar from '../components/Sidebar';
import routes from '../routes';
import '../App.scss';
import RouteTransition from '../components/RouteTransition';
import {
  faChartBar,
  faHistory,
  faServer,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
// Routes
import Dashboard from '../containers/Dashboard';
import SysInfo from '../containers/SysInfo';
import TabItem from '../components/TabItem';
import AuditLog from '../containers/AuditLog';

/*********************************
 * * Cashier Permission Access
 *********************************/

export default function SysAdmin() {
  return (
    <Fragment>
      <Router>
        <Container fluid>
          <Sidebar
            navigation={
              <>
                {/*Available routes based on role*/}
                <TabItem
                  tab="System Info"
                  overlay="System Info"
                  route={routes.SYSINFO}
                  icon={faServer}
                />
                <TabItem
                  tab="Dashboard"
                  overlay="Dashboard"
                  route={routes.DASHBOARD}
                  icon={faChartBar}
                />
                <TabItem
                  tab="Audit Log"
                  overlay="Audit Log"
                  route={routes.AUDITLOG}
                  icon={faHistory}
                />
              </>
            }
            bottom={
              <>
                <TabItem
                  tab="User Management"
                  overlay="User Management"
                  route={routes.USERS}
                  icon={faUsers}
                />
              </>
            }
          />
          <div id="pageRoutes" className="routerContainer">
            <RouteTransition
              // * Default role view
              view="/sysinfo"
              // * View routes
              children={
                <>
                  <Route exact path={routes.DASHBOARD} component={Dashboard} />
                  <Route path={routes.SYSINFO} component={SysInfo} />
                  <Route path={routes.AUDITLOG} component={AuditLog} />
                </>
              }
            />
          </div>
        </Container>
      </Router>
    </Fragment>
  );
}
