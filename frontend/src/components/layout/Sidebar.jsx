function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-slate-900 text-white">
      <div className="border-b border-slate-700 p-6 text-xl font-bold">
        EMS
      </div>

      <nav className="p-4">
        <ul className="space-y-3">
          <li className="rounded-lg p-3 hover:bg-slate-700">
            Dashboard
          </li>

          <li className="rounded-lg p-3 hover:bg-slate-700">
            Employees
          </li>

          <li className="rounded-lg p-3 hover:bg-slate-700">
            Departments
          </li>

          <li className="rounded-lg p-3 hover:bg-slate-700">
            Settings
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;