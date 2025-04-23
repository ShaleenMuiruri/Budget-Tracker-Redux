import { ADD_TRANSACTION, DELETE_TRANSACTION, Transaction } from "./types"

export const addTransaction = (transaction: Transaction) => ({
    type: ADD_TRANSACTION,
    payload: transaction
})

export const deleteTransaction = (transactionId: string | number) => ({
    type: DELETE_TRANSACTION,
    payload: transactionId
})