import { Link } from "react-router-dom";

function DepartmentActions({
  id,
  onDelete,
}) {
  return (
    <div className="flex gap-2">
      <Link
        to={`/departments/edit/${id}`}
        className="rounded-lg bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
      >
        Edit
      </Link>

      <button
        type="button"
        onClick={() => onDelete(id)}
        className="rounded-lg bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  );
}

export default DepartmentActions;