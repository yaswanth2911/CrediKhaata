const RepaymentTable = ({ repayments }) => {

  return (
    <div className="bg-white shadow-md rounded-2xl p-5 overflow-x-auto">

      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Repayment History
      </h2>

      {repayments.length > 0 ? (
        <table className="w-full border-collapse">

          {/* Table Head */}
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">S.No</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {repayments.map((repayment, index) => (
              <tr
                key={repayment.id}
                className="border-b hover:bg-gray-50"
              >

                {/* Serial Number */}
                <td className="p-3">
                  {index + 1}
                </td>

                {/* Repayment Amount */}
                <td className="p-3 font-medium">
                  ₹{repayment.amount}
                </td>

                {/* Repayment Date */}
                <td className="p-3 text-gray-600">
                  {repayment.date}
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      ) : (
        <p className="text-gray-500">
          No repayment records found
        </p>
      )}
    </div>
  )
}

export default RepaymentTable