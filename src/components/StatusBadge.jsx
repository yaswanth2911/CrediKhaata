const StatusBadge = ({ isOverdue }) => {

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-semibold ${
        isOverdue
          ? "bg-red-100 text-red-600"
          : "bg-green-100 text-green-600"
      }`}
    >
      {isOverdue ? "Overdue 🔴" : "Up-to-date 🟢"}
    </span>
  )
}

export default StatusBadge