import { useNavigate } from "react-router-dom";

import EmployeeForm from "../components/employees/forms/EmployeeForm";
import { createEmployee } from "../services/employeeService";

function AddEmployee() {
  const navigate = useNavigate();

  async function handleCreate(data) {
    await createEmployee(data);

    navigate("/employees");
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