import React from 'react'
import { Transaction as TransactionType } from '../redux/types';

const IncomeExpense = ({transactions}: {transactions: TransactionType[]}) => {
    const amount = transactions.map((transaction: TransactionType) => Number(transaction.amount));
    const income = amount
      .filter((item: number) => item > 0)
      .reduce((acc: number, item: number) => acc + item, 0);
    const expenses = amount
      .filter((item: number) => item < 0)
      .reduce((acc: number, item: number) => acc + item, 0);
    return (
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expenses</h4>
          <p className="money minus">${expenses}</p>
        </div>
      </div>
    );
}


export default IncomeExpense
