import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {

  // Get logged in user from localStorage
  const user = JSON.parse(localStorage.getItem("user"))

  // Redirect if user is not logged in
  if (!user) {
    return <Navigate to="/login" replace />
  }

  // Show protected page
  return children
}

export default ProtectedRoute