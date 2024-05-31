import { Link } from "react-router-dom";
import googleIcon from "../../assets/svg/google.svg";
import facebookIcon from "../../assets/svg/facebook.svg";
const SignUpForm = () => {
  return (
    <div className="w-full flex flex-col gap-[40px] items-center">
      <div className="w-full flex flex-col gap-8 items-center">
        <div className="w-full flex flex-col gap-[12px]">
          <label
            htmlFor="country"
            className="font-semibold text-[24px] leading-[29.05px]"
          >
            Country
          </label>
          <input
            placeholder="Select Country"
            id="country"
            type="text"
            className="w-full border-[1.5px] rounded-[8px] border-[#B8C5CA] h-[80px] px-[32px] py-[29px] 
            placeholder:font-medium text-[18px] leading-[21.78px] "
          />
        </div>{" "}
        <div className="w-full flex flex-col gap-[12px]">
          <label
            htmlFor="email"
            className="font-semibold text-[24px] leading-[29.05px]"
          >
            Email Address
          </label>
          <input
            placeholder="Email Address"
            id="email"
            type="text"
            className="w-full border-[1.5px] rounded-[8px] border-[#B8C5CA] h-[80px] px-[32px] py-[29px] 
            placeholder:font-medium text-[18px] leading-[21.78px] "
          />
        </div>{" "}
        <div className="w-full flex flex-col gap-[12px]">
          <label
            htmlFor="password"
            className="font-semibold text-[24px] leading-[29.05px]"
          >
            Password
          </label>
          <input
            placeholder="Select Password"
            id="password"
            type="password"
            className="w-full border-[1.5px] rounded-[8px] border-[#B8C5CA] h-[80px] px-[32px] py-[29px] 
            placeholder:font-medium text-[18px] leading-[21.78px] "
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 ">
        <div className="w-full flex flex-col gap-6 ">
          <Link
            to="/about-you"
            className="w-full place-content-center text-[20px] leading[24.2px] font-bold bg-primary-500 text-white rounded-[8px] h-[72px] p-[10px] text-center "
          >
            Sign Up
          </Link>
          <div className="w-full flex flex-col gap-6 ">
            <p className="w-full text-center text-[#94A5AB] font-medium text-[18px] leading-[21.78px] ">
              Or sign up with
            </p>
            <div className="w-full flex flex-col items-center gap-4 ">
              <button className="w-full flex items-center justify-center gap-[10px] text-[#262520] text-[20px] leading-[24.2px] font-bold bg-[#F3F4F5] h-[72px] p-[10px] text-center rounded-[8px]">
                <img src={googleIcon} alt="Google" className="w-8 h-8" />{" "}
                <span>Google</span>
              </button>
              <button className="w-full flex items-center justify-center gap-[10px] text-[#262520] text-[20px] leading-[24.2px] font-bold bg-[#F3F4F5] h-[72px] p-[10px] text-center rounded-[8px]">
                <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />{" "}
                <span>Facebook</span>
              </button>
            </div>
          </div>
        </div>
        <p className="w-full text-left font-semibold text-[18px] leading-[30px]  ">
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
