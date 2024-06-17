import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  aboutYouSchema,
  AboutYouFormData,
} from "../../../schema/auth/aboutYou";
import FormInput from "../../../components/form/FormInput";
import { ErrorMessage } from "../../../components/form/ErrorMessage";
import { useNavigate } from "react-router-dom";

const AboutYouForm = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AboutYouFormData>({
    resolver: yupResolver(aboutYouSchema),
  });

  const onSubmit: SubmitHandler<AboutYouFormData> = (data) => {
    console.log(data);
    navigate("/onboarding/interests")
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-[40px] items-center"
    >
      <div className="w-full flex flex-col gap-6 items-center">
        <FormInput
          id="fullName"
          label="Full Name"
          placeholder="Enter Full Name"
          type="fullName"
          register={register("fullName")}
          error={errors.fullName}
        />
        <FormInput
          id="phoneNumber"
          label="Phone Number"
          placeholder="Phone Number"
          type="text"
          register={register("phoneNumber")}
          error={errors.phoneNumber}
        />
        <FormInput
          id="businessName"
          label="Business Name"
          optionalLabel="(Optional)"
          placeholder="Enter Business Name"
          type="businessName"
          register={register("businessName")}
          error={errors.businessName}
        />
        <div className="w-full flex flex-col gap-[8px]">
          <label htmlFor="dateOfBirth" className="font-semibold">
            Date of Birth
          </label>
          <input
            type="text"
            placeholder="eg. 01-01-2009"
            onFocus={(e) => (e.target.type = "date")}
            // onBlur={(e) => (e.target.type = "text")}
            id="dateOfBirth"
            {...register("dateOfBirth")}
            className={`w-full border-[1.5px] rounded-[8px] ${
              errors.dateOfBirth
                ? "border-primary-600 focus:outline-primary-600"
                : "border-[#B8C5CA] focus:outline-neutral-500"
            } h-12 py-3 px-4 
            placeholder:text-[#B8C5CA] placeholder:text-sm text-neutral-800`}
            min={new Date(1900, 0, 1).toISOString().split("T")[0]}
            max={new Date().toISOString().split("T")[0]}
          />
          {errors.dateOfBirth?.message && (
            <ErrorMessage message={errors.dateOfBirth?.message} />
          )}
        </div>
      </div>
      <button
        type="submit"
        className="w-full place-content-center font-bold bg-primary-500 text-white rounded-[8px] h-[52px] p-[8px] text-center "
      >
        Proceed
      </button>
    </form>
  );
};

export default AboutYouForm;
