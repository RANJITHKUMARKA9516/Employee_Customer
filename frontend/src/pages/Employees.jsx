import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SearchBar from "../components/employees/SearchBar";
import EmployeeTable from "../components/employees/EmployeeTable";
import { getEmployees } from "../services/employeeService";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadEmployees();
  }, []);

  async function loadEmployees() {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (error) {
      console.error(error);
    }
  }

  const filteredEmployees = employees.filter((employee) => {
    const search = searchTerm.toLowerCase();

    return (
      employee.name.toLowerCase().includes(search) ||
      employee.email.toLowerCase().includes(search) ||
      employee.department.toLowerCase().includes(search)
    );
  });

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
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
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