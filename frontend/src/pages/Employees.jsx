import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeExport from "../components/employees/EmployeeExport";

import EmployeeTable from "../components/employees/EmployeeTable";
import EmployeeFilters from "../components/employees/EmployeeFilters";
import EmployeeSorting from "../components/employees/EmployeeSorting";
import ConfirmModal from "../components/common/ConfirmModal";
import Pagination from "../components/common/Pagination";

import {
  getEmployees,
  deleteEmployee,
} from "../services/employeeService";

import { getDepartments } from "../services/departmentService";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [sortBy, setSortBy] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const employeesPerPage = 10;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

  useEffect(() => {
    loadEmployees();
    loadDepartments();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedDepartment, selectedStatus, sortBy]);

  async function loadEmployees() {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function loadDepartments() {
    try {
      const data = await getDepartments();
      setDepartments(data);
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

  // Filter Employees
  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const matchesSearch =
        employee.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        employee.email
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesDepartment =
        selectedDepartment === "" ||
        employee.department === Number(selectedDepartment);

      const matchesStatus =
        selectedStatus === "" ||
        employee.status === selectedStatus;

      return (
        matchesSearch &&
        matchesDepartment &&
        matchesStatus
      );
    });
  }, [
    employees,
    searchTerm,
    selectedDepartment,
    selectedStatus,
  ]);

  // Sort Employees
  const sortedEmployees = useMemo(() => {
    const data = [...filteredEmployees];

    switch (sortBy) {
      case "name-asc":
        return data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

      case "name-desc":
        return data.sort((a, b) =>
          b.name.localeCompare(a.name)
        );

      case "salary-asc":
        return data.sort(
          (a, b) => Number(a.salary) - Number(b.salary)
        );

      case "salary-desc":
        return data.sort(
          (a, b) => Number(b.salary) - Number(a.salary)
        );

      case "joining-new":
        return data.sort(
          (a, b) =>
            new Date(b.joining_date) -
            new Date(a.joining_date)
        );

      case "joining-old":
        return data.sort(
          (a, b) =>
            new Date(a.joining_date) -
            new Date(b.joining_date)
        );

      default:
        return data;
    }
  }, [filteredEmployees, sortBy]);

  // Pagination
  const totalPages = Math.ceil(
    sortedEmployees.length / employeesPerPage
  );

  const startIndex =
    (currentPage - 1) * employeesPerPage;

  const paginatedEmployees =
    sortedEmployees.slice(
      startIndex,
      startIndex + employeesPerPage
    );

  return (
    <>
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
  <div>
    <h1 className="text-4xl font-bold">
      Employees
    </h1>

    <p className="mt-2 text-gray-500">
      Manage all employees in your organization.
    </p>
  </div>

  <div className="flex flex-wrap gap-3">
    <EmployeeExport
      employees={sortedEmployees}
    />

    <Link
      to="/employees/add"
      className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
    >
      + Add Employee
    </Link>
  </div>
</div>

      <EmployeeFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        departments={departments}
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />

      <EmployeeSorting
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <EmployeeTable
        employees={paginatedEmployees}
        onDelete={handleDeleteClick}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
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