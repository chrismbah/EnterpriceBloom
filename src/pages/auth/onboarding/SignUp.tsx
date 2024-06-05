import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm.";
const SignUp = () => {
  return (
    <div className="w-[80%]">
      <div className="mb-[28px] ">
        <h1 className="font-bold text-3xl mb-[5px] ">Create your account</h1>
        <p className="font-semibold text-[1.05rem] leading-[1.5rem] text-[#36474F] ">
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
