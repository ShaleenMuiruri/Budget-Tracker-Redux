import React from "react";

export const Balance = ({ transactions }: { transactions: any }) => {

  const amount = transactions.map(
    (transaction: any) => transaction.amount
  );

  const total = amount.reduce((acc: number, item: number) => acc + item, 0);

  return (
    <>
      <h4>Balance</h4>
      <div>$ {total}</div>
    </>
  );
};

