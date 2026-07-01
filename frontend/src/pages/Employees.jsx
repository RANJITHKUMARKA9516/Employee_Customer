import { useMemo, useState } from "react";

import SearchBar from "../components/employees/SearchBar";
import EmployeeTable from "../components/employees/EmployeeTable";
import employeeData from "../data/employeeData";

function Employees() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = useMemo(() => {
    return employeeData.filter((employee) => {
      const search = searchTerm.toLowerCase();

      return (
        employee.name.toLowerCase().includes(search) ||
        employee.email.toLowerCase().includes(search) ||
        employee.department.toLowerCase().includes(search)
      );
    });
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

        <button className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
          + Add Employee
        </button>
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