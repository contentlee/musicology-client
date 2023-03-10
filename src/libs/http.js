import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.response.use((config) => {
  const res = config.data;
  return res;
});
