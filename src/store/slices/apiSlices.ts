

import { apiOne, apiTwo } from "./apiSlice";
import {
  CompleteProfileRequest,
  GetInterestsResponse,
} from "../../types/api/auth";
import { UserData } from "../../types/user";

export const allApiSlice = apiOne.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userData) => ({
        url: `auth/register`,
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: `auth/login`,
        method: "POST",
        body: data,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: `auth/password_reset`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useForgotPasswordMutation,
  useSignUpMutation,
} = allApiSlice;

export const authApiSlice = apiTwo.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    completeProfile: builder.mutation<void, CompleteProfileRequest>({
      query: ({ userId, profileData }) => ({
        url: `/user/completeProfile/${userId}`,
        method: "PATCH",
        body: profileData,
      }),
    }),
    getInterests: builder.mutation<GetInterestsResponse, void>({
      query: () => ({
        url: "/user/getInterest",
      }),
    }),
    getUserProfile: builder.mutation<UserData, void>({
      query: () => ({
        url: "/user/getProfile",
      }),
    }),
  }),
});

export const { useCompleteProfileMutation, useGetInterestsMutation, useGetUserProfileMutation } =
  authApiSlice;