import axios from "axios";
import Cookie from "js-cookie";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

apiClient.interceptors.request.use((config) => {
  const accessToken = Cookie.get("token");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
