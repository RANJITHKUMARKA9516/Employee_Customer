import { useEffect, useState } from "react";

import { getDashboardData } from "../services/dashboardService";

import DashboardCards from "../components/dashboard/DashboardCards";
import StatusChart from "../components/dashboard/StatusChart";
import RecentEmployees from "../components/dashboard/RecentEmployees";
import DepartmentChart from "../components/dashboard/DepartmentChart";

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const data = await getDashboardData();
      setDashboard(data);
    } catch (error) {
      console.error(error);
    }
  }

  if (!dashboard) {
    return (
      <div className="text-center py-20 text-xl">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Welcome to Employee Management System
        </p>
      </div>

      <DashboardCards dashboard={dashboard} />

      <div className="grid gap-8 lg:grid-cols-2">

  <StatusChart dashboard={dashboard} />

  <DepartmentChart dashboard={dashboard} />

</div>

<RecentEmployees
  employees={dashboard.recentEmployees}
/>

    </div>
  );
}

export default Dashboard;