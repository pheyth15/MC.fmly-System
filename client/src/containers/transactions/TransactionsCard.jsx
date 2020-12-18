/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Categories from '../../components/sidebar/Categories';
import SearchControls from '../../components/SearchControls';
import { CardDeck } from '../../components/cards/CardOverlay';
import TransactionService from '../../services/TransactionService';
import { Loader } from '../../components/common/Loader';
import Tag from '../../components/common/Tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faHistory } from '@fortawesome/free-solid-svg-icons';
import {
  AddTransaction,
  DeleteTransaction,
  EditTransaction,
  NoInvoice
} from './TransactionModals';
import Notification from '../../components/common/Notification';

// * Lazy imports
const Moment = lazy(() => import('react-moment'));

/************************************
 * * Transaction List | Card View
 ************************************/

export default function TransactionsCard(props) {
  const { data } = TransactionService();

  // * Modal State Handlers | Until API's done
  const [addModal, showAddModal] = useState(false);
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);
  const [invoiceModal, showInvoiceModal] = useState(false);

  const Modals = () => {
    return (
      <>
        <AddTransaction
          show={addModal}
          onHide={() => showAddModal(false)}
          submit={() => showAddModal(false)}
          cancel={() => showAddModal(false)}
        />
        <EditTransaction
          show={editModal}
          onHide={() => showEditModal(false)}
          submit={() => showEditModal(false)}
          cancel={() => showEditModal(false)}
        />
        <DeleteTransaction
          show={deleteModal}
          onHide={() => showDeleteModal(false)}
          save={() => showDeleteModal(false)}
          close={() => showDeleteModal(false)}
        />
        <NoInvoice
          show={invoiceModal}
          onHide={() => showInvoiceModal(false)}
          save={() => showInvoiceModal(false)}
          close={() => showInvoiceModal(false)}
        />
      </>
    );
  };

  // * Transaction Card Body
  const TransactionCard = (transaction) => {
    return (
      <CardDeck
        action={() => showInvoiceModal(true)}
        key={transaction._id}
        title={
          <>
            {transaction.name}{' '}
            {(() => {
              if (transaction.status === 'Completed') {
                return <Tag variant="success" content={transaction.status} />;
              } else if (transaction.status === 'Pending') {
                return <Tag variant="danger" content={transaction.status} />;
              } else {
                return <Tag variant="dark" content={transaction.status} />;
              }
            })()}
          </>
        }
        variant="dark"
        content={
          <>
            <Tag variant="info" content={transaction.order_id} />{' '}
            <Tag variant="warning" content={<>₱{transaction.total}</>} />{' '}
          </>
        }
        footer={
          <>
            <Tag variant="dark" content={transaction.payment} />
          </>
        }
        date={
          <>
            <FontAwesomeIcon icon={faCalendarAlt} />{' '}
            <Suspense fallback="—">
              <Moment
                format="D MMM YYYY"
                date={transaction.createdAt}
                fromNow
              />
            </Suspense>
            {' | '}
            <FontAwesomeIcon icon={faHistory} />{' '}
            <Suspense fallback="—">
              <Moment fromNow date={transaction.updatedAt} />
            </Suspense>
          </>
        }
      />
    );
  };

  // * Removes duplicate properties | status
  const transactionStatus =
    data &&
    data
      .filter(
        (items, index, self) =>
          index === self.findIndex((deduped) => deduped.status === items.status)
      )
      // Sort items
      .reverse();

  // * Removes duplicate properties | payment
  const transactionPayment =
    data &&
    data
      .filter(
        (items, index, self) =>
          index ===
          self.findIndex((deduped) => deduped.payment === items.payment)
      )
      // Sort items
      .reverse();

  // * Filter transactions by status
  const StatusFilter = () => {
    return (
      <>
        {data && true ? (
          <>
            {data &&
              transactionStatus.map((transaction) => (
                <Tab.Pane
                  key={transaction.status}
                  eventKey={transaction.status}
                >
                  {/* TODO: Prevent header re-render */}
                  {data &&
                    data
                      .filter((pane) => pane.status === transaction.status)
                      .map((transactionByStatus) =>
                        TransactionCard(transactionByStatus)
                      )}
                </Tab.Pane>
              ))}
          </>
        ) : (
          <Loader />
        )}
      </>
    );
  };

  // * Filter transactions by payments
  const PaymentFilter = () => {
    return (
      <>
        {data && true ? (
          <>
            {data &&
              transactionPayment.map((transaction) => (
                <Tab.Pane
                  key={transaction.payment}
                  eventKey={transaction.payment}
                >
                  {data
                    .filter((pane) => pane.payment === transaction.payment)
                    .map((transactionByPayment) =>
                      TransactionCard(transactionByPayment)
                    )}
                </Tab.Pane>
              ))}
          </>
        ) : (
          <Loader />
        )}
      </>
    );
  };

  // * Display cards based on clicked transaction status/payment
  const TransactionCards = () => {
    return (
      <>
        <Modals />
        {/* Inventory Tab Controls */}
        <SearchControls
          add="Add Transaction"
          listView={props.view}
          modal={() => showAddModal(true)}
        />
        {/* Filtered Tables */}
        <Tab.Pane eventKey="default">
          {data && data.map((transaction) => TransactionCard(transaction))}
        </Tab.Pane>
        <StatusFilter />
        <PaymentFilter />
      </>
    );
  };

  return (
    <>
      <Categories
        main="Status"
        mainTabs={
          data &&
          transactionStatus.map((transaction) => (
            <Nav.Item key={transaction.status}>
              <Nav.Link eventKey={transaction.status}>
                {transaction.status}
              </Nav.Link>
            </Nav.Item>
          ))
        }
        secondary="Payment"
        secondaryTabs={
          data &&
          transactionPayment.map((transaction) => (
            <Nav.Item key={transaction.payment}>
              <Nav.Link eventKey={transaction.payment}>
                {transaction.payment}
              </Nav.Link>
            </Nav.Item>
          ))
        }
        content={<TransactionCards />}
      />
      <Notification
        delay={7000}
        title="Notice"
        time="System Admin"
        message="Card view currently has limited functionality compared to List/Table view."
      />
    </>
  );
}
