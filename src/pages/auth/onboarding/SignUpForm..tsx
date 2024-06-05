import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../../../assets/icons/google.svg";
import facebookIcon from "../../../assets/icons/facebook.svg";
import { ArrowDownIcon } from "../../../assets/icons/ArrowDownIcon";
import { countries } from "../../../data/countries";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema, SignupFormData } from "../../../schema/auth/signUp";
import { ErrorMessage } from "../../../components/form/ErrorMessage";
import FormInput from "../../../components/form/FormInput";

const SignUpForm = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit: SubmitHandler<SignupFormData> = (data) => {
    console.log(data);
    navigate("/about-you");
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
            <div className="relative w-full">
              <select
                id="country"
                {...register("country")}
                value={selectedCountry}
                onChange={handleCountryChange}
                className={`w-full h-12 px-4 ${
                  errors.country
                    ? " border-primary-600 focus:outline-primary-600"
                    : "border-[#B8C5CA] focus:outline-neutral-500"
                } py-3 border rounded-lg appearance-none ${
                  selectedCountry === ""
                    ? "text-[#B8C5CA] text-sm"
                    : "text-neutral-800"
                }`}
              >
                <option value="" disabled selected hidden>
                  Select Your Country
                </option>
                {countries.map(({ country, flag, code }) => (
                  <option className="text-black" key={code} value={code}>
                    <img src={flag} alt={code} /> {country}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                <ArrowDownIcon />
              </div>
            </div>
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
