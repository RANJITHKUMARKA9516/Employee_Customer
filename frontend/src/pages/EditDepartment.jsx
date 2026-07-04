import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import DepartmentForm from "../components/departments/DepartmentForm";

import {
  getDepartment,
  updateDepartment,
} from "../services/departmentService";

import {
  showSuccess,
  showError,
} from "../utils/toast";

function EditDepartment() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [department, setDepartment] = useState(null);

  useEffect(() => {
    loadDepartment();
  }, []);

  async function loadDepartment() {
    try {
      const data = await getDepartment(id);
      setDepartment(data);
    } catch (error) {
      console.error(error);

      showError("Failed to load department.");
    }
  }

  async function handleUpdate(data) {
    try {
      await updateDepartment(id, data);

      showSuccess("Department updated successfully!");

      navigate("/departments");
    } catch (error) {
      console.error(error);

      showError("Failed to update department.");
    }
  }

  if (!department) {
    return (
      <div className="py-10 text-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <h1 className="mb-6 text-4xl font-bold">
        Edit Department
      </h1>

      <DepartmentForm
        initialData={department}
        onSubmitForm={handleUpdate}
        buttonText="Update Department"
      />
    </>
  );
}

export default EditDepartment;