import axios from "axios";

// Dedicated instance for our backend so TMDB (global axios) stays untouched.
export const instance = axios.create({
  baseURL: "https://tu-api.onrender.com",
})

// Read the token per-request (not at create time) so it's always current. Must return config.
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Single place to handle a dead session: any 401 logs out.
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Outside React (no hooks): clear token and hard-reload into the login.
      localStorage.removeItem("token")
      window.location.href = "/"
    }
    return Promise.reject(error)
  }
)
