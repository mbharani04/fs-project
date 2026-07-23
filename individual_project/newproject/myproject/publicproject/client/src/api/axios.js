import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

/**
 * Request interceptor — automatically attaches JWT token to every request
 * if one is present in localStorage.
 * This means you don't have to manually add the Authorization header
 * in each individual API call.
 */
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default API;