import { useEffect } from "react";
import { useForm } from "react-hook-form";

function DepartmentForm({
  initialData = null,
  onSubmitForm,
  buttonText = "Save Department",
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const onSubmit = async (data) => {
    await onSubmitForm(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-xl bg-white p-8 shadow-md"
    >
      {/* Department Name */}
      <div>
        <label className="mb-2 block font-medium">
          Department Name
        </label>

        <input
          {...register("name", {
            required: "Department name is required",
          })}
          className="w-full rounded-lg border p-3"
          placeholder="Enter department name"
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="mb-2 block font-medium">
          Description
        </label>

        <textarea
          rows={4}
          {...register("description")}
          className="w-full rounded-lg border p-3"
          placeholder="Enter department description"
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
      >
        {buttonText}
      </button>
    </form>
  );
}

export default DepartmentForm;