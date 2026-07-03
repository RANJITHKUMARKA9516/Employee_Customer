function RecentEmployees({ employees }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-semibold">
        Recent Employees
      </h2>

      {employees.length === 0 ? (
        <p className="text-gray-500">
          No employees found.
        </p>
      ) : (
        <div className="space-y-4">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="flex items-center justify-between border-b pb-3"
            >
              <div>
                <h3 className="font-semibold">
                  {employee.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {employee.department_name}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-sm ${
                  employee.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {employee.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentEmployees;