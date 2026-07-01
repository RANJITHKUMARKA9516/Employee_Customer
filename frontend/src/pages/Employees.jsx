import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import SearchBar from "../components/employees/SearchBar";
import EmployeeTable from "../components/employees/EmployeeTable";
import ConfirmModal from "../components/common/ConfirmModal";

import {
  getEmployees,
  deleteEmployee,
} from "../services/employeeService";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

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

  function handleDeleteClick(id) {
    setSelectedEmployeeId(id);
    setIsModalOpen(true);
  }

  async function handleConfirmDelete() {
    try {
      await deleteEmployee(selectedEmployeeId);

      setIsModalOpen(false);

      setSelectedEmployeeId(null);

      loadEmployees();
    } catch (error) {
      console.error(error);
    }
  }

  function handleCancelDelete() {
    setIsModalOpen(false);
    setSelectedEmployeeId(null);
  }

  const filteredEmployees = useMemo(() => {
    const search = searchTerm.toLowerCase();

    return employees.filter((employee) => {
      return (
        employee.name.toLowerCase().includes(search) ||
        employee.email.toLowerCase().includes(search) ||
        employee.department.toLowerCase().includes(search)
      );
    });
  }, [employees, searchTerm]);

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">
            Employees
          </h1>

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

      <EmployeeTable
        employees={filteredEmployees}
        onDelete={handleDeleteClick}
      />

      <ConfirmModal
        isOpen={isModalOpen}
        title="Delete Employee"
        message="Are you sure you want to delete this employee?"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </>
  );
}

export default Employees;