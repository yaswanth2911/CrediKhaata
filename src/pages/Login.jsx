// Login.jsx

import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError("All fields are required")
      return
    }

    const user = {
      email,
      password
    }

    localStorage.setItem("user", JSON.stringify(user))

    navigate("/")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
      >

        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        {error && (
          <p className="text-red-500 mb-4">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Enter email"
          className="w-full border p-3 rounded-lg mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          className="w-full border p-3 rounded-lg mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>

        <p className="mt-4 text-center">
          Don't have an account?
          <Link
            to="/signup"
            className="text-blue-600 ml-1"
          >
            Sign Up
          </Link>
        </p>

      </form>
    </div>
  )
}

export default Login