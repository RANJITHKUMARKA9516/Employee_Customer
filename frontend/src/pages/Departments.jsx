import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import SearchBar from "../components/employees/SearchBar";
import ConfirmModal from "../components/common/ConfirmModal";
import DepartmentTable from "../components/departments/DepartmentTable";

import {
  getDepartments,
  deleteDepartment,
} from "../services/departmentService";

function Departments() {
  const [departments, setDepartments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(null);

  useEffect(() => {
    loadDepartments();
  }, []);

  async function loadDepartments() {
    try {
      const data = await getDepartments();
      setDepartments(data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleDeleteClick(id) {
    setSelectedDepartmentId(id);
    setIsModalOpen(true);
  }

  async function handleConfirmDelete() {
    try {
      await deleteDepartment(selectedDepartmentId);

      setIsModalOpen(false);
      setSelectedDepartmentId(null);

      loadDepartments();
    } catch (error) {
      console.error(error);
      alert("Unable to delete department.");
    }
  }

  function handleCancelDelete() {
    setIsModalOpen(false);
    setSelectedDepartmentId(null);
  }

  const filteredDepartments = useMemo(() => {
    const search = searchTerm.toLowerCase();

    return departments.filter((department) => {
      return (
        department.name.toLowerCase().includes(search) ||
        (department.description || "")
          .toLowerCase()
          .includes(search)
      );
    });
  }, [departments, searchTerm]);

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">
            Departments
          </h1>

          <p className="mt-2 text-gray-500">
            Manage all departments.
          </p>
        </div>

        <Link
          to="/departments/add"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          + Add Department
        </Link>
      </div>

      <div className="mb-6">
        <SearchBar
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />
      </div>

      <DepartmentTable
        departments={filteredDepartments}
        onDelete={handleDeleteClick}
      />

      <ConfirmModal
        isOpen={isModalOpen}
        title="Delete Department"
        message="Are you sure you want to delete this department?"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </>
  );
}

export default Departments;