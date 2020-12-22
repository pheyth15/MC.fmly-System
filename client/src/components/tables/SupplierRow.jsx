/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense } from 'react';
import { TableData, TableRow, Tag } from './__tables.module';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import EntryActions from '../common/EntryActions';

const Moment = lazy(() => import('react-moment'));

/*********************************
 * * Supplier Table Row
 *********************************/

export default function SupplierRow(supplier) {
  return (
    <>
      {/* Product | Table Row */}
      <TableRow className="supplier" key={supplier._id} tabIndex={0}>
        <TableData className="name">
          <EntryActions edit={supplier.edit} delete={supplier.delete} />
          <Tag variant="primary">{supplier.name}</Tag>
        </TableData>
        <TableData className="description">{supplier.description}</TableData>
        <TableData className="type">{supplier.type}</TableData>
        <TableData className="contact">
          <Tag variant="dark">{supplier.contact}</Tag>
        </TableData>
        <TableData className="website">
          <a href={supplier.website} target="_blank" rel="noreferrer">
            <Tag variant="info">
              <FontAwesomeIcon icon={faGlobe} />
            </Tag>
          </a>
        </TableData>
        <TableData className="updatedAt">
          {/* Parse date to human-friendly format */}
          <Suspense fallback="—">
            <Moment fromNow date={supplier.updatedAt} />
          </Suspense>
        </TableData>
        <TableData className="createdAt">
          {/* Parse date to human-friendly format */}
          <Suspense fallback="—">
            <Moment
              format="D MMM YYYY | HH:mm"
              date={supplier.createdAt}
              withTitle
            />
          </Suspense>
        </TableData>
      </TableRow>
    </>
  );
}
