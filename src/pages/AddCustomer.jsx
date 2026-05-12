// AddCustomer.jsx

import { useState } from "react"
import Navbar from "../components/Navbar"

const AddCustomer = ({ addCustomer }) => {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !phone) {
      setMessage("All fields are required")
      return
    }

    const newCustomer = {
      id: Date.now(),
      name,
      phone
    }

    addCustomer(newCustomer)

    setMessage("Customer added successfully")

    setName("")
    setPhone("")
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-6 max-w-lg mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Add Customer
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-md"
        >

          {message && (
            <p className="mb-4 text-blue-600">
              {message}
            </p>
          )}

          <input
            type="text"
            placeholder="Customer Name"
            className="w-full border p-3 rounded-lg mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg mb-4"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Add Customer
          </button>

        </form>
      </div>
    </div>
  )
}

export default AddCustomer