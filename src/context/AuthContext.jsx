// AuthContext.jsx

import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)

  // Load user from localStorage
  useEffect(() => {

    const storedUser = localStorage.getItem("user")

    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }

  }, [])

  // Login Function
  const login = (email, password) => {

    const loggedInUser = {
      email,
      password
    }

    localStorage.setItem(
      "user",
      JSON.stringify(loggedInUser)
    )

    setUser(loggedInUser)
  }

  // Logout Function
  const logout = () => {

    localStorage.removeItem("user")

    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// Custom Hook
export const useAuth = () => {
  return useContext(AuthContext)
}