function EmployeeActions() {
  return (
    <div className="flex gap-2">
      <button className="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700">
        Edit
      </button>

      <button className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700">
        Delete
      </button>
    </div>
  );
}

export default EmployeeActions;