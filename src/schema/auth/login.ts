import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .email("Enter a valid email address")
      .required("Enter your email address"),
    password: yup.string().required("Enter your password"),
  })
  .required();

export type LoginFormData = yup.InferType<typeof loginSchema>;
