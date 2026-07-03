import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getEmployee } from "../services/employeeService";

function EmployeeDetails() {
  const { id } = useParams();

  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    loadEmployee();
  }, []);

  async function loadEmployee() {
    try {
      const data = await getEmployee(id);
      setEmployee(data);
    } catch (error) {
      console.error(error);
    }
  }

  if (!employee) {
    return (
      <div className="text-center text-lg">
        Loading Employee...
      </div>
    );
  }

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-4xl font-bold">
          Employee Profile
        </h1>

        <Link
          to="/employees"
          className="rounded-lg bg-gray-600 px-5 py-2 text-white hover:bg-gray-700"
        >
          ← Back
        </Link>
      </div>

      <div className="rounded-xl bg-white p-8 shadow-lg">

        {/* Photo */}
        <div className="mb-8 flex justify-center">
          {employee.photo ? (
            <img
              src={`http://127.0.0.1:8000${employee.photo}`}
              alt={employee.name}
              className="h-44 w-44 rounded-full border-4 border-blue-500 object-cover"
            />
          ) : (
            <div className="flex h-44 w-44 items-center justify-center rounded-full bg-gray-200 text-5xl">
              👤
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <InfoCard
            label="Full Name"
            value={employee.name}
          />

          <InfoCard
            label="Email"
            value={employee.email}
          />

          <InfoCard
            label="Phone"
            value={employee.phone || "-"}
          />

          <InfoCard
            label="Department"
            value={employee.department_name}
          />

          <InfoCard
            label="Designation"
            value={employee.designation}
          />

          <InfoCard
            label="Salary"
            value={`₹ ${employee.salary}`}
          />

          <InfoCard
            label="Joining Date"
            value={
              employee.joining_date || "-"
            }
          />

          <div>
            <h3 className="mb-2 text-sm font-semibold text-gray-500">
              Status
            </h3>

            <span
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                employee.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {employee.status}
            </span>
          </div>
        </div>

        <div className="mt-10">
          <Link
            to={`/employees/edit/${employee.id}`}
            className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Edit Employee
          </Link>
        </div>
      </div>
    </>
  );
}

function InfoCard({
  label,
  value,
}) {
  return (
    <div className="rounded-lg border bg-gray-50 p-4">
      <p className="text-sm text-gray-500">
        {label}
      </p>

      <p className="mt-1 text-lg font-semibold">
        {value}
      </p>
    </div>
  );
}

export default EmployeeDetails;