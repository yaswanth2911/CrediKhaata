// App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import CustomerDetails from "./pages/CustomerDetails"
import AddCustomer from "./pages/AddCustomer"
import AddLoan from "./pages/AddLoan"
import AddRepayment from "./pages/AddRepayment"

import ProtectedRoute from "./components/ProtectedRoute"

import {
  CreditProvider,
  useCredit
} from "./context/CreditContext"

const AppRoutes = () => {

  const {
    customers,
    loans,
    repayments,
    addCustomer,
    addLoan,
    addRepayment
  } = useCredit()

  return (
    <Routes>

      {/* Login Route */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* Dashboard */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard
              customers={customers}
              loans={loans}
              repayments={repayments}
            />
          </ProtectedRoute>
        }
      />

      {/* Customer Details */}
      <Route
        path="/customer/:id"
        element={
          <ProtectedRoute>
            <CustomerDetails
              customers={customers}
              loans={loans}
              repayments={repayments}
            />
          </ProtectedRoute>
        }
      />

      {/* Add Customer */}
      <Route
        path="/add-customer"
        element={
          <ProtectedRoute>
            <AddCustomer
              addCustomer={addCustomer}
            />
          </ProtectedRoute>
        }
      />

      {/* Add Loan */}
      <Route
        path="/add-loan"
        element={
          <ProtectedRoute>
            <AddLoan
              customers={customers}
              addLoan={addLoan}
            />
          </ProtectedRoute>
        }
      />

      {/* Add Repayment */}
      <Route
        path="/add-repayment"
        element={
          <ProtectedRoute>
            <AddRepayment
              loans={loans}
              repayments={repayments}
              addRepayment={addRepayment}
            />
          </ProtectedRoute>
        }
      />

    </Routes>
  )
}

const App = () => {

  return (
    <CreditProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </CreditProvider>
  )
}

export default App