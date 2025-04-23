import React from "react";
import Transaction from "./Transaction";

const TransactionsList = ({
  transactions,
  deleteTransaction,
}: {
  transactions: any;
  deleteTransaction: any;
}) => {
  const sortedTransactions = [...transactions].sort((a: any, b: any) => {
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
        {sortedTransactions.map((transaction: any) => {
          return (
            <Transaction
              key={transaction.id}
              transaction={transaction}
              deleteTransaction={(id: any) => deleteTransaction(id)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TransactionsList;
