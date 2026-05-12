// AddLoan.jsx

import { useState } from "react"
import Navbar from "../components/Navbar"

const AddLoan = ({ customers, addLoan }) => {

  const [customerId, setCustomerId] = useState("")
  const [item, setItem] = useState("")
  const [amount, setAmount] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!customerId || !item || !amount || !dueDate) {
      setMessage("All fields are required")
      return
    }

    const newLoan = {
      id: Date.now(),
      customerId: Number(customerId),
      item,
      amount: Number(amount),
      dueDate
    }

    addLoan(newLoan)

    setMessage("Loan added successfully")

    setCustomerId("")
    setItem("")
    setAmount("")
    setDueDate("")
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-6 max-w-lg mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Add Loan
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-md"
        >

          {message && (
            <p className="mb-4 text-blue-600">
              {message}
            </p>
          )}

          <select
            className="w-full border p-3 rounded-lg mb-4"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
          >
            <option value="">Select Customer</option>

            {customers.map(customer => (
              <option
                key={customer.id}
                value={customer.id}
              >
                {customer.name}
              </option>
            ))}

          </select>

          <input
            type="text"
            placeholder="Item Sold"
            className="w-full border p-3 rounded-lg mb-4"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />

          <input
            type="number"
            placeholder="Loan Amount"
            className="w-full border p-3 rounded-lg mb-4"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <input
            type="date"
            className="w-full border p-3 rounded-lg mb-4"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Add Loan
          </button>

        </form>
      </div>
    </div>
  )
}

export default AddLoan