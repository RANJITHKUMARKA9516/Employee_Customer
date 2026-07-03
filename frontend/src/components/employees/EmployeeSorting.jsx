function EmployeeSorting({
  sortBy,
  setSortBy,
}) {
  return (
    <div className="mb-6 rounded-xl bg-white p-6 shadow">
      <label className="mb-2 block font-medium">
        Sort Employees
      </label>

      <select
        value={sortBy}
        onChange={(e) =>
          setSortBy(e.target.value)
        }
        className="w-full rounded-lg border p-3 md:w-80"
      >
        <option value="">
          Default
        </option>

        <option value="name-asc">
          Name (A-Z)
        </option>

        <option value="name-desc">
          Name (Z-A)
        </option>

        <option value="salary-asc">
          Salary (Low → High)
        </option>

        <option value="salary-desc">
          Salary (High → Low)
        </option>

        <option value="joining-new">
          Joining Date (Newest)
        </option>

        <option value="joining-old">
          Joining Date (Oldest)
        </option>
      </select>
    </div>
  );
}

export default EmployeeSorting;