import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import EmployeeForm from "../components/employees/forms/EmployeeForm";

import {
  getEmployee,
  updateEmployee,
} from "../services/employeeService";

function EditEmployee() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    loadEmployee();
  }, []);

  async function loadEmployee() {
    const data = await getEmployee(id);

    setEmployee(data);
  }

  async function handleUpdate(data) {
    await updateEmployee(id, data);

    navigate("/employees");
  }

  if (!employee) {
    return (
      <p className="text-lg">
        Loading...
      </p>
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