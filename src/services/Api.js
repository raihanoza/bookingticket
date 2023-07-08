import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    // Accept: "application/json",
    "Content-Type": "application/json",
  }, // Ganti dengan URL API yang sesuai
});

export const loginUser = (email, password) => {
  return api.post("/login", { email, password });
};
