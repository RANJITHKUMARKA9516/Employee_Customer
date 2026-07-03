import DepartmentActions from "./DepartmentActions";

function DepartmentRow({ department, onDelete }) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-4">{department.id}</td>

      <td className="p-4 font-medium">
        {department.name}
      </td>

      <td className="p-4">
        {department.description}
      </td>

      <td className="p-4">
        <DepartmentActions
          id={department.id}
          onDelete={onDelete}
        />
      </td>
    </tr>
  );
}

export default DepartmentRow;