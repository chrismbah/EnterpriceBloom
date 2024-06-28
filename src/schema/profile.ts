import * as yup from "yup";

export const profileSchema = yup.object({
  bio: yup.string(),
  dateOfBirth: yup
    .date()
    // .transform((value, originalValue) => (originalValue === "" ? null : value))
    .min(new Date(1900, 0, 1), "Date of birth cannot be before January 1, 1900")
    .max(new Date(), "Please input a valid date of birth")
    .nullable(),
  username: yup
    .string()
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Username must only contain letters, numbers, and underscores"
    )
    .min(4, "Username must be at least 4 characters long")
    .max(20, "Username cannot be more than 20 characters long")
    .required("Enter your username"),
  occupation: yup.string(),
  websiteUrl: yup.string().url("Invalid URL format"),
  companyName: yup.string(),
});

export type ProfileFormData = yup.InferType<typeof profileSchema>;
