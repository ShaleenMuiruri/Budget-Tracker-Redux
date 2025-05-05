import React from "react";
import Transaction from "./Transaction";
import { Transaction as TransactionType } from "../redux/types";
const TransactionsList = ({
  transactions,
  deleteTransaction,
}: {
  transactions: TransactionType[];
  deleteTransaction: (id: string | number) => void;
}) => {
  const sortedTransactions = [...transactions].sort((a: TransactionType, b: TransactionType) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
      return 0;
    }

    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div>
      <h3>Transactions</h3>
      <ul className="list">
        {sortedTransactions.map((transaction: TransactionType) => {
          return (
            <Transaction
              key={transaction.id}
              transaction={transaction}
              deleteTransaction={(id: string | number) => deleteTransaction(id)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TransactionsList;
