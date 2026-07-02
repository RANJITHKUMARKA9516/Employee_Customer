import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { login } from "../services/authService";
import useAuth from "../hooks/useAuth";

function Login() {
  const navigate = useNavigate();

  const { loginUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      const tokens = await login(data);

console.log("LOGIN RESPONSE:", tokens);

loginUser(tokens);

console.log(
  "Stored Token:",
  localStorage.getItem("accessToken")
);

navigate("/");
    } catch (error) {
      console.error(error);

      alert("Invalid username or password.");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg"
      >
        <h1 className="mb-6 text-center text-3xl font-bold">
          Login
        </h1>

        <div className="mb-4">
          <label className="mb-2 block">
            Username
          </label>

          <input
            {...register("username", {
              required: "Username is required",
            })}
            className="w-full rounded-lg border p-3"
          />

          {errors.username && (
            <p className="mt-1 text-sm text-red-600">
              {errors.username.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label className="mb-2 block">
            Password
          </label>

          <input
            type="password"
            {...register("password", {
              required: "Password is required",
            })}
            className="w-full rounded-lg border p-3"
          />

          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          className="w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;