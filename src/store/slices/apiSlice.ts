import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const apiOne = createApi({
  reducerPath: "apiOne",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: () => ({}),
});

export const apiTwo = createApi({
  reducerPath: "apiTwo",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
