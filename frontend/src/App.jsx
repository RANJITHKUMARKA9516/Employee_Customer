import { useState } from "react";
import Heading from "./components/common/Heading";
import Footer from "./components/common/Footer";
import EmployeeCard from "./components/employee/EmployeeCard";
import employees from "./data/employees";

function App() {
  const [employeeList] = useState(employees);

  return (
    <>
      <Heading title="Employee Management System" />

      {employeeList.map((employee) => (
        <EmployeeCard
          key={employee.id}
          id={employee.id}
          name={employee.name}
          email={employee.email}
          department={employee.department}
          designation={employee.designation}
        />
      ))}

      <Footer />
    </>
  );
}

export default App;