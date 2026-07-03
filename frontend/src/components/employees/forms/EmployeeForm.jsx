import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { getDepartments } from "../../../services/departmentService";

function EmployeeForm({
  initialData = null,
  onSubmitForm,
  buttonText = "Save Employee",
}) {
  const [departments, setDepartments] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    loadDepartments();
  }, []);

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  async function loadDepartments() {
    try {
      const data = await getDepartments();
      setDepartments(data);
    } catch (error) {
      console.error("Failed to load departments:", error);
    }
  }

  const onSubmit = async (data) => {
    await onSubmitForm(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-xl bg-white p-8 shadow-md"
    >
      {/* Photo */}
      <div>
        <label className="mb-2 block font-medium">
          Employee Photo
        </label>

        <input
          type="file"
          accept="image/*"
          {...register("photo")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      {/* Name */}
      <div>
        <label className="mb-2 block font-medium">
          Full Name
        </label>

        <input
          {...register("name", {
            required: "Full Name is required",
          })}
          className="w-full rounded-lg border p-3"
          placeholder="Enter employee name"
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="mb-2 block font-medium">
          Email
        </label>

        <input
          type="email"
          {...register("email", {
            required: "Email is required",
          })}
          className="w-full rounded-lg border p-3"
          placeholder="Enter employee email"
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="mb-2 block font-medium">
          Phone Number
        </label>

        <input
          type="text"
          {...register("phone")}
          className="w-full rounded-lg border p-3"
          placeholder="Enter phone number"
        />
      </div>

      {/* Department */}
      <div>
        <label className="mb-2 block font-medium">
          Department
        </label>

        <select
          {...register("department", {
            required: "Department is required",
          })}
          className="w-full rounded-lg border p-3"
        >
          <option value="">
            Select Department
          </option>

          {departments.map((department) => (
            <option
              key={department.id}
              value={department.id}
            >
              {department.name}
            </option>
          ))}
        </select>

        {errors.department && (
          <p className="mt-1 text-sm text-red-600">
            {errors.department.message}
          </p>
        )}
      </div>

      {/* Designation */}
      <div>
        <label className="mb-2 block font-medium">
          Designation
        </label>

        <input
          {...register("designation", {
            required: "Designation is required",
          })}
          className="w-full rounded-lg border p-3"
          placeholder="Enter designation"
        />

        {errors.designation && (
          <p className="mt-1 text-sm text-red-600">
            {errors.designation.message}
          </p>
        )}
      </div>

      {/* Salary */}
      <div>
        <label className="mb-2 block font-medium">
          Salary
        </label>

        <input
          type="number"
          step="0.01"
          {...register("salary")}
          className="w-full rounded-lg border p-3"
          placeholder="Enter salary"
        />
      </div>

      {/* Joining Date */}
      <div>
        <label className="mb-2 block font-medium">
          Joining Date
        </label>

        <input
          type="date"
          {...register("joining_date")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      {/* Status */}
      <div>
        <label className="mb-2 block font-medium">
          Status
        </label>

        <select
          {...register("status")}
          className="w-full rounded-lg border p-3"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        {buttonText}
      </button>
    </form>
  );
}

export default EmployeeForm;