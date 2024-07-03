import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { RootState } from "..";
// import http from "../../utils/http";
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
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = state.auth.user?.accessToken;
      console.log(token)
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
