import EmployeeActions from "./EmployeeActions";

function EmployeeRow({ employee }) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-4">{employee.id}</td>

      <td className="p-4 font-medium">
        {employee.name}
      </td>

      <td className="p-4">
        {employee.email}
      </td>

      <td className="p-4">
        {employee.department}
      </td>

      <td className="p-4">
        <span
          className={`rounded-full px-3 py-1 text-sm ${
            employee.status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {employee.status}
        </span>
      </td>

      <td className="p-4">
        <EmployeeActions />
      </td>
    </tr>
  );
}

export default EmployeeRow;