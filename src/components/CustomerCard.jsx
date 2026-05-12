import { Link } from "react-router-dom"

const CustomerCard = ({ customer, loans, repayments }) => {

  // Customer loans
  const customerLoans = loans.filter(
    loan => loan.customerId === customer.id
  )

  // Calculate outstanding balance
  const outstandingBalance = customerLoans.reduce((total, loan) => {

    const loanRepayments = repayments.filter(
      repayment => repayment.loanId === loan.id
    )

    const totalPaid = loanRepayments.reduce(
      (sum, repayment) => sum + Number(repayment.amount),
      0
    )

    return total + (loan.amount - totalPaid)

  }, 0)

  // Find overdue loans
  const overdueLoans = customerLoans.filter(loan => {

    const loanRepayments = repayments.filter(
      repayment => repayment.loanId === loan.id
    )

    const totalPaid = loanRepayments.reduce(
      (sum, repayment) => sum + Number(repayment.amount),
      0
    )

    const remainingBalance = loan.amount - totalPaid

    return (
      new Date(loan.dueDate) < new Date() &&
      remainingBalance > 0
    )
  })

  // Customer status
  const isOverdue = overdueLoans.length > 0

  // Next due date
  const unpaidLoans = customerLoans.filter(loan => {

    const loanRepayments = repayments.filter(
      repayment => repayment.loanId === loan.id
    )

    const totalPaid = loanRepayments.reduce(
      (sum, repayment) => sum + Number(repayment.amount),
      0
    )

    return loan.amount - totalPaid > 0
  })

  const nextDueDate =
    unpaidLoans.length > 0
      ? unpaidLoans.sort(
          (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
        )[0].dueDate
      : "No dues"

  return (
    <Link to={`/customer/${customer.id}`}>
      <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-xl transition duration-300 border">

        {/* Customer Name */}
        <h2 className="text-xl font-bold text-gray-800 mb-3">
          {customer.name}
        </h2>

        {/* Outstanding Balance */}
        <p className="text-gray-700 mb-2">
          Outstanding Balance:
          <span className="font-semibold ml-2">
            ₹{outstandingBalance}
          </span>
        </p>

        {/* Next Due Date */}
        <p className="text-gray-700 mb-2">
          Next Due Date:
          <span className="font-semibold ml-2">
            {nextDueDate}
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
            {isOverdue ? "Overdue 🔴" : "Up-to-date 🟢"}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default CustomerCard