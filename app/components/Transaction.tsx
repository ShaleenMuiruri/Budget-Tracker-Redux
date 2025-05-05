import React from 'react'
import { Transaction as TransactionType } from '../redux/types';

const Transaction = ({ transaction, deleteTransaction }: { transaction: TransactionType, deleteTransaction: (id: string | number) => void }) => {
    const sign = transaction.amount >= 0 ? "+" : "-";

    return (
        <li className={transaction.amount >= 0 ? "plus" : "minus"}>
          {transaction.text}
          <span>
            <span style={{ marginRight: 8 }}>{transaction.date}</span>
            {sign}${Math.abs(transaction.amount)}
          </span>
          <button
            className="delete-btn"
            onClick={() => deleteTransaction(transaction.id)}
          >
            X
          </button>
        </li>
      );
}


export default Transaction