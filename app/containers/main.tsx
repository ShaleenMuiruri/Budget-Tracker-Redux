import React from "react";
import { connect } from "react-redux";
import { AddTransactions } from "../components/AddTransactions";
import { Balance } from "../components/BudgetBalance";
import { addTransaction, deleteTransaction } from "../redux/actions";
import { Transaction } from "../redux/types";
import TransactionsList from "../components/TransactionsList";
import IncomeExpense from "../components/IncomeExpense";
export const Main = ({
  transactions,
  addTransaction,
  deleteTransaction,
}: {
  transactions: any;
  addTransaction: any;
  deleteTransaction: any;
}) => {
  console.log(transactions, "transactions in Main");

  return (
    <div className="container">
      <Balance transactions={transactions} />
      <IncomeExpense transactions={transactions} />
      <TransactionsList
        transactions={transactions}
        deleteTransaction={(id: any) => deleteTransaction(id)}
      />
      <AddTransactions
        addTransaction={(transaction: Transaction) =>
          addTransaction(transaction)
        }
        id={transactions[0] ? transactions[0].id + 1 : 1}
      />
    </div>
  );
};

// mapStateToProps is used to acceess the saved redux states from the redux store
const mapStateToProps = (state: { transactions: any }) => ({
  transactions: state.transactions,
});

// mapDispatchToProps is used to used to dispatch the redux actions
const mapDispatchToProps = (dispatch: any) => ({
  addTransaction: (transaction: any) => dispatch(addTransaction(transaction)),
  deleteTransaction: (id: string | number) => dispatch(deleteTransaction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
