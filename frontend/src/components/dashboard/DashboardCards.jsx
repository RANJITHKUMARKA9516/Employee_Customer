function DashboardCards({ dashboard }) {
  const cards = [
    {
      title: "Total Employees",
      value: dashboard.totalEmployees,
      color: "bg-blue-600",
    },
    {
      title: "Active Employees",
      value: dashboard.activeEmployees,
      color: "bg-green-600",
    },
    {
      title: "Inactive Employees",
      value: dashboard.inactiveEmployees,
      color: "bg-red-600",
    },
    {
      title: "Departments",
      value: dashboard.totalDepartments,
      color: "bg-purple-600",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`${card.color} rounded-xl p-6 text-white shadow-lg`}
        >
          <h2 className="text-lg font-medium">
            {card.title}
          </h2>

          <p className="mt-4 text-5xl font-bold">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;