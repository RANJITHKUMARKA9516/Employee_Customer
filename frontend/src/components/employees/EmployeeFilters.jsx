function EmployeeFilters({
  searchTerm,
  setSearchTerm,
  departments,
  selectedDepartment,
  setSelectedDepartment,
  selectedStatus,
  setSelectedStatus,
}) {
  return (
    <div className="mb-6 grid gap-4 rounded-xl bg-white p-6 shadow md:grid-cols-3">
      {/* Search */}
      <div>
        <label className="mb-2 block font-medium">
          Search
        </label>

        <input
          type="text"
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          placeholder="Search employee..."
          className="w-full rounded-lg border p-3"
        />
      </div>

      {/* Department */}
      <div>
        <label className="mb-2 block font-medium">
          Department
        </label>

        <select
          value={selectedDepartment}
          onChange={(e) =>
            setSelectedDepartment(e.target.value)
          }
          className="w-full rounded-lg border p-3"
        >
          <option value="">
            All Departments
          </option>

          {departments.map((department) => (
            <option
              key={department.id}
              value={department.id}
            >
              {department.name}
            </option>
          ))}
        </select>
      </div>

      {/* Status */}
      <div>
        <label className="mb-2 block font-medium">
          Status
        </label>

        <select
          value={selectedStatus}
          onChange={(e) =>
            setSelectedStatus(e.target.value)
          }
          className="w-full rounded-lg border p-3"
        >
          <option value="">
            All Status
          </option>

          <option value="Active">
            Active
          </option>

          <option value="Inactive">
            Inactive
          </option>
        </select>
      </div>
    </div>
  );
}

export default EmployeeFilters;