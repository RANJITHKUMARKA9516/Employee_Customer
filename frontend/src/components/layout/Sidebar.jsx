import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Building2,
  Settings,
  UserCircle,
} from "lucide-react";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      name: "Employees",
      path: "/employees",
      icon: Users,
    },
    {
      name: "Departments",
      path: "/departments",
      icon: Building2,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: UserCircle,
    },
  ];

  return (
    <aside className="sticky top-0 flex h-screen w-64 flex-col bg-slate-900 text-white shadow-xl">
      {/* Logo */}
      <div className="border-b border-slate-800 p-6">
        <h1 className="text-3xl font-extrabold tracking-wide text-blue-400">
          EMS
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Employee Management
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`
                  }
                >
                  <Icon size={20} />

                  <span>{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-800 p-4">
        <p className="text-center text-xs text-slate-500">
          EMS v1.0
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;