import axios from "axios";

export const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 3000,
});

http.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    if (err.response.data.public) {
      throw Error();
    }
    if (err.response.status === 401) {
      sessionStorage.removeItem("token");
      alert(`${err.response.data.message} 다시 로그인해주세요!`);
      throw Error();
    }
    alert(err.response.data.message);

    throw Error();
  }
);

http.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
