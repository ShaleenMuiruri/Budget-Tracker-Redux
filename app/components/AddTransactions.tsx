import React, { useState } from 'react'
import { Transaction } from '../redux/types'

interface AddTransactionsProps {
  addTransaction: (transaction: Transaction) => void;
  id: number;
}

export const AddTransactions: React.FC<AddTransactionsProps> = ({ addTransaction, id }) => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState("")
    const onSubmit = (event: any) => {
        event.preventDefault()
        const newTransaction = {
            id: id,
            text: text,
            amount: amount,
            date: date
        }
        console.log(newTransaction, "newTransaction")
        addTransaction(newTransaction)
        setText("")
        setAmount(0)
        setDate("")
    }
  return (
    <>
    <h3>Add Transaction</h3>
    <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Text</label>
          <input value={text} onChange={(event) => setText(event.target.value)} placeholder="Enter Text..." type="text" />
        </div>
        <div className="form-control">
          <label>Amount</label>
            <input value={amount} onChange={(event) => setAmount(Number(event.target.value))} placeholder="Enter Amount..." type="number" />
        </div>
        <div className="form-control">
          <label>Date</label>
          <input value={date} onChange={(event) => setDate(event.target.value)} placeholder="Enter Amount..." type="date" />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
      </>
  )
}

