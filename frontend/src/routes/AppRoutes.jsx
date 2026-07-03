import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/Dashboard";
import Employees from "../pages/Employees";
import Departments from "../pages/Departments";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import AddEmployee from "../pages/AddEmployee";
import EditEmployee from "../pages/EditEmployee";
import Login from "../pages/Login";

import ProtectedRoute from "./ProtectedRoute";
import AddDepartment from "../pages/AddDepartment";
import EditDepartment from "../pages/EditDepartment";
import EmployeeDetails from "../pages/EmployeeDetails";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/employees" element={<Employees />} />
                  <Route path="/employees/add" element={<AddEmployee />} />
                  <Route
                    path="/employees/edit/:id"
                    element={<EditEmployee />}
                  />
                  <Route path="/departments" element={<Departments />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="*" element={<NotFound />} />
                   <Route
                     path="/departments/add"
                                   element={<AddDepartment />}
                                                                    />
                   <Route
                                             path="/departments/edit/:id"
                                                            element={<EditDepartment />}
                                              />
                                              <Route
  path="/employees/:id"
  element={<EmployeeDetails />}
/>
                  
                </Routes>
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;