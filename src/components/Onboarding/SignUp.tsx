import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm.";

const SignUp = () => {
  return (
    <div className=" w-full lg:w-[80%] xl:w-[85%]">
      <div className="mb-[28px] ">
        <h1 className="font-bold text-2xl md:text-3xl mb-0.5 md:mb-[5px]">Create your account</h1>
        <p className="font-semibold text-base md:text-[1.05rem] leading-6 text-[#36474F] ">
          Already have an account?{" "}
          <Link to="/login" className="text-[#DA281C]">
            Log In
          </Link>
        </p>
      </div>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
