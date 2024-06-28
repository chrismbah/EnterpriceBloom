/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import store from "../store";
import { refreshToken, logout } from "../store/slices/authSlice";

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, 
});

http.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const accessToken = state.auth.user?.accessToken;
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await store.dispatch(refreshToken());
        const state = store.getState();
        const newAccessToken = state.auth.user?.accessToken;
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return http(originalRequest);
      } catch (refreshError: any) {
        if (
          refreshError.response &&
          (refreshError.response.status === 401 ||
            refreshError.response.status === 403)
        ) {
          store.dispatch(logout());
          window.location.href = "/login"; // Redirect to login page
        }
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default http;
