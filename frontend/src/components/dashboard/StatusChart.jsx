import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function StatusChart({ dashboard }) {
  const data = [
    {
      name: "Active",
      value: dashboard.activeEmployees,
    },
    {
      name: "Inactive",
      value: dashboard.inactiveEmployees,
    },
  ];

  const COLORS = [
    "#22c55e",
    "#ef4444",
  ];

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-semibold">
        Employee Status
      </h2>

      <div className="h-80">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default StatusChart;