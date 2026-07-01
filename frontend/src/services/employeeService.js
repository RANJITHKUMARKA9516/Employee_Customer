import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/employees/";

export async function getEmployees() {
  const response = await axios.get(API_URL);
  return response.data;
}