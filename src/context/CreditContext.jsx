// CreditContext.jsx

import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react"

const CreditContext = createContext()

export const CreditProvider = ({ children }) => {

  // Customers
  const [customers, setCustomers] = useState([])

  // Loans
  const [loans, setLoans] = useState([])

  // Repayments
  const [repayments, setRepayments] = useState([])

  // Load saved data
  useEffect(() => {

    const storedCustomers =
      JSON.parse(localStorage.getItem("customers")) || []

    const storedLoans =
      JSON.parse(localStorage.getItem("loans")) || []

    const storedRepayments =
      JSON.parse(localStorage.getItem("repayments")) || []

    setCustomers(storedCustomers)
    setLoans(storedLoans)
    setRepayments(storedRepayments)

  }, [])

  // Save customers
  useEffect(() => {
    localStorage.setItem(
      "customers",
      JSON.stringify(customers)
    )
  }, [customers])

  // Save loans
  useEffect(() => {
    localStorage.setItem(
      "loans",
      JSON.stringify(loans)
    )
  }, [loans])

  // Save repayments
  useEffect(() => {
    localStorage.setItem(
      "repayments",
      JSON.stringify(repayments)
    )
  }, [repayments])

  // Add Customer
  const addCustomer = (customer) => {
    setCustomers(prev => [...prev, customer])
  }

  // Add Loan
  const addLoan = (loan) => {
    setLoans(prev => [...prev, loan])
  }

  // Add Repayment
  const addRepayment = (repayment) => {
    setRepayments(prev => [...prev, repayment])
  }

  return (
    <CreditContext.Provider
      value={{
        customers,
        loans,
        repayments,
        addCustomer,
        addLoan,
        addRepayment
      }}
    >
      {children}
    </CreditContext.Provider>
  )
}

// Custom Hook
export const useCredit = () => {
  return useContext(CreditContext)
}