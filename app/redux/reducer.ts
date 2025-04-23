import { AppState, Action, ADD_TRANSACTION, DELETE_TRANSACTION } from "./types";

const initialState: AppState = {
  transactions: [],
};

const expenseTrackerReducer = (
  state = initialState,
  action: Action
): AppState => {
  console.log(action, "action");

  switch (action.type) {
    case ADD_TRANSACTION:
      console.log(action.payload, "action.payload, ADDING A NEW TRANSACTION");
      return {
        ...state, //copy of the current state
        transactions: [action.payload, ...state.transactions], //add the new transaction to the top of the list
      };
    case DELETE_TRANSACTION:
      return {
        ...state,//copy of the current state
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload //filter out the transaction with the id that is being deleted
        ),
      };
    default:
      return state;
  }
};

export default expenseTrackerReducer;
