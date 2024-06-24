import * as yup from "yup";

// Define the validation schema
export const signupSchema = yup
  .object({
    country: yup.string().required("Select your country"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Enter your email address"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 21 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain a mix of uppercase, lowercase and numbers"
      ),
  })
  .required();

export type SignupFormData = yup.InferType<typeof signupSchema>;
