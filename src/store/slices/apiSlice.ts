import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { logout } from "./authSlice";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // handle token expiration and logout
    api.dispatch(logout());
    window.location.href = "/login"; // redirect to login
  }

  return result;
};

export const apiOne = createApi({
  reducerPath: "apiOne",
  baseQuery,
  endpoints: () => ({}),
});

export const apiTwo = createApi({
  reducerPath: "apiTwo",
  baseQuery: baseQueryWithReauth, // Use the baseQueryWithReauth here
  endpoints: () => ({}),
});


// import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
// const BASE_URL = process.env.REACT_APP_BASE_URL;

// export const apiOne = createApi({
//   reducerPath: "apiOne",
//   baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
//   endpoints: () => ({}),
// });

// export const apiTwo = createApi({
//   reducerPath: "apiTwo",
//   baseQuery: fetchBaseQuery({
//     baseUrl: BASE_URL,
//     prepareHeaders: (headers) => {
//       const token = localStorage.getItem("accessToken");
//       if (token) {
//         headers.set("authorization", `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),
//   endpoints: () => ({}),
// });
