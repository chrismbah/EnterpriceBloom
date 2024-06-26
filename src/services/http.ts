import axios from "axios";
import Cookies from "js-cookie";

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

http.defaults.headers.common["Content-Type"] = "application/json";

http.interceptors.request.use(
  (req) => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`;
    }
    return req;
  },
  (error) => Promise.reject(error)
);
