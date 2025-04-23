import React from 'react'

const Transaction = ({ transaction, deleteTransaction }: { transaction: any, deleteTransaction: any }) => {
    let sign = transaction.amount >= 0 ? "+" : "-";

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