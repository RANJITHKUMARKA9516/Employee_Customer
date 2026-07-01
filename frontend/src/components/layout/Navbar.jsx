function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
      <h1 className="text-xl font-bold text-blue-600">
        Employee Management System
      </h1>

      <div className="text-gray-600">
        Welcome, Admin
      </div>
    </header>
  );
}

export default Navbar;