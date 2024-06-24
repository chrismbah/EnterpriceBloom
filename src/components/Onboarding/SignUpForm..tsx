import { Link } from "react-router-dom";
import googleIcon from "../../assets/icons/google.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
// import { ArrowDownIcon } from "../icons/ArrowDownIcon";
// import { countries } from "../../data/countries";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema, SignupFormData } from "../../schema/auth/signUp";
import { ErrorMessage } from "../form/ErrorMessage";
import FormInput from "../form/FormInput";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { nextStep } from "../../store/slices/onboardingSlice";
import { signup } from "../../services/auth/onboarding";
// import { CountrySelect } from "react-country-state-city";
// import "react-country-state-city/dist/react-country-state-city.css";
import ReactFlagsSelect from "react-flags-select";
// import { CountryDropdown } from "react-country-region-selector";
const SignUpForm = () => {
  const dispatch = useDispatch();
  const { mutate } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      dispatch(nextStep());
    },
  });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit: SubmitHandler<SignupFormData> = (data) => {
    console.log(data);
    mutate(data);
    dispatch(nextStep());
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-8 items-center"
    >
      <div className="w-full flex flex-col gap-4 items-center">
        <div className="w-full">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="country" className="font-semibold">
              Select Your Country
            </label>
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <ReactFlagsSelect
                  selected={field.value}
                  onSelect={field.onChange}
                  className={`rounded-lg focus:outline-none w-full h-12 ${
                    errors.country ? " border-primary-600" : "border-[#B8C5CA]"
                  } border rounded-lg`}
                  // className="focus:outline-none w-full h-12 border rounded-lg border-[#B8C5CA]"
                  selectButtonClassName=" border-none px-4 h-12 rounded-[8px] border"
                  placeholder="Select Country"
                />
              )}
            />
          </div>
          {errors.country?.message && (
            <ErrorMessage message={errors.country.message} />
          )}
        </div>{" "}
        <FormInput
          id="email"
          label="Email"
          placeholder="Enter Email"
          type="email"
          register={register("email")}
          error={errors.email}
        />
        <FormInput
          id="password"
          label="Password"
          placeholder="Select Password"
          type="password"
          register={register("password")}
          error={errors.password}
        />
      </div>
      <div className="w-full flex flex-col gap-4 ">
        <div className="w-full flex flex-col gap-4 ">
          <button
            type="submit"
            className="w-full place-content-center font-bold bg-primary-500 text-white rounded-[8px] h-[52px] p-[8px] text-center "
          >
            Sign Up
          </button>
          <div className="w-full flex flex-col gap-4 ">
            <p className="w-full text-center text-[#94A5AB] font-medium text-sm">
              Or sign up with
            </p>
            <div className="w-full flex flex-col items-center gap-4 ">
              <button className="w-full flex items-center justify-center gap-[10px] text-[#262520] font-bold bg-[#F3F4F5] h-[52px] p-[8px] text-center rounded-[8px]">
                <img src={googleIcon} alt="Google" className="w-6 h-6" />{" "}
                <span>Google</span>
              </button>
              <button className="w-full flex items-center justify-center gap-[10px] text-[#262520] font-bold bg-[#F3F4F5] h-[52px] p-[8px] text-center rounded-[8px]">
                <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />{" "}
                <span>Facebook</span>
              </button>
            </div>
          </div>
        </div>
        <p className="w-full text-left font-semibold text-sm ">
          By clicking "Sign Up", you are agreeing to EnterpriseBloom's{" "}
          <Link to="/" className="text-primary-500">
            User Agreement
          </Link>{" "}
          ,{" "}
          <Link to="/" className="text-primary-500">
            {" "}
            Privacy Policy
          </Link>
          ,{" "}
          <Link to="/" className="text-primary-500">
            {" "}
            Cookie Policy
          </Link>
          ,{" "}
          <Link to="/" className="text-primary-500">
            {" "}
            Terms of Use
          </Link>
          , and{" "}
          <Link to="/" className="text-primary-500">
            {" "}
            Code of Conduct
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
