import { useNavigate } from "react-router-dom";

import DepartmentForm from "../components/departments/DepartmentForm";
import { createDepartment } from "../services/departmentService";

import {
  showSuccess,
  showError,
} from "../utils/toast";

function AddDepartment() {
  const navigate = useNavigate();

  async function handleCreate(data) {
    try {
      await createDepartment(data);

      showSuccess("Department created successfully!");

      navigate("/departments");
    } catch (error) {
      console.error(error);

      showError("Failed to create department.");
    }
  }

  return (
    <>
      <h1 className="mb-6 text-4xl font-bold">
        Add Department
      </h1>

      <DepartmentForm
        onSubmitForm={handleCreate}
        buttonText="Create Department"
      />
    </>
  );
}

export default AddDepartment;