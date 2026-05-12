import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("user")
    navigate("/login")
  }

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
        CrediKhaata
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-4">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Dashboard
        </Link>

        <Link
          to="/add-customer"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Add Customer
        </Link>

        <Link
          to="/add-loan"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Add Loan
        </Link>

        <Link
          to="/add-repayment"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Add Repayment
        </Link>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar