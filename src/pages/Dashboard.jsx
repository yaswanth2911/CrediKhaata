// Dashboard.jsx

import Navbar from "../components/Navbar"
import CustomerCard from "../components/CustomerCard"

const Dashboard = ({ customers, loans, repayments }) => {

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-6">

        <h1 className="text-3xl font-bold mb-6">
          Dashboard
        </h1>

        {customers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {customers.map(customer => (
              <CustomerCard
                key={customer.id}
                customer={customer}
                loans={loans}
                repayments={repayments}
              />
            ))}

          </div>
        ) : (
          <p>No customers found</p>
        )}

      </div>
    </div>
  )
}

export default Dashboard