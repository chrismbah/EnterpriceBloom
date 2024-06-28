import * as yup from "yup";

export const aboutYouSchema = yup
  .object({
    fullName: yup
      .string()
      .required("Enter your full name")
      .matches(
        /^[a-zA-Z\s]+$/,
        "Full name must only contain letters and spaces"
      ),
    username: yup
      .string()
      .required("Enter your username")
      .matches(
        /^[a-zA-Z0-9_]+$/,
        "Username must only contain letters, numbers, and underscores"
      )
      .min(4, "Username must be at least 4 characters long")
      .max(20, "Username cannot be more than 20 characters long"),
    phoneNumber: yup
      .string()
      .required("Enter your phone number")
      .matches(
        /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
        "Phone number must be a valid international phone number"
      ),
    businessName: yup.string(),
    dateOfBirth: yup
      .date()
      .transform((value, originalValue) =>
        originalValue === "" ? null : value
      )
      .required("Enter your date of birth")
      .min(
        new Date(1950, 0, 1),
        "Date of birth cannot be before January 1, 1900"
      )
      .max(new Date(), "Please input a valid date of birth")
      .test(
        "min-date",
        "Date of birth cannot be before January 1, 1900",
        (value) => value && value >= new Date(1900, 0, 1)
      )
      .test(
        "max-date",
        "Please input a valid date of birth",
        (value) => value && value <= new Date()
      ),
  })
  .required();

export type AboutYouFormData = yup.InferType<typeof aboutYouSchema>;
