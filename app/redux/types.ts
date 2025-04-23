// Define Transaction interface
export interface Transaction {
  id: string | number;
  text: string;
  amount: number;
  date: string;
}

// Define State interface
export interface AppState {
  transactions: Transaction[];
}

// Define Action types
export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";

export type Action = 
  | { type: typeof ADD_TRANSACTION; payload: Transaction }
  | { type: typeof DELETE_TRANSACTION; payload: string | number };