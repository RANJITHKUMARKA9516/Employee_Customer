import { Link } from "react-router-dom";

function EmployeeActions({
  id,
  onDelete,
}) {
  return (
    <div className="flex gap-2">
      <Link
        to={`/employees/edit/${id}`}
        className="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
      >
        Edit
      </Link>

      <button
        onClick={() => onDelete(id)}
        className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  );
}

export default EmployeeActions;