import { Bell, LogOut, Search, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Navbar() {
  const navigate = useNavigate();

  const { logoutUser } = useAuth();

  function handleLogout() {
    logoutUser();

    navigate("/login");
  }

  return (
    <header className="flex items-center justify-between border-b bg-white px-8 py-4 shadow-sm">
      {/* Left Side */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Employee Management System
        </h1>

        <p className="text-sm text-slate-500">
          Welcome back 👋
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search
            size={18}
            className="absolute left-3 top-3 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="rounded-lg border py-2 pl-10 pr-4 outline-none focus:border-blue-500"
          />
        </div>

        {/* Notification */}
        <button className="rounded-full p-2 transition hover:bg-slate-100">
          <Bell size={22} />
        </button>

        {/* User */}
        <div className="flex items-center gap-3">
          <UserCircle
            size={36}
            className="text-blue-600"
          />

          <div className="hidden md:block">
            <p className="font-semibold">
              Admin
            </p>

            <p className="text-sm text-slate-500">
              Administrator
            </p>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
        >
          <LogOut size={18} />

          Logout
        </button>
      </div>
    </header>
  );
}

export default Navbar;