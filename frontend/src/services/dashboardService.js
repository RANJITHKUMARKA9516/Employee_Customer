import api from "../api/axios";

export async function getDashboardStats() {
  const employees = await api.get("/employees/");

  const totalEmployees = employees.data.length;

  const activeEmployees = employees.data.filter(
    (employee) => employee.status === "Active"
  ).length;

  const inactiveEmployees = employees.data.filter(
    (employee) => employee.status === "Inactive"
  ).length;

  const departments = [
    ...new Set(employees.data.map((employee) => employee.department)),
  ];

  return {
    totalEmployees,
    activeEmployees,
    inactiveEmployees,
    totalDepartments: departments.length,
    recentEmployees: employees.data.slice(-5).reverse(),
  };
}