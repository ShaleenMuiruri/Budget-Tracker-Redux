import React from "react";
import { Transaction as TransactionType } from '../redux/types';

export const Balance = ({ transactions }: { transactions: TransactionType[] }) => {

  const amount = transactions.map(
    (transaction: TransactionType) => transaction.amount
  );

  const total = amount.reduce((acc: number, item: number) => acc + item, 0);

  return (
    <>
      <h4>Balance</h4>
      <div>$ {total}</div>
    </>
  );
};

