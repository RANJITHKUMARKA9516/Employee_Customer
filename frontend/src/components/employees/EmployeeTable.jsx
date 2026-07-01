import EmployeeRow from "./EmployeeRow";

function EmployeeTable({ employees }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-4 text-left">ID</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Department</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                className="p-10 text-center text-gray-500"
              >
                No employees found.
              </td>
            </tr>
          ) : (
            employees.map((employee) => (
              <EmployeeRow
                key={employee.id}
                employee={employee}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;