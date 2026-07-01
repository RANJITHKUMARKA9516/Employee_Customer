import EmployeeForm from "../components/employees/forms/EmployeeForm";

function AddEmployee() {
  return (
    <>
      <h1 className="mb-6 text-4xl font-bold">
        Add Employee
      </h1>

      <EmployeeForm />
    </>
  );
}

export default AddEmployee;