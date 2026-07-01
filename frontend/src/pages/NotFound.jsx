import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold text-red-500">
        404
      </h1>

      <p className="mt-4 text-xl">
        Page Not Found
      </p>

      <Link
        to="/"
        className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;