// calculateBalance.js

const calculateBalance = (loanAmount, repayments) => {

  // Total paid amount
  const totalPaid = repayments.reduce(
    (sum, repayment) => sum + Number(repayment.amount),
    0
  )

  // Remaining balance
  const remainingBalance = loanAmount - totalPaid

  return remainingBalance
}

export default calculateBalance