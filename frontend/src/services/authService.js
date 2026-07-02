import api from "../api/axios";

export async function login(credentials) {
  const response = await api.post("/token/", credentials);

  return response.data;
}