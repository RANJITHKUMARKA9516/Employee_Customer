import { useNavigate } from "react-router-dom";

import DepartmentForm from "../components/departments/DepartmentForm";
import { createDepartment } from "../services/departmentService";

function AddDepartment() {
  const navigate = useNavigate();

  async function handleCreate(data) {
    console.log("Submitting:", data);

    try {
      await createDepartment(data);

      alert("Department created successfully!");

      navigate("/departments");
    } catch (error) {
      console.error(error);

      console.log("Status:", error.response?.status);
      console.log("Data:", error.response?.data);

      alert(
        JSON.stringify(error.response?.data || error.message)
      );
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