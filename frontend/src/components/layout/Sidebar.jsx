import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Employees", path: "/employees" },
    { name: "Departments", path: "/departments" },
    { name: "Settings", path: "/settings" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <aside className="h-screen w-64 bg-slate-900 text-white">
      <div className="border-b border-slate-700 p-6 text-xl font-bold">
        EMS
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `block rounded-lg p-3 transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "hover:bg-slate-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;