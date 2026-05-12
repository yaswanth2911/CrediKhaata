// mockData.js

export const customers = [
  {
    id: 1,
    name: "Ramesh Kumar",
    phone: "9876543210"
  },
  {
    id: 2,
    name: "Suresh Patel",
    phone: "9123456780"
  },
  {
    id: 3,
    name: "Anjali Sharma",
    phone: "9988776655"
  }
]

export const loans = [
  {
    id: 101,
    customerId: 1,
    item: "Rice Bag",
    amount: 3000,
    dueDate: "2026-05-20"
  },
  {
    id: 102,
    customerId: 1,
    item: "Cooking Oil",
    amount: 1500,
    dueDate: "2026-05-10"
  },
  {
    id: 103,
    customerId: 2,
    item: "School Uniform",
    amount: 2500,
    dueDate: "2026-05-25"
  },
  {
    id: 104,
    customerId: 3,
    item: "Tailoring Materials",
    amount: 4000,
    dueDate: "2026-05-15"
  }
]

export const repayments = [
  {
    id: 1001,
    loanId: 101,
    amount: 1000,
    date: "2026-05-05"
  },
  {
    id: 1002,
    loanId: 101,
    amount: 500,
    date: "2026-05-08"
  },
  {
    id: 1003,
    loanId: 102,
    amount: 500,
    date: "2026-05-09"
  },
  {
    id: 1004,
    loanId: 103,
    amount: 1000,
    date: "2026-05-11"
  }
]