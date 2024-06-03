import { useState } from "react";
import { Link } from "react-router-dom";
import googleIcon from "../../../assets/icons/google.svg";
import facebookIcon from "../../../assets/icons/facebook.svg";
import { ArrowDownIcon } from "../../../assets/icons/ArrowDownIcon";
import { countries } from "../../../data/countries";
const SignUpForm = () => {
  // const countries: country[] = useCountries();
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };
  return (
    <div className="w-full flex flex-col gap-8 items-center">
      <div className="w-full flex flex-col gap-4 items-center">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="country" className="font-semibold">
            Select Your Country
          </label>
          <div className="relative w-full">
            <select
              id="country"
              value={selectedCountry}
              onChange={handleCountryChange}
              className={`w-full h-12 px-4 py-3 border border-[#B8C5CA] rounded-lg appearance-none ${
                selectedCountry === ""
                  ? "text-[#B8C5CA] font-medium text-sm"
                  : "text-black"
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
        </div>{" "}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="email" className="font-semibold">
            Email Address
          </label>
          <input
            placeholder="Email Address"
            id="email"
            type="text"
            className="w-full border-[1.5px] rounded-[8px] border-[#B8C5CA] h-12 py-3 px-4 
            placeholder:font-medium placeholder:text-[#B8C5CA] placeholder:text-sm"
          />
        </div>{" "}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            placeholder="Select Password"
            id="password"
            type="password"
            className="w-full border-[1.5px] rounded-[8px] border-[#B8C5CA] h-12 py-3 px-4 
            placeholder:font-medium placeholder:text-[#B8C5CA] placeholder:text-sm"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 ">
        <div className="w-full flex flex-col gap-4 ">
          <Link
            to="/about-you"
            className="w-full place-content-center font-bold bg-primary-500 text-white rounded-[8px] h-[52px] p-[8px] text-center "
          >
            Sign Up
          </Link>
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
    </div>
  );
};

export default SignUpForm;
