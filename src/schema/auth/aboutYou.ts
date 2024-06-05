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
    phoneNumber: yup
      .string()
      .required("Enter your phone number")
      .matches(/^\d+$/, "Phone number must contain only digits"),
    businessName: yup.string(),
    dateOfBirth: yup
      .date()
      .required("Enter your date of birth")
      .min(
        new Date(1900, 0, 1),
        "Date of birth cannot be before January 1, 1900"
      )
      .max(new Date(), "Please input a valid date of birth")
      .required("Please input a valid date"),
  })
  .required();

export type AboutYouFormData = yup.InferType<typeof aboutYouSchema>;
