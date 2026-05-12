const LoanCard = ({ loan, repayments }) => {

  // Filter repayments for this loan
  const loanRepayments = repayments.filter(
    repayment => repayment.loanId === loan.id
  )

  // Calculate total paid
  const totalPaid = loanRepayments.reduce(
    (sum, repayment) => sum + Number(repayment.amount),
    0
  )

  // Remaining balance
  const remainingBalance = loan.amount - totalPaid

  // Check overdue
  const isOverdue =
    new Date(loan.dueDate) < new Date() &&
    remainingBalance > 0

  return (
    <div
      className={`border rounded-2xl p-5 shadow-md mb-4 ${
        isOverdue
          ? "border-red-400 bg-red-50"
          : "border-gray-200 bg-white"
      }`}
    >

      {/* Item Name */}
      <h2 className="text-xl font-bold text-gray-800 mb-3">
        {loan.item}
      </h2>

      {/* Loan Amount */}
      <p className="text-gray-700 mb-2">
        Loan Amount:
        <span className="font-semibold ml-2">
          ₹{loan.amount}
        </span>
      </p>

      {/* Due Date */}
      <p className="text-gray-700 mb-2">
        Due Date:
        <span className="font-semibold ml-2">
          {loan.dueDate}
        </span>
      </p>

      {/* Remaining Balance */}
      <p className="text-gray-700 mb-2">
        Remaining Balance:
        <span className="font-semibold ml-2">
          ₹{remainingBalance}
        </span>
      </p>

      {/* Status */}
      <div className="mt-4">
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            isOverdue
              ? "bg-red-100 text-red-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {isOverdue ? "Overdue 🔴" : "Active 🟢"}
        </span>
      </div>

      {/* Repayment History */}
      <div className="mt-5">
        <h3 className="text-lg font-semibold mb-2">
          Repayment History
        </h3>

        {loanRepayments.length > 0 ? (
          <div className="space-y-2">
            {loanRepayments.map(repayment => (
              <div
                key={repayment.id}
                className="flex justify-between bg-gray-100 px-3 py-2 rounded-lg"
              >
                <span>
                  ₹{repayment.amount}
                </span>

                <span className="text-gray-600">
                  {repayment.date}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">
            No repayments recorded
          </p>
        )}
      </div>
    </div>
  )
}

export default LoanCard