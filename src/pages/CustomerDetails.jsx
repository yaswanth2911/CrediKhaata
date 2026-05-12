// CustomerDetails.jsx

import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import LoanCard from "../components/LoanCard"

const CustomerDetails = ({
  customers,
  loans,
  repayments
}) => {

  const { id } = useParams()

  const customer = customers.find(
    customer => customer.id === Number(id)
  )

  const customerLoans = loans.filter(
    loan => loan.customerId === Number(id)
  )

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-6">

        <h1 className="text-3xl font-bold mb-6">
          {customer?.name}
        </h1>

        {customerLoans.length > 0 ? (
          customerLoans.map(loan => (
            <LoanCard
              key={loan.id}
              loan={loan}
              repayments={repayments}
            />
          ))
        ) : (
          <p>No loans available</p>
        )}

      </div>
    </div>
  )
}

export default CustomerDetails