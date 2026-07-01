import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import SearchBar from "../components/employees/SearchBar";
import EmployeeTable from "../components/employees/EmployeeTable";
import employeeData from "../data/employeeData";

function Employees() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    if (!search) return employeeData;

    return employeeData.filter((employee) =>
      [employee.name, employee.email, employee.department].some((field) =>
        field.toLowerCase().includes(search)
      )
    );
  }, [searchTerm]);

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Employees</h1>
          <p className="mt-2 text-gray-500">
            Manage all employees in your organization.
          </p>
        </div>

        <Link
          to="/employees/add"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
        >
          + Add Employee
        </Link>
      </div>

      <div className="mb-6">
        <SearchBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <EmployeeTable employees={filteredEmployees} />
    </>
  );
}

export default Employees;