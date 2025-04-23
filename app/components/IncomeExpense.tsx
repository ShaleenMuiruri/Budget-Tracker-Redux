import React from 'react'

const IncomeExpense = ({transactions}: {transactions: any}) => {
    const amount = transactions.map((transaction: any) => Number(transaction.amount));
    const income = amount
      .filter((item: any) => item > 0)
      .reduce((acc: any, item: any) => acc + item, 0);
    const expenses = amount
      .filter((item: any) => item < 0)
      .reduce((acc: any, item: any) => acc + item, 0);
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
