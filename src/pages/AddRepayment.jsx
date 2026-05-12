// AddRepayment.jsx

import { useState } from "react"
import Navbar from "../components/Navbar"

const AddRepayment = ({
  loans,
  repayments,
  addRepayment
}) => {

  const [loanId, setLoanId] = useState("")
  const [amount, setAmount] = useState("")
  const [date, setDate] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!loanId || !amount || !date) {
      setMessage("All fields are required")
      return
    }

    const selectedLoan = loans.find(
      loan => loan.id === Number(loanId)
    )

    const loanRepayments = repayments.filter(
      repayment => repayment.loanId === Number(loanId)
    )

    const totalPaid = loanRepayments.reduce(
      (sum, repayment) => sum + repayment.amount,
      0
    )

    const remainingBalance =
      selectedLoan.amount - totalPaid

    if (Number(amount) > remainingBalance) {
      setMessage("Repayment exceeds balance")
      return
    }

    const newRepayment = {
      id: Date.now(),
      loanId: Number(loanId),
      amount: Number(amount),
      date
    }

    addRepayment(newRepayment)

    setMessage("Repayment recorded successfully")

    setLoanId("")
    setAmount("")
    setDate("")
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-6 max-w-lg mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Add Repayment
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
            value={loanId}
            onChange={(e) => setLoanId(e.target.value)}
          >
            <option value="">Select Loan</option>

            {loans.map(loan => (
              <option
                key={loan.id}
                value={loan.id}
              >
                {loan.item} - ₹{loan.amount}
              </option>
            ))}

          </select>

          <input
            type="number"
            placeholder="Repayment Amount"
            className="w-full border p-3 rounded-lg mb-4"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <input
            type="date"
            className="w-full border p-3 rounded-lg mb-4"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Record Repayment
          </button>

        </form>
      </div>
    </div>
  )
}

export default AddRepayment