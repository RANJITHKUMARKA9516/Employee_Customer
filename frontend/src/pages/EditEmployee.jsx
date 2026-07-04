import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import EmployeeForm from "../components/employees/forms/EmployeeForm";

import {
  getEmployee,
  updateEmployee,
} from "../services/employeeService";

import {
  showSuccess,
  showError,
} from "../utils/toast";
import Loader from "../components/common/Loader";

function EditEmployee() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadEmployee();
  }, []);

  async function loadEmployee() {
    try {
      const data = await getEmployee(id);
      setEmployee(data);
    } catch (error) {
      console.error(error);
      showError("Failed to load employee.");
    }
  }

  async function handleUpdate(data) {
  try {
    setLoading(true);

    await updateEmployee(id, data);

    showSuccess("Employee updated successfully!");

    navigate("/employees");
  } catch (error) {
    console.error(error);

    showError("Failed to update employee.");
  } finally {
    setLoading(false);
  }
}
  if (!employee) {
    return (
      <div className="text-center py-10">
        Loading...
      </div>
    );
  }

  return (
    <>
      <h1 className="mb-6 text-4xl font-bold">
        Edit Employee
      </h1>

      <EmployeeForm
        initialData={employee}
        onSubmitForm={handleUpdate}
        buttonText="Update Employee"
      />
    </>
  );
}

export default EditEmployee;