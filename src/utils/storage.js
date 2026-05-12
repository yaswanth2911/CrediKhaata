// storage.js

// Save Data
export const saveData = (key, data) => {

  localStorage.setItem(
    key,
    JSON.stringify(data)
  )
}

// Load Data
export const loadData = (key) => {

  const data = localStorage.getItem(key)

  return data ? JSON.parse(data) : []
}

// Remove Data
export const removeData = (key) => {

  localStorage.removeItem(key)
}

// Clear All App Data
export const clearAllData = () => {

  localStorage.removeItem("customers")
  localStorage.removeItem("loans")
  localStorage.removeItem("repayments")
}