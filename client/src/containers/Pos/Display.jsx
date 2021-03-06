/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense, useState } from 'react';
import Checkout from '../../components/Pos/Checkout';

const PosModals = lazy(() => import('./Modals'));

export default function Display() {
  const [checkout, showCheckout] = useState(false);
  const [receipt, showReceipt] = useState(false);
  const [clear, clearItems] = useState(false);

  const Modals = () => {
    return (
      <Suspense fallback="">
        <PosModals
          checkoutModal={checkout}
          receiptModal={receipt}
          clearModal={clear}
          checkoutCard={() => showCheckout(false)}
          checkoutCash={() => showCheckout(false)}
          checkoutHide={() => showCheckout(false)}
          receiptHide={() => showReceipt(false)}
          receiptPrint={() => showReceipt(false)}
          clearHide={() => clearItems(false)}
          clearSubmit={() => clearItems(false)}
        />
      </Suspense>
    );
  };

  return (
    <>
      <Modals />
      <Checkout
        checkout={() => showCheckout(true)}
        print={() => showReceipt(true)}
        clear={() => clearItems(true)}
      />
    </>
  );
}
