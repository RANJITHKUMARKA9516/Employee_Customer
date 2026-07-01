import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <DashboardLayout>
      <h2 className="text-3xl font-bold">
        Dashboard
      </h2>

      <p className="mt-4 text-gray-600">
        Welcome to your professional Employee Management System.
      </p>
    </DashboardLayout>
  );
}

export default App;

































































// import { useState } from "react";
// import Heading from "./components/common/Heading";
// import Footer from "./components/common/Footer";
// import EmployeeCard from "./components/employee/EmployeeCard";
// import employees from "./data/employees";

// function App() {
//   const [employeeList] = useState(employees);

//   return (
//     <>
//       <Heading title="Employee Management System" />

//       {employeeList.map((employee) => (
//         <EmployeeCard
//           key={employee.id}
//           id={employee.id}
//           name={employee.name}
//           email={employee.email}
//           department={employee.department}
//           designation={employee.designation}
//         />
//       ))}

//       <Footer />
//     </>
//   );
// }

// export default App;







// import Heading from "./components/common/Heading";

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <Heading title="Employee Management System" />

//       <div className="mt-8 rounded-xl bg-white p-6 shadow-lg">
//         <h2 className="text-2xl font-bold text-blue-600">
//           Tailwind CSS v4 Installed Successfully 🎉
//         </h2>

//         <p className="mt-4 text-gray-600">
//           Welcome to the Employee Management System.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default App;