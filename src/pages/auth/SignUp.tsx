import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm.";
const SignUp = () => {
  return (
    <div className=" w-[772px]">
      <div className="mb-[80px] ">
        <h1 className="font-bold text-[48px] leading-[58.09px] mb-[10px] ">
          Create your account
        </h1>
        <p className="font-semibold text-[28px] leading-[33.89px] ">
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
