import EmployeeRow from "./EmployeeRow";

function EmployeeTable({
  employees,
  onDelete,
}) {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow-md">
      <table className="min-w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-4 text-left">Employee</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Phone</th>
            <th className="p-4 text-left">Department</th>
            <th className="p-4 text-left">Designation</th>
            <th className="p-4 text-left">Salary</th>
            <th className="p-4 text-left">Joining Date</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td
                colSpan="9"
                className="p-10 text-center text-slate-500"
              >
                No employees found.
              </td>
            </tr>
          ) : (
            employees.map((employee) => (
              <EmployeeRow
                key={employee.id}
                employee={employee}
                onDelete={onDelete}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;