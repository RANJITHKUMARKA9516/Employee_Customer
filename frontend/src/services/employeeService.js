import api from "../api/axios";

export async function getEmployees() {
  const response = await api.get("/employees/");
  return response.data;
}

export async function getEmployee(id) {
  const response = await api.get(`/employees/${id}/`);
  return response.data;
}

export async function createEmployee(employee) {
  const formData = new FormData();

  Object.keys(employee).forEach((key) => {
    if (key === "photo") {
      if (employee.photo && employee.photo.length > 0) {
        formData.append("photo", employee.photo[0]);
      }
    } else {
      formData.append(key, employee[key]);
    }
  });

  const response = await api.post(
    "/employees/",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
}

export async function updateEmployee(id, employee) {
  const formData = new FormData();

  Object.keys(employee).forEach((key) => {
    if (key === "photo") {
      if (employee.photo && employee.photo.length > 0) {
        formData.append("photo", employee.photo[0]);
      }
    } else {
      formData.append(key, employee[key]);
    }
  });

  const response = await api.put(
    `/employees/${id}/`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
}

export async function deleteEmployee(id) {
  await api.delete(`/employees/${id}/`);
}