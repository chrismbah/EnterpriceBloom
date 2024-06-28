import { apiOne, apiTwo } from "./apiSlice";

export const allApiSlice = apiOne.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userData) => ({
        url: `auth/register`,
        method: "POST",
        body: userData,
      }),
    }),
    login: builder.mutation({
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
    getInterests: builder.mutation({
      query: () => ({
        url: `/user/getInterest`,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useForgotPasswordMutation,
  useSignUpMutation,
  useGetInterestsMutation,
} = allApiSlice;

export const authApiSlice = apiTwo.injectEndpoints({
  endpoints: (builder) => ({
    completeProfile: builder.mutation({
      query: ({ userId, profileData }) => ({
        url: `/user/completeProfile/${userId}`,
        method: "PUT",
        body: profileData,
      }),
    }),
  }),
});

export const { useCompleteProfileMutation } = authApiSlice;
