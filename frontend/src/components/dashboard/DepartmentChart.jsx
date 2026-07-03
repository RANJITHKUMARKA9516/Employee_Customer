import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function DepartmentChart({ dashboard }) {
  const departmentCounts = {};

  dashboard.recentEmployees.forEach((employee) => {
    const department =
      employee.department_name || "Unknown";

    departmentCounts[department] =
      (departmentCounts[department] || 0) + 1;
  });

  const data = Object.keys(departmentCounts).map(
    (key) => ({
      department: key,
      employees: departmentCounts[key],
    })
  );

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-semibold">
        Employees by Department
      </h2>

      <div className="h-80">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="department" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="employees"
              fill="#2563eb"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default DepartmentChart;