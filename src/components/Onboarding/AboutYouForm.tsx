import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { aboutYouSchema, AboutYouFormData } from "../../schema/auth/aboutYou";
import FormInput from "../form/FormInput";
import PhoneInputWithCountry, {
  isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { ErrorMessage } from "../form/ErrorMessage";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { nextStep } from "../../store/slices/onboardingSlice";
import { submitAboutYou } from "../../services/auth/onboarding";
const AboutYouForm = () => {
  const dispatch = useDispatch();
  const { mutate } = useMutation({
    mutationFn: submitAboutYou,
    onSuccess: () => {
      dispatch(nextStep());
    },
  });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AboutYouFormData>({
    resolver: yupResolver(aboutYouSchema),
  });

  const onSubmit: SubmitHandler<AboutYouFormData> = (data) => {
    console.log(data);
    mutate(data);
    dispatch(nextStep());
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
        <div className="w-full">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor={"phoneNumber"} className="font-semibold">
              Phone Number
            </label>
            <Controller
              name="phoneNumber"
              control={control}
              rules={{
                validate: (value) => isValidPhoneNumber(value),
              }}
              render={({ field: { onChange, value } }) => (
                <PhoneInputWithCountry
                  international
                  name="phoneNumber"
                  value={value}
                  onChange={onChange}
                  defaultCountry="NG"
                  country="NG"
                  id="phone"
                  numberInputProps={{
                    className: "focus:outline-none h-12 py-3 px-4 ", // my Tailwind classes
                  }}
                  className={`w-full focus:outline-none border-[1.5px] bg-[#f4f4f4] rounded-[8px] overflow-hidden pl-4 ${
                    errors.phoneNumber
                      ? "border-primary-600"
                      : "border-[#B8C5CA]"
                  } 
                  placeholder:text-[#B8C5CA] placeholder:text-sm text-neutral-800`}
                />
              )}
            />
          </div>
          {errors.phoneNumber?.message && (
            <ErrorMessage message={errors.phoneNumber?.message} />
          )}
        </div>

        <FormInput
          id="businessName"
          label="Business Name"
          optionalLabel="(Optional)"
          placeholder="Enter Business Name"
          type="businessName"
          register={register("businessName")}
          error={errors.businessName}
        />
        <div className="w-full">
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
              className={`w-full border-[1.5px] focus:outline-none rounded-[8px] ${
                errors.dateOfBirth ? "border-primary-600" : "border-[#B8C5CA]"
              } h-12 py-3 px-4 
                placeholder:text-[#B8C5CA] placeholder:text-sm text-neutral-800`}
              min={new Date(1900, 0, 1).toISOString().split("T")[0]}
              max={new Date().toISOString().split("T")[0]}
            />
          </div>
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
