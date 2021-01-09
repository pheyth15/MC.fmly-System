/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Tab from 'react-bootstrap/Tab';
import Header from '../../components/Transactions/table/Header';
import Row from '../../components/Transactions/table/Row';
import { TransactionCard } from '../../components/Transactions/Card';
import { transactionStatus } from './Filters';

// * Filter transactions to status
export default function ViewStatus({ data, view, edit, del, invoice }) {
  return (
    <>
      {transactionStatus(data).map((transaction) => (
        <Tab.Pane key={transaction.status} eventKey={transaction.status}>
          {view === 'list' ? (
            <Header
              data={data
                .filter((pane) => pane.status === transaction.status)
                .map((transactionByPayment) =>
                  Row(transactionByPayment, edit, del, invoice)
                )}
            />
          ) : (
            TransactionCard(transaction, edit, del, invoice)
          )}
        </Tab.Pane>
      ))}
    </>
  );
}
