import axios from "axios";
import { tokenStorage } from "./token";

export const apiClient = axios.create({
    baseURL : "http://localhost:8000/api",
    timeout : 10000,
    headers : {'Content-Type' : 'application/json'}
});

apiClient.interceptors.request.use(
  (config) => {
    const token = tokenStorage.getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);