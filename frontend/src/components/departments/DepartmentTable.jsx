import DepartmentRow from "./DepartmentRow";

function DepartmentTable({
  departments,
  onDelete,
}) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-4 text-left">ID</th>
            <th className="p-4 text-left">Department</th>
            <th className="p-4 text-left">Description</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {departments.length === 0 ? (
            <tr>
              <td
                colSpan="4"
                className="p-10 text-center text-gray-500"
              >
                No departments found.
              </td>
            </tr>
          ) : (
            departments.map((department) => (
              <DepartmentRow
                key={department.id}
                department={department}
                onDelete={onDelete}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DepartmentTable;