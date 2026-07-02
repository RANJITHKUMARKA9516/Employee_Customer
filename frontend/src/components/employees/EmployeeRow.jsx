import EmployeeActions from "./EmployeeActions";

function EmployeeRow({
  employee,
  onDelete,
}) {
  const imageUrl = employee.photo
    ? `http://127.0.0.1:8000${employee.photo}`
    : "https://placehold.co/48x48?text=EMP";

  return (
    <tr className="border-b transition hover:bg-slate-50">
      {/* Employee */}
      <td className="p-4">
        <div className="flex items-center gap-3">
          <img
            src={imageUrl}
            alt={employee.name}
            className="h-12 w-12 rounded-full border object-cover"
          />

          <div>
            <p className="font-semibold text-slate-800">
              {employee.name}
            </p>

            <p className="text-sm text-slate-500">
              #{employee.id}
            </p>
          </div>
        </div>
      </td>

      {/* Email */}
      <td className="p-4">
        {employee.email}
      </td>

      {/* Phone */}
      <td className="p-4">
        {employee.phone || "-"}
      </td>

      {/* Department */}
      <td className="p-4">
        {employee.department}
      </td>

      {/* Designation */}
      <td className="p-4">
        {employee.designation}
      </td>

      {/* Salary */}
      <td className="p-4">
        ₹ {employee.salary || 0}
      </td>

      {/* Joining Date */}
      <td className="p-4">
        {employee.joining_date || "-"}
      </td>

      {/* Status */}
      <td className="p-4">
        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            employee.status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {employee.status}
        </span>
      </td>

      {/* Actions */}
      <td className="p-4">
        <EmployeeActions
          id={employee.id}
          onDelete={onDelete}
        />
      </td>
    </tr>
  );
}

export default EmployeeRow;