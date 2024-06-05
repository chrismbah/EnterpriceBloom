import * as yup from "yup";

export const forgotPasswordSchema = yup
  .object({
    email: yup
      .string()
      .email("Enter a valid email address")
      .required("Please enter your email address"),
  })
  .required();

export type ForgotPasswordFormData = yup.InferType<typeof forgotPasswordSchema>;
