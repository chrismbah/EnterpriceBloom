/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: true, // To ensure secure cookies handling
});

export const signup = async (data: any) => {
  const response = await api.post("/signup", data);
  return response.data;
};

export const submitAboutYou = async (data: any) => {
  const response = await api.post("/about-you", data);
  return response.data;
};

export const submitInterests = async (data: any) => {
  const response = await api.post("/interests", data);
  return response.data;
};

export default api;
