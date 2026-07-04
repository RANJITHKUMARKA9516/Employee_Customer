import { useState } from "react";
import { useNavigate } from "react-router-dom";

import EmployeeForm from "../components/employees/forms/EmployeeForm";
import Loader from "../components/common/Loader";

import { createEmployee } from "../services/employeeService";

import {
  showSuccess,
  showError,
} from "../utils/toast";

function AddEmployee() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  async function handleCreate(data) {
    try {
      setLoading(true);

      await createEmployee(data);

      showSuccess("Employee created successfully!");

      navigate("/employees");
    } catch (error) {
      console.error(error);

      showError("Failed to create employee.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <h1 className="mb-6 text-4xl font-bold">
        Add Employee
      </h1>

      <EmployeeForm
        onSubmitForm={handleCreate}
        buttonText="Create Employee"
      />
    </>
  );
}

export default AddEmployee;