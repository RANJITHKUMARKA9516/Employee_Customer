import { useForm } from "react-hook-form";

function EmployeeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Employee Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-xl bg-white p-8 shadow-md"
    >
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
          placeholder="Enter email"
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Department
        </label>

        <select
          {...register("department")}
          className="w-full rounded-lg border p-3"
        >
          <option value="Development">Development</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
        </select>
      </div>

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

      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
      >
        Save Employee
      </button>
    </form>
  );
}

export default EmployeeForm;