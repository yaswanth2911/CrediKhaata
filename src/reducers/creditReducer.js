// creditReducer.js

export const initialState = {
  customers: [],
  loans: [],
  repayments: []
}

const creditReducer = (state, action) => {

  switch (action.type) {

    // Add New Customer
    case "ADD_CUSTOMER":
      return {
        ...state,
        customers: [
          ...state.customers,
          action.payload
        ]
      }

    // Add New Loan
    case "ADD_LOAN":
      return {
        ...state,
        loans: [
          ...state.loans,
          action.payload
        ]
      }

    // Add Repayment
    case "ADD_REPAYMENT":
      return {
        ...state,
        repayments: [
          ...state.repayments,
          action.payload
        ]
      }

    // Delete Customer
    case "DELETE_CUSTOMER":
      return {
        ...state,
        customers: state.customers.filter(
          customer => customer.id !== action.payload
        )
      }

    // Delete Loan
    case "DELETE_LOAN":
      return {
        ...state,
        loans: state.loans.filter(
          loan => loan.id !== action.payload
        )
      }

    // Delete Repayment
    case "DELETE_REPAYMENT":
      return {
        ...state,
        repayments: state.repayments.filter(
          repayment => repayment.id !== action.payload
        )
      }

    // Reset All Data
    case "RESET_DATA":
      return initialState

    default:
      return state
  }
}

export default creditReducer