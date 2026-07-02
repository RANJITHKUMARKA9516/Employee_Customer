import { useEffect, useState } from "react";

import StatCard from "../components/dashboard/StatCard";
import { getDashboardStats } from "../services/dashboardService";

function Dashboard() {
  const [stats, setStats] = useState({
    totalEmployees: 0,
    activeEmployees: 0,
    inactiveEmployees: 0,
    totalDepartments: 0,
    recentEmployees: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const data = await getDashboardStats();
      setStats(data);
    } catch (error) {
      console.error("Dashboard Error:", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="text-center text-lg font-semibold">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Welcome to the Employee Management System.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Employees"
          value={stats.totalEmployees}
          color="bg-blue-600"
        />

        <StatCard
          title="Active Employees"
          value={stats.activeEmployees}
          color="bg-green-600"
        />

        <StatCard
          title="Inactive Employees"
          value={stats.inactiveEmployees}
          color="bg-red-600"
        />

        <StatCard
          title="Departments"
          value={stats.totalDepartments}
          color="bg-purple-600"
        />
      </div>

      {/* Recent Employees */}
      <div className="mt-10 rounded-xl bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold">
          Recent Employees
        </h2>

        {stats.recentEmployees.length === 0 ? (
          <p className="text-slate-500">
            No employees found.
          </p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b bg-slate-100">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Designation</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {stats.recentEmployees.map((employee) => (
                <tr
                  key={employee.id}
                  className="border-b hover:bg-slate-50"
                >
                  <td className="p-3">{employee.name}</td>
                  <td className="p-3">{employee.email}</td>
                  <td className="p-3">{employee.department}</td>
                  <td className="p-3">{employee.designation}</td>
                  <td className="p-3">
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${
                        employee.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {employee.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default Dashboard;