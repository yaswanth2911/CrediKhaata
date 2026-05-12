// overdueChecker.js

const overdueChecker = (dueDate, balance) => {

  const today = new Date()

  const loanDueDate = new Date(dueDate)

  // Check overdue condition
  return (
    today > loanDueDate &&
    balance > 0
  )
}

export default overdueChecker