import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5000/api/auth",
  withCredentials: true,
});

export const login = (email: string, password: string) =>
  API.post("/login", { email, password });

export const registerUser = (email: string, password: string) =>
  API.post("/register", { email, password });

export const refresh = () => API.get("/refresh");
